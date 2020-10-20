<?php


namespace App\Controller;

use App\Data\FilterData;
use App\Form\FilterForm\FilterFormType;
use App\Repository\AttributeTypeRepository;
use App\Repository\ProductRepository;
use App\Traits\KnpPager;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class CatalogController extends AbstractController
{
    use KnpPager;


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

        $query = $productRepository->findFilter($data);

        $pager = $this->pageRouter($query, $request, $paginator);

        return $this->render('catalog/catalog.html.twig', [
            'product_pager' => $pager,
            'formFilter' => $form->createView(),
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

//        передаём фильтры в репозиторий и фильтруем товары по указаным фильтрам
        $query = $productRepository->findFilterCategoryOrdered($id, $data);
//        вызов из Trait'а для вывода товаров по страницам
        $pager = $this->pageRouter($query, $request, $paginator);

        return $this->render('catalog/catalog.html.twig', [
            'product_pager' => $pager,
            'formFilter' => $form->createView(),
        ]);
    }
}