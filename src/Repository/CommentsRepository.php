<?php

namespace App\Repository;

use App\Entity\Comments;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Comments|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comments|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comments[]    findAll()
 * @method Comments[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Comments::class);
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function findByRatings($id): int
    {
        $rating = $this->getEntityManager()
            ->createQuery(
                'SELECT SUM(c.rating) / COUNT(c.id) FROM App:Comments c WHERE c.product = :id AND c.isPublished = 1')
            ->setParameter('id', $id)
            ->getSingleResult();
        return (int) current($rating);
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function findByCount($id): int
    {
        $count = $this->getEntityManager()
            ->createQuery(
                'SELECT COUNT(c.id) FROM App:Comments c WHERE c.product = :id AND c.isPublished = 1')
            ->setParameter('id', $id)
            ->getSingleResult();
        return (int) current($count);
    }

    public function findByPublished($id)
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT c FROM App:Comments c WHERE c.product = :id AND c.isPublished = 1 ORDER BY c.published_date DESC ')
            ->setParameter('id', $id)
            ->getResult();
    }

    // /**
    //  * @return Comments[] Returns an array of Comments objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Comments
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
