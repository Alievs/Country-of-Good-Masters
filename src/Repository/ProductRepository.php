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


    public function findByName($value)
    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.name LIKE :val')
//            ->setParameter('val', $value)
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//            ;

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
        return new DoctrineORMAdapter($this->createQueryBuilder('p')
            ->orderBy('p.updatedAt', 'ASC'))
            ;
    }


    public function findAllCategoryOrdered($category)
    {
        return new DoctrineORMAdapter($this->createQueryBuilder('p')
//            соеденяем product.id и категории
            ->leftJoin('p.categories', 'c')
            // соеденяем product.productInfo и productInfo
            ->leftJoin('p.productInfo', 'product_info')
            ->addSelect('product_info')
            ->addSelect('c')
            ->andWhere('c.id = :categories')
            ->setParameter('categories', $category)

        );

    }

}
