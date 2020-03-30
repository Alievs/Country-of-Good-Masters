<?php

declare(strict_types=1);

namespace App\Controller;

use App\Form\LoginForm;
use App\Http\Responder;
use App\Http\RespondTemplate;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


/**
 * @Route("/login", name="login")
 */
final class LoginController
{
    public function __invoke(
        Request $request,
        Responder $responder,
        FormFactoryInterface $formFactory,
        AuthenticationUtils $authenticationUtils
    ): Response
    {
//if already sign in , so redirect to homepage
//        if ($this->isGranted('ROLE_USER')) {
//            return new RedirectResponse($this->router->generate('homepage'));
//        }

        // regular form login
        $form = $formFactory->createNamed('', LoginForm::class, [
            'email' => $authenticationUtils->getLastUsername(),
        ]);


        return $responder->respond(new RespondTemplate('user/login.html.twig', [
            'last_username' => $lastUsername = $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError(),
            'form' => $form->createView(),
        ]));
    }
}