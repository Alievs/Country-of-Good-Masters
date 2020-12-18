<?php

namespace App\Repository;

use App\Data\FilterData;
use App\Entity\AttributeValue;
use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Product::class);
    }


    public function findByName($value)
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT p
                FROM App:Product p
                WHERE p.name LIKE :str'
            )
            ->setParameter('str', '%'.$value.'%')
            ->setMaxResults(10)
            ->getResult();
    }


    /**
     * Get the minimum and maximum price corresponding to a filter
     * @return integer[]
     */
    public function findMinMax(FilterData $filters, $category = null): array
    {
        $results = $this->getFilterQuery($filters, true)
            ->addSelect('MIN(p.final_price) as min',
                'MAX(p.final_price) as max')
        ;

        if (!empty($category)){
            $results = $results
                ->andWhere('c.id = :categories')
                ->setParameter('categories', $category)
            ;
        }

        $results = $results
            ->getQuery()
            ->getScalarResult()
        ;

        return [(int)$results[0]['min'], (int)$results[0]['max']];
    }

    /**
     * Retrieves the products related to a filter
     * @param FilterData $filters
     * @param string $sort
     * @param null $category
     * @return QueryBuilder
     */
    public function findFilter(FilterData $filters, $sort, $category = null): QueryBuilder
    {
        $query = $this->getFilterQuery($filters);

        $query = $this->sortProducts($query, $sort);

        if (!empty($category)){
            $query = $query
                ->andWhere('c.id = :categories')
                ->setParameter('categories', $category)
            ;
        }

        return $query;
    }


    /**
     * @param QueryBuilder $query
     * @param string $sort
     * @return QueryBuilder
     */
    private function sortProducts (QueryBuilder $query, $sort) {

        if ($sort === 'novelty'){
            $query = $query
                ->orderBy('p.updatedAt', 'ASC')
            ;
        }

        if ($sort === 'cheap'){
            $query = $query
                ->addSelect('CASE WHEN p.discount IS NOT NULL THEN ROUND(p.unitPrice * (100 - p.discount)/100, 1) ELSE p.unitPrice END AS HIDDEN FILTER')
                ->orderBy('FILTER', 'ASC')
            ;
        }

        if ($sort === 'expensive'){
            $query = $query
//                ->addSelect('CASE WHEN p.discount IS NOT NULL THEN ROUND(p.unitPrice * (100 - p.discount)/100, 1) ELSE p.unitPrice END AS HIDDEN FILTER')
                ->orderBy('p.final_price', 'DESC')
            ;
        }

        if ($sort === 'action'){
            $query = $query
                ->orderBy('p.discount', 'DESC')
            ;
        }

//        if ($sort === 'rank'){
//            $query = $query
//                ->orderBy('p.comment', 'ASC')
//            ;
//        }

        return $query;
    }

    /**
     * @param FilterData $filters
     * @return QueryBuilder
     */
    private function getFilterQuery (FilterData $filters, $ignorePrice = false): QueryBuilder
    {
        $query = $this->createQueryBuilder('p')
            ->addSelect('c')
            ->leftJoin('p.categories', 'c')
        ;

        if (!empty($filters->min) && $ignorePrice === false){
            $query = $query
                ->andWhere('p.final_price >= :min')
                ->setParameter('min', $filters->min)
            ;
        }

        if (!empty($filters->max) && $ignorePrice === false){
            $query = $query
                ->andWhere('p.final_price <= :max')
                ->setParameter('max', $filters->max)
            ;
        }
//        не забыть type сделать по ID так быстрее
        if (!empty($filters->material)) {
            $query = $query
                ->addSelect('av_material')
                ->innerJoin('p.attributeValues', 'av_material')
                ->innerJoin('av_material.attributeType', 'av_material_type')
                ->andWhere('av_material_type.name = :material_type_name')
                ->setParameter('material_type_name', 'material')
                ->andWhere('av_material.value IN (:value1)')
                ->setParameter('value1', $filters->material)
            ;
        }

        if (!empty($filters->country)) {
            $query = $query
                ->addSelect('av_country')
                ->innerJoin('p.attributeValues', 'av_country')
                ->innerJoin('av_country.attributeType', 'av_country_type')
                ->andWhere('av_country_type.name = :country_type_name')
                ->setParameter('country_type_name', 'country')
                ->andWhere('av_country.value IN (:value2)')
                ->setParameter('value2', $filters->country)
            ;
        }


        if (!empty($filters->brand)) {
            $query
                ->addSelect('av_brand')
                ->innerJoin('p.attributeValues', 'av_brand')
                ->innerJoin('av_brand.attributeType', 'av_brand_type')
                ->andWhere('av_brand_type.name = :brand_type_name')
                ->setParameter('brand_type_name', 'brand')
                ->andWhere('av_brand.value IN (:value3)')
                ->setParameter('value3', $filters->brand)
            ;
        }

        // ... другие фильтры ...

        return $query;
    }

    /**
     * @param int $id
     * @return array|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findProductById($id): ?array
    {
        return $this->createQueryBuilder('p')

            ->addSelect('c', 'i')
            ->leftJoin('p.categories', 'c')
            ->leftJoin('p.images', 'i')
            ->andWhere('p.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult(\Doctrine\ORM\AbstractQuery::HYDRATE_ARRAY);
    }

    public function findAllProductsCategoryOrderedByIdExceptThisOne($category, $id)
    {
        return $this->createQueryBuilder('p')
//            соеденяем product.id и категории
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->andWhere('p.id != :id')
            ->andWhere('c.title = :categories')
            ->setParameter('categories', $category)
            ->setParameter('id', $id)

        ;
    }


    public function findAllCountedOptions($options)
    {

        $result = [];

        foreach ($options as $key => $value){

            asort($value);
            foreach ($value as $item) {

                $qb = $this->getEntityManager()->createQueryBuilder();
                $query = $qb
                    ->addSelect($qb->expr()->countDistinct('p.id'))
                    ->from(Product::class,'p')
                    ->innerJoin('p.attributeValues', 'av_s')
                    ->andWhere('av_s.value = :value_s')
                    ->setParameter('value_s', $item)
                    ->andWhere('(CASE WHEN p.discount IS NOT NULL THEN ROUND(p.unitPrice * (100 - p.discount)/100, 1) ELSE p.unitPrice END) >= :min')
                    ->andWhere('(CASE WHEN p.discount IS NOT NULL THEN ROUND(p.unitPrice * (100 - p.discount)/100, 1) ELSE p.unitPrice END) <= :max')
                    ->setParameter('min', '300')
                    ->setParameter('max', '1500')

//                      при условие что выбран фильтр Plastic
                    ->innerJoin('p.attributeValues', 'av_p')
                    ->andWhere('av_p.value = :value_p')
                    ->setParameter('value_p', 'Brand')
//
                    ->innerJoin('p.attributeValues', 'av_zz')
                    ->andWhere('av_zz.value = :value_zz')
                    ->setParameter('value_zz', '24 см')
//
//                    ->innerJoin('p.attributeValues', 'av_ff')
//                    ->andWhere('av_ff.value = :value_ff')
//                    ->setParameter('value_ff', 'Blue')
//
//                    ->innerJoin('p.attributeValues', 'av_fz')
//                    ->andWhere('av_fz.value = :value_fg')
//                    ->setParameter('value_fg', 'Ukraine')
//
//                    ->innerJoin('p.attributeValues', 'av_gg')
//                    ->andWhere('av_gg.value = :value_gg')
//                    ->setParameter('value_gg', 'Poland')
//
//                    ->innerJoin('p.attributeValues', 'av_kk')
//                    ->andWhere('av_kk.value = :value_jj')
//                    ->setParameter('value_jj', '10 см')
//
//                    ->innerJoin('p.attributeValues', 'av_llk')
//                    ->andWhere('av_llk.value = :value_ljk')
//                    ->setParameter('value_ljk', '20 см')



                    ->getQuery()
                    ->getResult()
                ;
                $result[$key][$item] = $query[0][1];
            }

        }

        return $result;
    }


}
