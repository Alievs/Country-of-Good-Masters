<?php

namespace App\Repository;


class ElasticFilterRepository
{

    public function smartFilter($choices, $min, $max, $category_id){

        $elasticaClient = new \Elastica\Client();
        $elasticaIndex = $elasticaClient->getIndex('product');

        $query = new \Elastica\Query();
        $query->setSize(0);

        $boolQuery = new \Elastica\Query\BoolQuery();

        $domainFilters = [];
        $iMax = count($choices);
        for ($i=0; $i < $iMax; $i++) {
            $fieldQuery = new \Elastica\Query\Match();
            $fieldQuery->setFieldQuery('attributeValues.value', $choices[$i]);
            $domainFilters[$i] = new \Elastica\Query\Nested();
            $domainFilters[$i]->setPath('attributeValues');
            $domainFilters[$i]->setQuery($fieldQuery);

            $boolQuery->addMust($domainFilters[$i]);
        }
        $fieldRange = new \Elastica\Query\Range('final_price', array('gte' => $min, 'lte' => $max));
        $boolQuery->addMust($fieldRange);

        if (!empty($category_id)){
            $categoryQuery = new \Elastica\Query\Match();
            $categoryQuery->setFieldQuery('categories.id', $category_id);
            $categoryDomain = new \Elastica\Query\Nested();
            $categoryDomain->setPath('categories');
            $categoryDomain->setQuery($categoryQuery);
            $boolQuery->addMust($categoryDomain);
        }


        $query->setQuery($boolQuery);

        $agg = new \Elastica\Aggregation\Nested('attributeValues', 'attributeValues');
        $names = new \Elastica\Aggregation\Terms('value');
        $cardinality = new \Elastica\Aggregation\Cardinality('unique_products');

        $cardinality->setField('attributeValues.product');
        $names->setField('attributeValues.value');
        $names->setSize(100);

        $names->addAggregation($cardinality);
        $agg->addAggregation($names);
        $query->addAggregation($agg);



        //Search on the index.
        return $elasticaIndex->search($query)->getAggregation('attributeValues');
//        return $query;
    }

//    фильтрация на случай user ввода
    public function clearParameter($parameter, $options, $min, $max, $category_id = null){

        $pre_choices = [];

        foreach ($parameter as $key => $value){

            if (isset($options[$key])){
//                inner values в двух массивах
                $choice = array_intersect( $value, $options[$key]);
                $pre_choices[$key] = $choice;
            }
        }

        $choices = [];
        array_walk_recursive($pre_choices, function ($item, $key) use (&$choices) {
            $choices[] = $item;
        });

        $aggregations = $this->smartFilter($choices, $min, $max, $category_id);

        $countedProducts = [];
        foreach ($aggregations['value']['buckets'] as $item){

            $countedProducts[$item['key']] =  $item['unique_products']['value'];
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
//        $asd = $companies->getAdapter()->getAggregations();
//
//        return $asd;
//
//    }

}