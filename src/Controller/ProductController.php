<?php

namespace App\Controller;


use App\Entity\Product;
use App\Repository\AttributeTypeRepository;
use App\Repository\ProductRepository;
use App\Traits\PagerfantaPager;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    use PagerfantaPager;

    /**
     * @Route("/product/{name}/{link}", name="product")
     */
    public function productView(ProductRepository $productRepository, AttributeTypeRepository $typeRepository,
                                $name, $link, Request $request)
    {
        try {
            $product = $productRepository->findProductByLink($link);
        }
        catch(NonUniqueResultException $e){
            $errorMessage = $e->getMessage();
        }

        $options = $typeRepository->findByLink($link);

        /**
         * @var Product $product
         */
        if (!$product) {
            throw $this->createNotFoundException(sprintf("Не знайдено жодного товару за посиланням %s", $link));
        }

//        releated product slider
        $adapter = $productRepository->findAllProductsCategoryOrderedByNameExceptThisOne($name, $link);
        $pagerfanta = $this->pageRouter($adapter, $request);

        return $this->render('products/product.html.twig', [
            'product' => $product,
            'product_slider' => $pagerfanta,
            'options' => $options,
        ]);
    }

}