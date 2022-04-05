<?php

namespace App\Controller;

use App\Data\ViewedList;
use App\Entity\Product;
use App\Form\CommentFormType;
use App\Form\OneClickOrderType;
use App\Repository\AttributeTypeRepository;
use App\Repository\CategoryRepository;
use App\Repository\CommentsRepository;
use App\Repository\ProductRepository;
use App\Service\Admin\Export;
use App\Service\Admin\Import;
use App\Traits\KnpPager;
use Knp\Component\Pager\PaginatorInterface;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class ProductController extends AbstractController
{
    use KnpPager;

    /**
     * @Route("/product/{name}/{link}/p10{id}/", name="product",
     *      requirements={
     *          "id": "\d+"
     *      })
     */
    public function productView
    (
        CommentController $commentController,
        ProductRepository $productRepository,
        AttributeTypeRepository $typeRepository,
        Request $request,
        PaginatorInterface $paginator,
        CommentsRepository $commentsRepository,
        AuthenticationUtils $authenticationUtils,
        CategoryRepository $categoryRepository,
        $name,
        $id
    ): Response
    {
        $user = $this->getUser();
        $tCategory = $categoryRepository->findByTitle($name);
        $product = $productRepository->findProductById($id);
        $options = $typeRepository->findOptionsById($id);
        $cPublished = $commentsRepository->findByPublished($id);
        $error = $authenticationUtils->getLastAuthenticationError();
        /**
         * @var Product $product
         */
        if (!$product) {
            return $this->redirect('/404/');
        }
//        releated product slider
        $query = $productRepository->findAllProductsCategoryOrderedByIdExceptThisOne($name, $id);
        $pager = $this->pageRouter($query, $request, $paginator, 16)->getItems();
        $oldViewed = $request->getSession()->get('recently-viewed');
        $viewed = new ViewedList($oldViewed);
        $queryViews = $viewed->getItems();
        $commentForm = $this->createForm(CommentFormType::class);
        $commentForm->handleRequest($request);
        if ($commentForm->isSubmitted() && $commentForm->isValid())
        {
            $commentController->createComment($request);
            return $this->redirect($_SERVER['REQUEST_URI']);
        }

        $fastOrderForm = $this->createForm(OneClickOrderType::class);

        return $this->render('products/product.html.twig', [
            'user' => $user,
            'commentProduct' => $cPublished,
            'product' => $product,
            'product_slider' => $pager,
            'options' => $options,
            'commentForm' => $commentForm->createView(),
            'orderForm' => $fastOrderForm->createView(),
            'error' => $error,
            'tCategory'=>$tCategory,
            'viewProducts' => $queryViews
        ]);
    }

    /**
     * @Route("/admin/product/export",  name="export_product")
     * @throws Exception
     * @throws Exception
     */
    public function exportProduct(Export $exportService): BinaryFileResponse
    {
        return $exportService->exportProduct();
    }

    /**
     * @Route("/admin/product/import",  name="import_product")
     * @throws Exception
     */
    public function importProducts(Import $importService): RedirectResponse
    {
        return $importService->importProduct();
    }

}