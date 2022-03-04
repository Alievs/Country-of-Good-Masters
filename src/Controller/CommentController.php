<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Form\CommentFormType;
use App\Repository\CategoryRepository;
use App\Repository\CommentsRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CommentController extends AbstractController
{
    public function createComment(Request $request)
    {
        $commentForm = $this->createForm(CommentFormType::class);
        $commentForm->handleRequest($request);
        $comment = new Comments();
        $comment->setBody($commentForm->get('body')->getData());
        $comment->setPublishedDate(new \DateTime());
        $comment->setDignity($commentForm->get('dignity')->getData());
        $comment->setNickname($commentForm->get('nickname')->getData());
        $comment->setRating($commentForm->get('rating')->getData());
        $comment->setShortcomings($commentForm->get('shortcomings')->getData());
        $email = $commentForm->get('user_email')->getData();
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $comment->setUserEmail($commentForm->get('user_email')->getData());
            $comment->setProduct($commentForm->get('product')->getData());

            $em = $this->getDoctrine()->getManager();
            $em->persist($comment);
            $em->flush();
            $this->addFlash('success', ' Дякую вам за ваш відгук!');
            header('location: ');
            exit();
        }
        $this->addFlash('warning', 'Ваш email: ' . $email . ' вказано невірно.');
        header('location: ');
        exit();
    }

    /**
     * @Route("/product/{name}/{link}/p10{id}/comments", name="comments")
     *
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function commentsListProductAction
    (
        ProductRepository $productRepository,
        CommentsRepository $commentsRepository,
        CategoryRepository $categoryRepository,
        Request $request,
        $id,
        $name)
    : Response
    {
        $user = $this->getUser();
        $tCategory = $categoryRepository->findByTitle($name);
        $product = $productRepository->findProductById($id);
        $cCount = $commentsRepository->findByCount($id);
        $cPublished = $commentsRepository->findByPublished($id);
        $commentForm = $this->createForm(CommentFormType::class);
        $commentForm->handleRequest($request);
        if ($commentForm->isSubmitted() && $commentForm->isValid())
        {
            $this->createComment($request);
        }
        return $this->render('comments/comments.html.twig', [
            'user' => $user,
            'commentForm' => $commentForm->createView(),
            'product' => $product,
            'commentProduct' => $cPublished,
            'commentCount'=>$cCount,
            'tCategory'=>$tCategory,
        ]);
    }
}