<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserProfileFormType;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @IsGranted("ROLE_USER")
 */
class AccountController extends BaseController
{

    /**
     * @Route("/account", name="app_account")
     *
     */
    public function index(CategoryRepository $categoryRepository, Request $request, EntityManagerInterface $em)
    {
        $categories = $categoryRepository->findAll();

        $user = $this->getUser();

        $form = $this->createForm(UserProfileFormType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            /** @var User $user */
            $user = $form->getData();
            $em->persist($user);
            $em->flush();

            $this->addFlash('updated', 'Дані користувача оновлено!');
            return $this->redirectToRoute('app_account');
        }

        return $this->render('account/Profile/personal_data_layout.html.twig', [
            'categories' => $categories,
            'profileForm' => $form->createView(),
        ]);
    }
}
