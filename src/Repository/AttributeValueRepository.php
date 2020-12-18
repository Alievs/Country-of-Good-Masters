<?php

namespace App\Repository;

use App\Entity\AttributeValue;
use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AttributeValue|null find($id, $lockMode = null, $lockVersion = null)
 * @method AttributeValue|null findOneBy(array $criteria, array $orderBy = null)
 * @method AttributeValue[]    findAll()
 * @method AttributeValue[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AttributeValueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AttributeValue::class);
    }

}
