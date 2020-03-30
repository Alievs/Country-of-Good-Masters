<?php

namespace App\Controller;


use App\Entity\UserInvitation;
use App\Form\RegisterForm;
use App\Http\Responder;
use App\Http\RespondRouteRedirect;
use App\Http\RespondTemplate;
use Doctrine\ORM\EntityManagerInterface;
use MsgPhp\User\Command\CreateUser;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/register", name="register")
 */
final class RegisterController
{
    public function __invoke(
        Request $request,
        Responder $responder,
        FormFactoryInterface $formFactory,
        MessageBusInterface $bus,
        EntityManagerInterface $em
    ): Response
    {
        //if already sign in , so redirect to homepage
//        if ($this->isGranted('ROLE_USER')) {
//            return new RedirectResponse($this->router->generate('homepage'));
//        }

        $data = [];
        if (\is_string($token = $request->query->get('token')) && null !== $invitation = $em->find(UserInvitation::class, $token)) {
            $data['email'] = $invitation->getEmail();
        }

        $form = $formFactory->createNamed('', RegisterForm::class, $data);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $data['invitation_token'] = $token;
            $bus->dispatch(new CreateUser($data));

            return $responder->respond((new RespondRouteRedirect('home'))->withFlashes([
                'success' => sprintf('Hi %s, you\'re successfully registered. We\'ve send you a confirmation link.', $data['email']),
            ]));
        }

        return $responder->respond(new RespondTemplate('user/register.html.twig', [
            'form' => $form->createView(),
        ]));
    }
}
