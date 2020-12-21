<?php

namespace App\Controller;


use App\Data\FilterData;
use App\Entity\Category;
use App\Entity\Product;
use App\Form\FilterForm\FilterFormType;
use App\Repository\ProductRepository;
use App\Traits\KnpPager;
use App\Traits\Sort;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    use KnpPager;
    use Sort;

    /**
     * @Route("/ajax_search", name="ajax_search", methods={"GET"})
     */
    public function searchAction(Request $request, ProductRepository $productRepository)
    {
        $requestString = $request->get('q');

        $srproducts = $productRepository->findByNameLimit($requestString);

        if(!$srproducts) {
            $result['srproduct']['error'] = "Товарів не знайдено";
        } else {
            $result['srproduct'] = $this->getRealProducts($srproducts);
        }

        return new Response(json_encode($result));
    }

    /**
     * @Route("/search", name="search")
     */
    public function searchData(Request $request, ProductRepository $productRepository,
                               PaginatorInterface $paginator
    ) {
        $requestString = $request->get('search');

        $data = new FilterData();

        $form = $this->createForm(FilterFormType::class, $data);
        $form->handleRequest($request);

        [$min, $max] = $productRepository->findMinMaxSearch($data, $requestString);

        $sort = $this->sortFilter($request->query->all());
        $query = $productRepository->findBySearch($data, $requestString, $sort['sort']);

        $pager = $this->pageRouter($query, $request, $paginator, $sort['limit']);

        if ($request->get('page')) {

        } elseif ($request->get('ajax')) {
            return new JsonResponse([
                'content' => $this->renderView('catalog/filters/_products.html.twig', ['product_pager' => $pager]),
                'sorting' => $this->renderView( 'catalog/filters/_head_sort.html.twig', ['sort' => $sort]),
                'pagination' => $this->renderView( 'catalog/filters/_pagination.html.twig', ['product_pager' => $pager]),
                'min' => $min,
                'max' => $max
            ]);
        }

        return $this->render('catalog/catalog.html.twig', [
            'product_pager' => $pager,
            'formFilter' => $form->createView(),
            'min' => $min,
            'max' => $max,
            'sort' => $sort,
            'asd' => $sort
        ]);
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
            $id = $product->getId();
            $realProducts[$product_category . "/" . $link . "/p10" . $id] = $product->getName();
        }

        return $realProducts;
    }

}