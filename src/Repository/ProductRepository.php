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
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->orderBy('p.updatedAt', 'ASC')
        );
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
        return new DoctrineORMAdapter($this->createQueryBuilder('p')
//            соеденяем product.id и категории
            ->leftJoin('p.categories', 'c')
            ->addSelect('c')
            ->andWhere('c.id = :categories')
            ->setParameter('categories', $category)

        );
    }

    public function findAllProductCategoryOrderedByNameExceptThisOne($category, $link)
    {
        return new DoctrineORMAdapter($this->createQueryBuilder('p')
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
