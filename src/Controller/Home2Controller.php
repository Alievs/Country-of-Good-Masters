<?php

namespace App\Controller;


use App\Entity\Filter\FilterData;
use App\Form\SearchForm\SearchFormType;
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
     * @Route("/", name="catalog")
     */
    public function catalog(ProductRepository $productRepository, Request $request)
    {
//        фильтрация данных
//        $data = new FilterData();
//        $form = $this->createForm(SearchFormType::class, $data);


        $adapter = $productRepository->ByNewestQuery();

        $pagerfanta = $this->pageRouter($adapter, $request);


        return $this->render('products/catalog.html.twig', [
            'product_pager' => $pagerfanta,
//            'formFilter' => $form->createView(),
        ]);
    }


    /**
     * @Route("/catalog/{name}/c47{id}", name="category")
     * @ParamConverter("post", options={"name" = "name", "id" = "id"})
     */
    public function categories( ProductRepository $productRepository, Request $request, $id)
    {
        $adapter = $productRepository->findAllCategoryOrderedById($id);


        $pagerfanta = $this->pageRouter($adapter, $request);

        return $this->render('products/catalog.html.twig', [
            'product_pager' => $pagerfanta,
        ]);
    }
}