<?php

namespace App\Repository;

use App\Entity\AttributeType;
use App\Entity\AttributeValue;
use App\Entity\Category;
use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AttributeType|null find($id, $lockMode = null, $lockVersion = null)
 * @method AttributeType|null findOneBy(array $criteria, array $orderBy = null)
 * @method AttributeType[]    findAll()
 * @method AttributeType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AttributeTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AttributeType::class);
    }

    /**
     * @param int $id
     * @return array|null
     */
    public function findOptionsById($id)
    {
        return $this->createQueryBuilder('at')

            ->addSelect('attribute_value', 'product')

            ->innerJoin('at.attributeValue', 'attribute_value')

            ->innerJoin('attribute_value.product', 'product')

            ->andWhere('product.id = :id')
            ->andWhere('product.id = attribute_value.product')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
            ;
    }


    /**
     * @param int $id
     * @return array|null
     */
    public function findById($id)
    {
        return $this->createQueryBuilder('at')

            ->addSelect('attribute_value', 'product')

            ->innerJoin('at.attributeValue', 'attribute_value')

            ->innerJoin('attribute_value.product', 'product')
            ->andWhere('product.id = :id')
            ->andWhere('product.id = attribute_value.product')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
            ;
    }

    public function findOptionsWithUniqueValue()
    {
        $result = $this->getEntityManager()->createQueryBuilder()
            ->addSelect('attribute_type.name', 'attribute_value.value')
            ->distinct()
            ->from(AttributeType::class,'attribute_type')
            ->from(AttributeValue::class, 'attribute_value')
            ->andWhere('attribute_type.id = attribute_value.attributeType')

            ->andWhere('attribute_type.name != :param1')
            ->andWhere('attribute_type.name != :param2')
            ->andWhere('attribute_type.name != :param3')
            ->setParameter('param1', 'width')
            ->setParameter('param2', 'height')
            ->setParameter('param3', 'depth')

            ->getQuery()
            ->getResult()
            ;

        $out = [];
        while( $a = array_shift($result)) {
            $out[$a['name']][] = $a['value'];
        }

        return $out;
    }

    /**
     * @param int $id
     * @return array|null
     */
    public function findOptionsWithUniqueValueByCategory($id)
    {
        $result =
            $this->getEntityManager()->createQueryBuilder()
            ->addSelect('attribute_type.name', 'attribute_value.value')
            ->distinct()
            ->from(AttributeType::class,'attribute_type')
            ->from(AttributeValue::class,'attribute_value')
            ->leftJoin('attribute_value.product', 'product')
            ->leftJoin('product.categories', 'category')

            ->andWhere('attribute_type.id = attribute_value.attributeType')
            ->andWhere('attribute_type.name != :param1')
            ->andWhere('attribute_type.name != :param2')
            ->andWhere('attribute_type.name != :param3')
            ->setParameter('param1', 'width')
            ->setParameter('param2', 'height')
            ->setParameter('param3', 'depth')

            ->andWhere('category.id = :categories')
            ->setParameter('categories', $id)


            ->getQuery()
            ->getResult()
        ;

        $out = [];
        while( $a = array_shift($result)) {
            $out[$a['name']][] = $a['value'];
        }
        return $out;
    }


}
