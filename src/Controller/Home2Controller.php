<?php

namespace App\Controller;


use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use App\Traits\PagerfantaPager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class Home2Controller extends AbstractController
{
    use PagerfantaPager;


    /**
     * @Route("/", name="homepage")
     */
    public function catalog(ProductRepository $productRepository, CategoryRepository $categoryRepository, Request $request)
    {
        $categories = $categoryRepository->findAll();

        $adapter = $productRepository->pagerfantaQuery();

        $pagerfanta = $this->pageRouter($adapter, $request);


        return $this->render('products/catalog3.html.twig', [
            'categories' => $categories,
            'product_pager' => $pagerfanta,
        ]);
    }


    /**
     * @Route("/catalog/{name}", name="category")
     * @ParamConverter("post", options={"name" = "name"})
     */
    public function categories(Category $category,
                              ProductRepository $productRepository,
                              CategoryRepository $categoryRepository,
                              Request $request)
    {
        $categories = $categoryRepository->findAll();

        $adapter = $productRepository->findAllCategoryOrdered($category);

        $pagerfanta = $this->pageRouter($adapter, $request);


        return $this->render('products/catalog3.html.twig', [
            'categories' => $categories,
            'product_pager' => $pagerfanta,
        ]);
    }
}