<?php


namespace App\Controller;

use App\Data\FilterData;
use App\Form\FilterForm\FilterFormType;
use App\Repository\AttributeTypeRepository;
use App\Repository\ProductRepository;
use App\Traits\KnpPager;
use App\Traits\Sort;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class CatalogController extends AbstractController
{
    use KnpPager;
    use Sort;

    /**
     * @Route("/", name="catalog")
     */
    public function catalog(ProductRepository $productRepository, Request $request,
                            AttributeTypeRepository $typeRepository, PaginatorInterface $paginator)
    {
//        фильтрация данных
        $data = new FilterData();
        $options = $typeRepository->findOptionsWithUniqueValue();

        $form = $this->createForm(FilterFormType::class, $data, array('myOptions' => $options));
        $form->handleRequest($request);
        [$min, $max] = $productRepository->findMinMax($data);

        $sort = $this->sortFilter($request->query);
        $query = $productRepository->findFilter($data, $sort['sort']);

        $pager = $this->pageRouterLimit($query, $request, $paginator, $sort['limit']);

//        $asd = $request;
        $asd = $sort;

        return $this->render('catalog/catalog.html.twig', [
            'product_pager' => $pager,
            'formFilter' => $form->createView(),
            'min' => $min,
            'max' => $max,
            'sort' => $sort,
            'asd' => $asd,
        ]);
    }

    /**
     * @Route("/catalog/{name}/c47{id}", name="category")
     * @ParamConverter("post", options={"name" = "name", "id" = "id"})
     */
    public function categories( ProductRepository $productRepository, Request $request, $id,
                                AttributeTypeRepository $typeRepository, PaginatorInterface $paginator)
    {
//       FilterData клас с обьявленными полями фильтров по типу (public $material)
        $data = new FilterData();
//        здесь мы получаем все опции для категории по которым создадим фильтры
        $options = $typeRepository->findOptionsWithUniqueValueByCategory($id);

//        передаём опции в форму а потом в EventSubscriber для динамичного создания полей в форме
        $form = $this->createForm(FilterFormType::class, $data, array('myOptions' => $options));
        $form->handleRequest($request);
//        здесь мы получаем min & max для слайдера цены, category oriented
        [$min, $max] = $productRepository->findMinMax($data, $id);
//        сортировка продуктов ,а также limit per page
        $sort = $this->sortFilter($request->query);
//        передаём фильтры в репозиторий и фильтруем товары по указаным фильтрам
        $query = $productRepository->findFilter($data, $sort['sort'], $id);
//        вызов из Trait'а для вывода товаров по страницам
        $pager = $this->pageRouterLimit($query, $request, $paginator, $sort['limit']);

        return $this->render('catalog/catalog.html.twig', [
            'product_pager' => $pager,
            'formFilter' => $form->createView(),
            'min' => $min,
            'max' => $max,
        ]);
    }
}