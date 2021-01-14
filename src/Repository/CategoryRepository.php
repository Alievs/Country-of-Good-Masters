<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Query\Expr\Join;
use Gedmo\Tree\Entity\Repository\NestedTreeRepository;

/**
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends NestedTreeRepository
{

    public function __construct(EntityManagerInterface $manager)
    {
        parent::__construct($manager, $manager->getClassMetadata(Category::class));
    }

    public function findChildCategoryLevel($id)
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT  c2.id, c2.title, c2.lft, c2.lvl, c2.rgt, c2.categoryImage
                FROM App:Category c
                LEFT JOIN App:Category c2 
                WITH c.root = c2.root
                WHERE c.id = :id
                AND c2.lft > c.lft AND c2.rgt < c.rgt
                AND c2.root = c.root
                AND c2.lvl = c.lvl + 1'
            )
            ->setParameter('id', $id)
            ->getResult();
    }

    public function findParentCategoryLevel($id)
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT  c2.id, c2.title, c2.lft, c2.lvl, c2.rgt, c2.categoryImage
                FROM App:Category c
                LEFT JOIN App:Category c2 
                WITH c.root = c2.root
                WHERE c.id = :id
                AND c2.root = c.root
                AND c2.lvl = c.lvl - 1'
            )
            ->setParameter('id', $id)
            ->getResult();
    }
}
