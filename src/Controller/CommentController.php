<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\CommentsRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CommentController extends AbstractController
{
    /**
     * @Route("/product/{name}/{link}/p10{id}/comments", name="comments")
     *
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function commentsListProductAction
    (
        ProductRepository $productRepository,
        CommentsRepository $commentsRepository,
        CategoryRepository $categoryRepository,
        $id,
        $name)
    : Response
    {
        $tCategory = $categoryRepository->findByTitle($name);
        $product = $productRepository->findProductById($id);
        $cCount = $commentsRepository->findByCount($id);
        $cPublished = $commentsRepository->findByPublished($id);
        return $this->render('comments/comments.html.twig', [
            'product' => $product,
            'commentProduct' => $cPublished,
            'commentCount'=>$cCount,
            'tCategory'=>$tCategory,
        ]);
    }
}