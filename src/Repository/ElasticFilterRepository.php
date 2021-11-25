<?php

namespace App\Repository;

use App\Traits\Sort;
use Elastica\Aggregation\Nested;
use Elastica\Query;
use Elastica\Query\BoolQuery;

class ElasticFilterRepository
{
    use Sort;

    /**
     * @param array $pre_choices
     * @param int $min
     * @param int $max
     * @param int|null $category_id
     * @return array
     */
    public function smartFilter(array $pre_choices, int $min, int $max, ?int $category_id): array
    {

        $elasticaClient = new \Elastica\Client();
        $elasticaIndex = $elasticaClient->getIndex('product');

        $query = new \Elastica\Query();
        $query->setSize(0);

        $boolMainQuery1 = new \Elastica\Query\BoolQuery();

        $fieldRange = new \Elastica\Query\Range('final_price', array('gte' => $min, 'lte' => $max));
        $boolMainQuery1->addMust($fieldRange);

        if (!empty($category_id)){
            $categoryQuery = new \Elastica\Query\Match();
            $categoryQuery->setFieldQuery('categories.id', $category_id);
            $categoryDomain = new \Elastica\Query\Nested();
            $categoryDomain->setPath('categories');
            $categoryDomain->setQuery($categoryQuery);
            $boolMainQuery1->addMust($categoryDomain);
        }
        $query->setQuery($boolMainQuery1);

        if (empty($pre_choices)){
            [$agg, $types, $names, $cardinality] = $this->declareFacetFilter();

        } else {
            [$agg, $types, $names, $cardinality] = $this->declareFacetFilter();

            $names->addAggregation($cardinality);
            $types->addAggregation($names);
            $agg->addAggregation($types);

            $el_filters = [];
            $boolFilteredFull = new \Elastica\Query\BoolQuery();
            foreach ($pre_choices as $key => $values) {
                $filter_type = new \Elastica\Query\Term(['attributeValues.attributeType' => $key]);
                $filter_name = new \Elastica\Query\Terms('attributeValues.value', $values);

                $domainFiltered2 = new \Elastica\Query\Nested();
                $domainFiltered2->setPath('attributeValues');
                $boolDomainFiltered2 = new \Elastica\Query\BoolQuery();
                $boolDomainFiltered2->addFilter($filter_type);
                $boolDomainFiltered2->addFilter($filter_name);
                $domainFiltered2->setQuery($boolDomainFiltered2);

                $boolFilteredFull->addFilter($domainFiltered2);
                $el_filters[$key] = $domainFiltered2;
            }
            $agg_with_active_facets = new \Elastica\Aggregation\Filter('agg_with_active_facets', $boolFilteredFull);

            $query = $this->checkFacetsFilter($el_filters, $boolMainQuery1, $agg, $query);
        }

//       главная агрегация в которую будем добавлять результаты других агрегаций
        if (isset($agg_with_active_facets)){
            $agg_with_active_facets->addAggregation($agg);
            $query->addAggregation($agg_with_active_facets);
        } else {
            $names->addAggregation($cardinality);
            $types->addAggregation($names);
            $agg->addAggregation($types);
            $query->addAggregation($agg);
        }


        //Search on the index.
//        return $elasticaIndex->search($query)->getAggregation('agg_attr_full');
        return $elasticaIndex->search($query)->getAggregations();
    }

    public function declareFacetFilter(): array
    {
        $agg = new \Elastica\Aggregation\Nested('agg_attr_full', 'attributeValues');//inavtive_filter_agg
        $types = new \Elastica\Aggregation\Terms('attr_name');
        $names = new \Elastica\Aggregation\Terms('attr_value');
        $cardinality = new \Elastica\Aggregation\Cardinality('unique_products');
        $cardinality->setField('attributeValues.product');
        $types->setField('attributeValues.attributeType');
        $types->setSize(100);
        $names->setField('attributeValues.value');
        $names->setSize(50);

        return [$agg, $types, $names, $cardinality];
    }

    /**
     * @param array $el_filters
     * @param BoolQuery $boolMainQuery1
     * @param Nested $agg
     * @param Query $query
     * @return Query
     */
    public function checkFacetsFilter(array $el_filters, BoolQuery $boolMainQuery1, Nested $agg, Query $query): Query
    {
        if (count($el_filters) === 1){
            array_key_first($el_filters);
            $filter = new \Elastica\Aggregation\Filter('filter_' . array_key_first($el_filters), $boolMainQuery1);
            $filter->addAggregation($agg);
            $query->addAggregation($filter);
        } else {
            /** агрегируем данные с применением всех фильтров кроме того (фильтра) данные которого ожидаются */
            foreach ($el_filters as $key => $value) {
                $filter = new \Elastica\Aggregation\Filters('filter_'. $key);
                foreach ($el_filters as $key2 => $value2){
                    if ($key !== $key2) {
                        $filter->addFilter($value2);
                    }
                }
                $filter->addAggregation($agg);
                $query->addAggregation($filter);
            }
        }
        return $query;
    }

