<?php

namespace App\Repository;

use App\Entity\ProductInfo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ProductInfo|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProductInfo|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProductInfo[]    findAll()
 * @method ProductInfo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MoreInfoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProductInfo::class);
    }

    // /**
    //  * @return MoreInfo[] Returns an array of MoreInfo objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MoreInfo
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
