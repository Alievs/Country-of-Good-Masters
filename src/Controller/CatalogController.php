<?php


namespace App\Controller;

use App\Data\FilterData;
use App\Data\FiltersSequence;
use App\Form\FilterForm\FilterFormType;
use App\Repository\AttributeTypeRepository;
use App\Repository\CategoryRepository;
use App\Repository\ElasticFilterRepository;
use App\Repository\ProductRepository;
use App\Traits\KnpPager;
use App\Traits\Sort;
use FOS\ElasticaBundle\Finder\PaginatedFinderInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class CatalogController extends AbstractController
{
    use KnpPager;
    use Sort;

    private $finder;

    /**
     * @Route("/", name="catalog")
     *
     * @param ProductRepository $productRepository
     * @param Request $request
     * @param AttributeTypeRepository $typeRepository
     * @param PaginatorInterface $paginator
     * @param ElasticFilterRepository $smartFilter
     *
     * @return JsonResponse|Response
     */
    public function catalogListAction(
        ProductRepository $productRepository,
        Request $request,
        AttributeTypeRepository $typeRepository,
        PaginatorInterface $paginator,
        ElasticFilterRepository $smartFilter
    ) {
//        фильтрация данных
        $data = new FilterData();
        $options = $typeRepository->findOptionsWithUniqueValue();

        $form = $this->createForm(FilterFormType::class, $data, array('myOptions' => $options));
        $form->handleRequest($request);

        [$min, $max] = $productRepository->findMinMax($data);

        $getParams = $request->query->all();

        $sort = $this->sortFilter($getParams);
        $query = $productRepository->findFilter($data, $sort['sort']);

        $pager = $this->pageRouter($query, $request, $paginator, $sort['limit']);
        $countFilter = $smartFilter->clearParameter(
            $getParams,
            $options,
            $data->min ?? $min,
            $data->max ?? $max
        );

        if ($request->get('page')) {

        } elseif ($request->get('ajax')) {
            return new JsonResponse([
                'content' => $this->renderView('catalog/filters/_products.html.twig', ['product_pager' => $pager]),
                'sorting' => $this->renderView('catalog/filters/_head_sort.html.twig', ['sort' => $sort]),
                'pagination' => $this->renderView('catalog/filters/_pagination.html.twig',
                    ['product_pager' => $pager, 'countedFilter' => json_encode($countFilter)]),
                'min' => $min,
                'max' => $max,
            ]);
        }

        return $this->render('catalog/catalog.html.twig', [
            'product_pager' => $pager,
            'formFilter' => $form->createView(),
            'countedFilter' => json_encode($countFilter),
            'min' => $min,
            'max' => $max,
            'sort' => $sort,
        ]);
    }

    /**
     * @Route("/catalog/{name}/c47{id}", name="category")
     *
     * @ParamConverter("post", options={"name" = "name", "id" = "id"})
     *
     * @param ProductRepository $productRepository
     * @param Request $request
     * @param $id
     * @param $name
     * @param AttributeTypeRepository $typeRepository
     * @param PaginatorInterface $paginator
     * @param ElasticFilterRepository $smartFilter
     * @param CategoryRepository $categoryRepository
     *
     * @return JsonResponse|Response
     */
    public function categoriesListAction(ProductRepository $productRepository, Request $request, $id, $name,
                               AttributeTypeRepository $typeRepository, PaginatorInterface $paginator,
                               ElasticFilterRepository $smartFilter, CategoryRepository $categoryRepository
    )
    {

        $check_category = $categoryRepository->findChildCategoryLevel($id);
        if (empty($check_category)) {


            /*FilterData клас с обьявленными полями фильтров по типу (public $material)*/
            $data = new FilterData();
            /*здесь мы получаем все опции для категории по которым создадим фильтры*/
            $options = $typeRepository->findOptionsWithUniqueValueByCategory($id);
            $form = $this->createForm(FilterFormType::class, $data, array('myOptions' => $options));
            $form->handleRequest($request);
            /*здесь мы получаем min & max для слайдера цены, category oriented*/
            [$min, $max] = $productRepository->findMinMax($data, $id);
            /*получаем все GET параметры*/
            $queryGet = $request->query->all();
            /*сортировка продуктов ,а также limit per page*/
            $sort = $this->sortFilter($queryGet);
            /*передаём фильтры в репозиторий и фильтруем товары по указаным фильтрам*/
            $query = $productRepository->findFilter($data, $sort['sort'], $id);
            /*вызов из Trait'а для вывода товаров по страницам*/
            $pager = $this->pageRouter($query, $request, $paginator, $sort['limit']);

            if ($request->get('page')) {

            } elseif ($request->get('ajax')) {
                return new JsonResponse([
                    'content' => $this->renderView('catalog/filters/_products.html.twig', ['product_pager' => $pager]),
                    'sorting' => $this->renderView('catalog/filters/_head_sort.html.twig', ['sort' => $sort]),
                    'pagination' => $this->renderView('catalog/filters/_pagination.html.twig', ['product_pager' => $pager]),
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
            ]);
        }

        $parent = $categoryRepository->findParentCategoryLevel($id);

        return $this->render('catalog/categories.html.twig', [
            'categories' => $check_category,
            'main_category' => $name,
            'parent' => $parent,
        ]);
    }

    /**
     * @param $filteredGetParams
     * @param Request $request
     * @param $new_filter
     * @return FiltersSequence
     */
    public function filtersSequenceListAction($filteredGetParams, Request $request, $new_filter): FiltersSequence
    {
        $old_sequence =  $request->getSession()->has('sequence') ? $request->getSession()->get('sequence') : null;
        $sequence = new FiltersSequence($old_sequence);
        $sequence->setSequence($filteredGetParams, $new_filter);
        $request->getSession()->set('sequence', $sequence);

        return $sequence;
    }
}