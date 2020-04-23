<?php

namespace App\Controller;


use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    /**
     * @Route("/catalog/{name}/{link}", name="product")
     */
    public function product(ProductRepository $repository, $link, Request $request)
    {
        $product = $repository->findOneBy(['link' => $link]);
        /**
         * @var Product $product
         */
        if (!$product) {
            throw $this->createNotFoundException(sprintf("No product for link %s", $link));
        }

        return $this->render('products/product.html.twig', [
            'product' => $product,
        ]);
    }

}