    public function facetsWithoutActiveFilter (array $data): array
    {
        $quantity = [];

        foreach ($data['agg_attr_full']['attr_name']['buckets'] as $value) {
            foreach ($value['attr_value']['buckets'] as $val){
                $quantity[$val['key']] = $val['unique_products']['value'];
            }
        }
        return $quantity;
    }

    public function facetsWithActiveFilters(array $data, array $filters): array
    {
        if (count($data) === 2) {
            $quantity = $this->getFilteredAggregationForSingleType($data, $filters);
        } else {
            $quantity = $this->getFilteredAggregationForTypes($data, $filters);
        }

        foreach ($data['agg_with_active_facets']['agg_attr_full']['attr_name']['buckets'] as $type){
            if (in_array($type['key'], $filters, true)){
                continue;
            }
            foreach ($type['attr_value']['buckets'] as $val){
                $quantity[$val['key']] = $val['unique_products']['value'];
            }
        }
        return $quantity;
    }

    /**
     * @param array $data
     * @param array $filters
     * @return array
     */
    public function getFilteredAggregationForSingleType(array $data, array $filters): array
    {
        $quantity = [];

        foreach ($data as $key => $aggregation){
            $filter_name = explode('_', $key)[1];
            if (in_array($filter_name, $filters, true)){

                foreach ($aggregation['agg_attr_full']['attr_name']['buckets'] as $value){
                    if ($value['key'] === $filter_name){

                        foreach ($value['attr_value']['buckets'] as $val) {
                            $quantity[$val['key']] = $val['unique_products']['value'];
                        }
                        break;
                    }
                }
            }
        }
        return $quantity;
    }

    /**
     * @param array $filters
     * @param array $data
     * @return array
     */
    public function getFilteredAggregationForTypes(array $data, array $filters): array
    {
        $quantity = [];

        foreach ($data as $key => $aggregation){
            $filter_name = explode('_', $key)[1];
            if (in_array($filter_name, $filters, true)){

                foreach ($aggregation['buckets'][0]['agg_attr_full']['attr_name']['buckets'] as $value){
                    if ($value['key'] === $filter_name){

                        foreach ($value['attr_value']['buckets'] as $val) {
                            $quantity[$val['key']] = $val['unique_products']['value'];
                        }
                        break;
                    }
                }
            }
        }

        return $quantity;
    }

