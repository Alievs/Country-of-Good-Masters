<?php

namespace App\Controller;


use App\Entity\Product;
use App\Repository\ProductRepository;
use App\Traits\PagerfantaPager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    use PagerfantaPager;

    /**
     * @Route("/catlog/asdf/{name}/{link}", name="product")
     */
    public function product(ProductRepository $productRepository, $link, Request $request)
    {
        $product = $productRepository->findOneBy(['link' => $link]);
        /**
         * @var Product $product
         */
        if (!$product) {
            throw $this->createNotFoundException(sprintf("Не знайдено жодного товару за посиланням %s", $link));
        }

//        releated product slider
        $adapter = $productRepository->ByNewestQuery();
        $pagerfanta = $this->pageRouter($adapter, $request);

        return $this->render('products/product3.html.twig', [
            'product' => $product,
            'product_slider' => $pagerfanta,
        ]);
    }

}