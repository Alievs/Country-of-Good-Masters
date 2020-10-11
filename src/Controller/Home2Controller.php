<?php

namespace App\Controller;


use App\Data\FilterData;
use App\Form\FilterForm\FilterFormType;
use App\Repository\AttributeTypeRepository;
use App\Repository\ProductRepository;
use App\Traits\PagerfantaPager;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
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
    public function catalog(ProductRepository $productRepository, Request $request,
                            AttributeTypeRepository $typeRepository)
    {
//        фильтрация данных
        $data = new FilterData();
        $options = $typeRepository->findOptionsWithUniqueValue();

        $form = $this->createForm(FilterFormType::class, $data, array('myOptions' => $options));
        $form->handleRequest($request);

        $adapter = new QueryAdapter($productRepository->findFilter($data));

        $pagerfanta = $this->pageRouter($adapter, $request);

        return $this->render('products/catalog.html.twig', [
            'product_pager' => $pagerfanta,
            'formFilter' => $form->createView(),
            'asd' => $data,
        ]);
    }


    /**
     * @Route("/catalog/{name}/c47{id}", name="category")
     * @ParamConverter("post", options={"name" = "name", "id" = "id"})
     */
    public function categories( ProductRepository $productRepository, Request $request, $id, AttributeTypeRepository $typeRepository)
    {
//       FilterData клас с обьявленными полями фильтров по типу (public $material)
        $data = new FilterData();
//        здесь мы получаем все опции для категории по которым создадим фильтры
        $options = $typeRepository->findOptionsWithUniqueValueByCategory($id);

//        передаём опции в форму а потом в EventSubscriber для динамичного создания полей в форме
        $form = $this->createForm(FilterFormType::class, $data, array('myOptions' => $options));
        $form->handleRequest($request);

//        передаём фильтры в репозиторий и фильтруем товары по указаным фильтрам
        $adapter = new QueryAdapter($productRepository->findFilterCategoryOrdered($id, $data));
//        вызов из Trait'а для вывода товаров по страницам
        $pagerfanta = $this->pageRouter($adapter, $request);

        return $this->render('products/catalog.html.twig', [
            'product_pager' => $pagerfanta,
            'formFilter' => $form->createView(),
            'asd' => $data
        ]);
    }
}