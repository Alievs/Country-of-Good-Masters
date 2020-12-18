<?php


namespace App\Controller;

use App\Data\FilterData;
use App\Form\FilterForm\FilterFormType;
use App\Repository\AttributeTypeRepository;
use App\Repository\ElasticFilterRepository;
use App\Repository\ProductRepository;
use App\Traits\KnpPager;
use App\Traits\Sort;
use FOS\ElasticaBundle\Finder\PaginatedFinderInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class CatalogController extends AbstractController
{
    use KnpPager;
//    use Sort;

    /**
     * @Route("/", name="catalog")
     */
    public function catalog(ProductRepository $productRepository, Request $request,
                            AttributeTypeRepository $typeRepository, PaginatorInterface $paginator,
                            ElasticFilterRepository $smartFilter)
    {
//        фильтрация данных
        $data = new FilterData();
        $options = $typeRepository->findOptionsWithUniqueValue();

        $form = $this->createForm(FilterFormType::class, $data, array('myOptions' => $options));
        $form->handleRequest($request);

        [$min, $max] = $productRepository->findMinMax($data);

        $queryGet = $request->query->all();

        $sort = $this->sortFilter($queryGet);
        $query = $productRepository->findFilter($data, $sort['sort']);

        $pager = $this->pageRouter($query, $request, $paginator, $sort['limit']);
        $countFilter = $smartFilter->clearParameter($queryGet, $options, $data->min ?? $min, $data->max ?? $max);

        if ($request->get('page')) {

        } elseif ($request->get('ajax')) {
            return new JsonResponse([
                'content' => $this->renderView('catalog/filters/_products.html.twig', ['product_pager' => $pager]),
                'sorting' => $this->renderView( 'catalog/filters/_head_sort.html.twig', ['sort' => $sort]),
                'pagination' => $this->renderView( 'catalog/filters/_pagination.html.twig', ['product_pager' => $pager, 'countedFilter' => json_encode($countFilter)]),
                'min' => $min,
                'max' => $max
            ]);
        }

        return $this->render('catalog/catalog.html.twig', [
            'product_pager' => $pager,
            'formFilter' => $form->createView(),
            'countedFilter' => json_encode($countFilter),
            'min' => $min,
            'max' => $max,
            'sort' => $sort,
//            'asd' => $asd,
        ]);
    }

    /**
     * @Route("/catalog/{name}/c47{id}", name="category")
     * @ParamConverter("post", options={"name" = "name", "id" = "id"})
     */
    public function categories( ProductRepository $productRepository, Request $request, $id,
                                AttributeTypeRepository $typeRepository, PaginatorInterface $paginator,
                                ElasticFilterRepository $smartFilter
    ) {
//       FilterData клас с обьявленными полями фильтров по типу (public $material)
        $data = new FilterData();
//        здесь мы получаем все опции для категории по которым создадим фильтры
        $options = $typeRepository->findOptionsWithUniqueValueByCategory($id);
        $form = $this->createForm(FilterFormType::class, $data, array('myOptions' => $options));
        $form->handleRequest($request);
//        здесь мы получаем min & max для слайдера цены, category oriented
        [$min, $max] = $productRepository->findMinMax($data, $id);
//        получаем все GET параметры
        $queryGet = $request->query->all();
//        сортировка продуктов ,а также limit per page
        $sort = $this->sortFilter($queryGet);
//        передаём фильтры в репозиторий и фильтруем товары по указаным фильтрам
        $query = $productRepository->findFilter($data, $sort['sort'], $id);
//        вызов из Trait'а для вывода товаров по страницам
        $pager = $this->pageRouter($query, $request, $paginator, $sort['limit']);
//        smart filter вывод колва товаров по фильтрам
        $countFilter = $smartFilter->clearParameter($queryGet, $options, $data->min ?? $min, $data->max ?? $max, $id);

//        $asd = $options;

        if ($request->get('page')) {

        } elseif ($request->get('ajax')) {
            return new JsonResponse([
                'content' => $this->renderView('catalog/filters/_products.html.twig', ['product_pager' => $pager]),
                'sorting' => $this->renderView( 'catalog/filters/_head_sort.html.twig', ['sort' => $sort]),
                'pagination' => $this->renderView( 'catalog/filters/_pagination.html.twig', ['product_pager' => $pager, 'countedFilter' => json_encode($countFilter)]),
                'min' => $min,
                'max' => $max
            ]);
        }

        return $this->render('catalog/catalog.html.twig', [
            'product_pager' => $pager,
            'formFilter' => $form->createView(),
            'countedFilter' => json_encode($countFilter),
            'min' => $min,
            'max' => $max,
            'sort' => $sort,
//            'asd' => $asd,
        ]);
    }


    public function sortFilter($query)
    {
        $sort_options = [
            'cheap' => 'Від дешевих до дорогих',
            'expensive' => 'Від дорогих до дешевих',
            'novelty' => 'Новинки',
            'action' => 'Акційні',
            'rank' => 'За рейтингом',
        ];

        $limit_page = [
            '16' => '16',
            '32' => '32',
            '64' => '64',
            '128' => '128',
        ];

        if (isset($query['sort']) && !empty($query['sort']) ){
            $sort = $query['sort'];
        }
        else{
            $sort = 'novelty';
        }

        if (isset($query['limit']) && !empty($query['limit']) && is_numeric($query['limit']) ){
            $limit = (int)$query['limit'];
        }
        else{
            $limit = 16;
        }

        if (!in_array($limit, [16, 32, 64, 128], true)){
            $limit = 16;
        }

        return [
            'sort_options' => $sort_options,
            'sort' => $sort,
            'limit_page' => $limit_page,
            'limit' => $limit,
        ];

    }


}