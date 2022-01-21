<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\CategoryRepository;
use App\Repository\CommentsRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CommentController extends AbstractController
{
    /**
     * @Route("/product/{name}/{link}/p10{id}/comments", name="comments")
     *
     * @throws NonUniqueResultException
     * @throws \Doctrine\ORM\NoResultException
     */
    public function commentsListProductAction(ProductRepository $productRepository, CommentsRepository $commentsRepository,
                                              CategoryRepository $categoryRepository, $id, $name): Response
    {
        $category = $categoryRepository->findByTitle($name);
        $product = $productRepository->findProductById($id);
        $cComment = $commentsRepository->findByCount($id);
        $commentPublished = $commentsRepository->findByPublished($id);
        return $this->render('comments/comments.html.twig', [
            'product' => $product,
            'commentProduct' => $commentPublished,
            'commentCount'=>$cComment,
            'tCategory'=>$category,
        ]);
    }
}