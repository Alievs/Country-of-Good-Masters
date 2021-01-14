<?php

namespace App\Controller;


use App\Entity\Product;
use App\Form\CommentFormType;
use App\Form\OneClickOrderType;
use App\Repository\AttributeTypeRepository;
use App\Repository\ProductRepository;
use App\Traits\KnpPager;
use Doctrine\ORM\NonUniqueResultException;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    use KnpPager;

    /**
     * @Route("/product/{name}/{link}/p10{id}", name="product")
     */
    public function productView(ProductRepository $productRepository, AttributeTypeRepository $typeRepository,
                                $name, $link, $id, Request $request, PaginatorInterface $paginator
    ) {
        try {
            $product = $productRepository->findProductById($id);
        } catch(NonUniqueResultException $e){
            $errorMessage = $e->getMessage();
        }

        $options = $typeRepository->findOptionsById($id);

        /**
         * @var Product $product
         */
        if (!$product) {
            throw $this->createNotFoundException(sprintf("Не знайдено жодного товару за посиланням %s", $link));
        }
//        releated product slider
        $query = $productRepository->findAllProductsCategoryOrderedByIdExceptThisOne($name, $id);
        $pager = $this->pageRouter($query, $request, $paginator, 16);

        $commentForm = $this->createForm(CommentFormType::class);
        $commentForm->handleRequest($request);

        $fastOrderForm = $this->createForm(OneClickOrderType::class);

        return $this->render('products/product.html.twig', [
            'product' => $product,
            'product_slider' => $pager,
            'options' => $options,
            'commentForm' => $commentForm->createView(),
            'orderForm' => $fastOrderForm->createView(),
        ]);
    }

}