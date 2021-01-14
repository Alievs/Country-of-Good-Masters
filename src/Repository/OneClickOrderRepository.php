<?php

namespace App\Repository;

use App\Entity\OneClickOrder;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method OneClickOrder|null find($id, $lockMode = null, $lockVersion = null)
 * @method OneClickOrder|null findOneBy(array $criteria, array $orderBy = null)
 * @method OneClickOrder[]    findAll()
 * @method OneClickOrder[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OneClickOrderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OneClickOrder::class);
    }

    // /**
    //  * @return OneClickOrder[] Returns an array of OneClickOrder objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?OneClickOrder
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
