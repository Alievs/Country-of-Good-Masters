<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\Product;
use App\Form\CommentFormType;
use App\Form\OneClickOrderType;
use App\Repository\AttributeTypeRepository;
use App\Repository\CommentsRepository;
use App\Repository\ProductRepository;
use App\Traits\KnpPager;
use Doctrine\ORM\NonUniqueResultException;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class ProductController extends AbstractController
{
    use KnpPager;

    /**
     * @Route("/product/{name}/{link}/p10{id}/", name="product")
     */
    public function productView(ProductRepository $productRepository, AttributeTypeRepository $typeRepository,
                                $name, $link, $id, Request $request, PaginatorInterface $paginator, CommentsRepository $commentsRepository,
                                AuthenticationUtils $authenticationUtils
    ): Response
    {
        try {
            $product = $productRepository->findProductById($id);
        } catch(NonUniqueResultException $e){
            $errorMessage = $e->getMessage();
        }
        $options = $typeRepository->findOptionsById($id);
        $ratingProduct = $commentsRepository->findByRatings($id);
        $commentPublished = $commentsRepository->findByPublished($id);
        $error = $authenticationUtils->getLastAuthenticationError();
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
        if ($commentForm->isSubmitted() && $commentForm->isValid())
        {
                $comment = new Comments();
                $comment->setBody($commentForm->get('body')->getData());
                $comment->setPublishedDate(new \DateTime());
                $comment->setDignity($commentForm->get('dignity')->getData());
                $comment->setNickname($commentForm->get('nickname')->getData());
                $comment->setRating($commentForm->get('rating')->getData());
                $comment->setShortcomings($commentForm->get('shortcomings')->getData());
                $comment->setUserEmail($commentForm->get('user_email')->getData());
                $comment->setProduct($commentForm->get('product')->getData());

                $em = $this->getDoctrine()->getManager();
                $em->persist($comment);
                $em->flush();
            $this->addFlash('success', ' Дякую вам за ваш відгук!');
        }

        $fastOrderForm = $this->createForm(OneClickOrderType::class);

        return $this->render('products/product.html.twig', [
            'ratingProduct' => $ratingProduct,
            'commentProduct' => $commentPublished,
            'product' => $product,
            'product_slider' => $pager,
            'options' => $options,
            'commentForm' => $commentForm->createView(),
            'orderForm' => $fastOrderForm->createView(),
            'error' => $error
        ]);
    }

}