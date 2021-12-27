<?php

namespace App\Controller;


use App\Entity\Comments;
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
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    use KnpPager;

    /**
     * @Route("/product/{name}/{link}/p10{id}/comments", name="product")
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
//        if ($commentForm->isSubmitted() && $commentForm->isValid())
//        {
//            $comment = new Comments();
//            $comment->setRating($commentForm->get('rating')->getData());
//            $comment->setDignity($commentForm->get('dignity')->getData());
//            $comment->setShortcomings($commentForm->get('shortcomings')->getData());
//            $comment->setBody($commentForm->get('body')->getData());
//            $comment->setNickname($commentForm->get('nickname')->getData());
//            $comment->setUserEmail($commentForm->get('user_email')->getData());
//            $comment->setPublishedDate(new \DateTime);
//
//            $em = $this->getDoctrine()->getManager();
//            $em->persist($comment);
//            $em->flush();
//            return new Response(null, 200);
//        }

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