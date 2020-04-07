<?php

namespace App\Repository;

use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Pagerfanta\Adapter\DoctrineORMAdapter;

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


    public function pagerfantaQuery()
    {
        return new DoctrineORMAdapter($this->createQueryBuilder('p')
            ->orderBy('p.updatedAt', 'ASC'))
            ;
    }


    public function findAllCategoryOrdered($category)
    {
        return new DoctrineORMAdapter($this->createQueryBuilder('p')
            ->leftJoin('p.category', 'c')
            ->andWhere('p.category = :category')
            ->setParameter('category', $category))
        ;

    }
}
