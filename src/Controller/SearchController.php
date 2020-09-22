<?php

namespace App\Controller;


use App\Entity\Category;
use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
//    TODO сделать обработчик формы
    /**
     * @Route("/search", name="ajax_search", methods={"GET"})
     */
    public function searchAction(Request $request, ProductRepository $productRepository)
    {
        $em = $this->getDoctrine()->getManager();

        $requestString = $request->get('q');

        $srproducts = $productRepository->findByName($requestString);

        if(!$srproducts) {
            $result['srproduct']['error'] = "Товарів не знайдено";
        } else {
            $result['srproduct'] = $this->getRealProducts($srproducts);
        }

        return new Response(json_encode($result));
    }

    public function getRealProducts($srproducts){

        foreach ($srproducts as $product){
            /** @var Product $product */
            $ctg = $product->getCategories();
            foreach ($ctg as $category) {
                /** @var Category $category */
                $product_category = $category->getTitle();
            }
            $link = $product->getLink();
            $realProducts[$product_category . "/" . $link] = $product->getName();
        }

        return $realProducts;
    }

}