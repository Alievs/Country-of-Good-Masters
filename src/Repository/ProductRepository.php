<?php

namespace App\Repository;

use App\Data\FilterData;
use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Pagerfanta\Doctrine\ORM\QueryAdapter;

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

    public function ByNewestQuery()
    {
        return new QueryAdapter($this->createQueryBuilder('p')
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->orderBy('p.updatedAt', 'ASC')
        );
    }
//* @return Product[]
    /**
     * Retrieves the products related to a filter
     */
    public function findFilter($filters)
    {
        $query = $this->createQueryBuilder('p')
                ->addSelect('c')
                ->leftJoin('p.categories', 'c')
                ->orderBy('p.updatedAt', 'ASC')
        ;

        if (!empty($filters->min)){
            $query = $query
                ->andWhere('(CASE WHEN p.discount IS NOT NULL THEN ROUND(p.unitPrice * (100 - p.discount)/100, 1) ELSE p.unitPrice END) >= :min')
                ->setParameter('min', $filters->min)
            ;
        }

        if (!empty($filters->max)){
            $query = $query
                ->andWhere('(CASE WHEN p.discount IS NOT NULL THEN ROUND(p.unitPrice * (100 - p.discount)/100, 1) ELSE p.unitPrice END) <= :max')
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
        return $query;
    }


    public function findFilterCategoryOrdered($category, FilterData $filters)
    {
        $query = $this->createQueryBuilder('p')
            ->addSelect('c')
            ->leftJoin('p.categories', 'c')
            ->andWhere('c.id = :categories')
            ->setParameter('categories', $category)
            ->orderBy('p.updatedAt', 'ASC')
        ;
//        фильтры цены они всегда присутствуют в форме
        if (!empty($filters->min)){
            $query = $query
                ->andWhere('p.unitPrice >= :min')
                ->setParameter('min', $filters->min)
            ;
        }

        if (!empty($filters->max)){
            $query = $query
                ->andWhere('p.unitPrice <= :max')
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
//        // ... другие фильтры ...


        return $query;
    }

    /**
     * @param string $link
     * @return array|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findProductByLink($link): ?array
    {
        return $this->createQueryBuilder('p')

            ->addSelect('c', 'i')
            ->leftJoin('p.categories', 'c')
            ->leftJoin('p.images', 'i')
            ->andWhere('p.link = :link')
            ->setParameter('link', $link)
            ->getQuery()
            ->getOneOrNullResult(\Doctrine\ORM\AbstractQuery::HYDRATE_ARRAY)
            ;
    }

    public function findAllCategoryOrderedById($category)
    {
        return new QueryAdapter($this->createQueryBuilder('p')
//            соеденяем product.id и категории
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->andWhere('c.id = :categories')
            ->setParameter('categories', $category)
            ->orderBy('p.updatedAt', 'ASC')

        );
    }

    public function findAllProductsCategoryOrderedByNameExceptThisOne($category, $link)
    {
        return new QueryAdapter($this->createQueryBuilder('p')
//            соеденяем product.id и категории
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->andWhere('p.link != :link')
            ->andWhere('c.title = :categories')
            ->setParameter('categories', $category)
            ->setParameter('link', $link)

        );
    }

}
