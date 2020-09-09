<?php

namespace App\Controller;


use App\Entity\Product;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use App\Traits\PagerfantaPager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    use PagerfantaPager;

    /**
     * @Route("/catalog/{name}/{link}", name="product")
     */
    public function product(ProductRepository $productRepository, $link, CategoryRepository $categoryRepository, Request $request)
    {
        $categories = $categoryRepository->findAll();
        $product = $productRepository->findOneBy(['link' => $link]);
        /**
         * @var Product $product
         */
        if (!$product) {
            throw $this->createNotFoundException(sprintf("No product for link %s", $link));
        }

        $adapter = $productRepository->pagerfantaQuery();
        $pagerfanta = $this->pageRouter($adapter, $request);

        return $this->render('products/product3.html.twig', [
            'product' => $product,
            'product_slider' => $pagerfanta,
            'categories' => $categories,
        ]);
    }

}