    /**
     * фильтрация на случай user ввода
     * @param array $parameter
     * @param array $options
     * @param int $min
     * @param int $max
     * @param int|null $category_id
     * @return array
     */
    public function clearParameter(array $parameter, array $options, int $min, int $max, int $category_id = null): array
    {

        $pre_choices = $this->stripUnrelatedKeys($parameter, $options);

        $filters = [];
        foreach ($pre_choices as $key => $value){
            $filters[] = $key;
        }
        $countedProducts = [];
        $aggregations = $this->smartFilter($pre_choices, $min, $max, $category_id);

        $maxAgg = count($aggregations);
        if ($maxAgg === 1) {
            $countedProducts = $this->facetsWithoutActiveFilter($aggregations);
        } elseif ($maxAgg > 1) {
            $countedProducts = $this->facetsWithActiveFilters($aggregations, $filters);
        }

        return $countedProducts;
    }


//    public function smartFilterwithLogger(){
//
//        $query = new \Elastica\Query();
//        $query->setSize(0);
//
//        $boolQuery = new \Elastica\Query\BoolQuery();
//
//        /* filter checked */
//        $fieldQuery = new \Elastica\Query\Match();
//        $fieldQuery->setFieldQuery('categories.id', 559);
//        $domainQuery = new \Elastica\Query\Nested();
//        $domainQuery->setPath('categories');
//        $domainQuery->setQuery($fieldQuery);
//
//        $fieldQuery2 = new \Elastica\Query\Match();
//        $fieldQuery2->setFieldQuery('attributeValues.value', 'Another Brand');
//        $domainQuery2 = new \Elastica\Query\Nested();
//        $domainQuery2->setPath('attributeValues');
//        $domainQuery2->setQuery($fieldQuery2);
//
//        $fieldRange = new \Elastica\Query\Range('final_price', array('gte' => 13, 'lte' => 1855));
//
//
//        $boolQuery->addMust($domainQuery);
//        $boolQuery->addMust($domainQuery2);
//        $boolQuery->addMust($fieldRange);
//
//        $query->setQuery($boolQuery);
//
//        $agg = new \Elastica\Aggregation\Nested('attributeValues', 'attributeValues');
//        $names = new \Elastica\Aggregation\Terms('value');
//        $cardinality = new \Elastica\Aggregation\Cardinality('unique_products');
//
//        $cardinality->setField('attributeValues.product');
//        $names->setField('attributeValues.value');
//        $names->setSize(100);
//
//        $names->addAggregation($cardinality);
//        $agg->addAggregation($names);
//        $query->addAggregation($agg);
//
//
//        $companies = $this->finder->findPaginated($query);
//        $aggregations = $companies->getAdapter()->getAggregations();
//
//        $needed = ['Another Brand', 'Brand', 'Poland'];
//        $asd = [];
//        foreach ($aggregations['attributeValues']['value']['buckets'] as $item){
//
//            if (in_array($item['key'], $needed) ){
//                $asd[$item['key']] =  $item['unique_products']['value'];
//            }
//        }
//
//        return $asd;
//
//    }

//    public function someFunc() {
//        $query = new \Elastica\Query();
//        $query->setSize(0);
//        $boolQuery = new \Elastica\Query\BoolQuery();
//        $fieldRange = new \Elastica\Query\Range('final_price', array('gte' => 13, 'lte' => 1855));
//        $boolQuery->addMust($fieldRange);
//        $query->setQuery($boolQuery);

//       активные фильтры
//        $filter_term1 = new \Elastica\Query\Term(['attributeValues.attributeType' => 'country']);
//        $filter_term2 = new \Elastica\Query\Terms('attributeValues.value', ['Ukraine']);
//        $filter_term3 = new \Elastica\Query\Term(['attributeValues.attributeType' => 'brand']);
//        $filter_term4 = new \Elastica\Query\Terms('attributeValues.value', ['Brand']);
//        $filter_term5 = new \Elastica\Query\Term(['attributeValues.attributeType' => 'material']);

//        (+1) - вся выборка если фильтры не активны
//        $agg = new \Elastica\Aggregation\Nested('agg_attr_full', 'attributeValues');//inavtive_filter_agg
//        $types = new \Elastica\Aggregation\Terms('attr_name');
//        $names = new \Elastica\Aggregation\Terms('attr_value');
//        $cardinality = new \Elastica\Aggregation\Cardinality('unique_products');
//        $cardinality->setField('attributeValues.product');
//        $types->setField('attributeValues.attributeType');
//        $types->setSize(100);
//        $names->setField('attributeValues.value');
//        $names->setSize(50);

//        добавление активных фильтров в агрегацию
//        $boolFiltered = new \Elastica\Query\BoolQuery();
//        $domainFiltered1 = new \Elastica\Query\Nested();
//        $domainFiltered1->setPath('attributeValues');
//        $boolDomainFiltered = new \Elastica\Query\BoolQuery();
//        $boolDomainFiltered->addFilter($filter_term1);
//        $boolDomainFiltered->addFilter($filter_term2);
//        $domainFiltered1->setQuery($boolDomainFiltered);
//        $boolFiltered->addFilter($domainFiltered1);
//        окончание добавление (первого) фильтра в агрегацию
//        $domainFiltered2 = new \Elastica\Query\Nested();
//        $domainFiltered2->setPath('attributeValues');
//        $boolDomainFiltered2 = new \Elastica\Query\BoolQuery();
//        $boolDomainFiltered2->addFilter($filter_term3);
//        $boolDomainFiltered2->addFilter($filter_term4);
//        $domainFiltered2->setQuery($boolDomainFiltered2);
//        $boolFiltered->addFilter($domainFiltered2);
//
////        окончание добавление (второго) фильтра в агрегацию
//        $agg2 = new \Elastica\Aggregation\Filter('agg_attr_strings_filtered', $boolFiltered);
//        /** агрегируем данные с применением всех фильтров кроме того (фильтра) данные которого ожидаются */
//        $filter1 = new \Elastica\Aggregation\Filters('filter_'.'country');
//        $filter1->addFilter($filter_term1);
//        $aggFiltered = new \Elastica\Aggregation\Nested('filtered_country', 'attributeValues');
//
//        $names->addAggregation($cardinality);
//        $types->addAggregation($names);
//        $agg->addAggregation($types);
//
//        $filter1->addAggregation($types);
//        $aggFiltered->addAggregation($filter1);
//        $agg2->addAggregation($aggFiltered);
//
//
//        $query->addAggregation($agg);
//        $query->addAggregation($agg2);
//
//
//        $companies = $this->finder->findPaginated($query);
//        $aggregations = $companies->getAdapter()->getAggregations();
//        $asd = $countFilter;
//        $asd = $this->stripUnrelatedKeys($getParams, $options);
//        $asd = $countFilter;
//    }

}