<?php

namespace App\Controller;

use App\Entity\Product;
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
     */
    public function commentsListProductAction(ProductRepository $productRepository, Product $commentsProduct, $id): Response
    {
        $product = $productRepository->findProductById($id);
        dump($id);
        return $this->render('comments/comments.html.twig', [
            'product' => $product,
            'commentProduct' => $commentsProduct,
        ]);
    }
}