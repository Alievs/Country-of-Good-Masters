<?php

namespace App\Repository;

use App\Entity\AttributeType;
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
     * @param string $link
     * @return array|null
     */
    public function findByLink($link)
    {
        return $this->createQueryBuilder('at')

            ->addSelect('attribute_value', 'product')

            ->innerJoin('at.attributeValue', 'attribute_value')

            ->innerJoin('attribute_value.product', 'product')

            ->andWhere('product.link = :link')
            ->andWhere('product.id = attribute_value.product')
            ->setParameter('link', $link)
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
}
