<?php

namespace App\Controller;


use App\Form\ForgotPasswordFormType;
use App\Form\ResetPasswordFormType;
use App\Repository\UserRepository;
use App\Service\Mailer;
use App\Entity\User;
use App\Form\UserRegistrationFormType;
use App\Security\LoginFormAuthenticator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class SecurityController extends AbstractController
{
    private $router;

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->isGranted('ROLE_USER')) {
            return new RedirectResponse($this->router->generate('catalog'));
        }
        //REMEMBER!!!!!! get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();


        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error
        ]);
    }

    /**
     * @Route("/register", name="app_register")
     */
    public function register(Mailer $mailer, Request $request, UserPasswordEncoderInterface $passwordEncoder,
                             GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $formAuthenticator)
    {
        if ($this->isGranted('ROLE_USER')) {
            return new RedirectResponse($this->router->generate('catalog'));
        }

        $form = $this->createForm(UserRegistrationFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            /** @var User $user */
            $user = $form->getData();
            $user->setPassword($passwordEncoder->encodePassword(
                $user,
                $form['plainPassword']->getData()
            ));
            // double check
            if (true === $form['agreeTerms']->getData()) {
                $user->agreeTerms();
            }

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

//            email sender
            $mailer->sendWelcomeMessage($user);

            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $formAuthenticator,
                'main'
            );
        }

        return $this->render('security/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    /**
     * @Route ("/forgotPassword", name="forgotPassword")
     */
    public function forgotPassword(Request $request, UserRepository $repositoryUser, Mailer $mailer)
    {
        if ($this->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('catalog');
        }

        $fPasswordForm = $this->createForm(ForgotPasswordFormType::class);
        $fPasswordForm->handleRequest($request);
        if ($fPasswordForm->isSubmitted() && $fPasswordForm->isValid()) {
            $email = $fPasswordForm->get('email')->getData();
            if (!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                $this->addFlash('warning', 'Ваш email: ' . $email . ' вказано невірно.');
                return $this->redirect($_SERVER['REQUEST_URI']);
            }
            $user = $repositoryUser->findOneBy(['email' => $email]);
            if($user !== null)
            {
                $code = $this->randString(33);
                $iUser = $user->getId();
                $mailer->sendForgotPassword($user, $code, $iUser);
                $em = $this->getDoctrine()->getManager();
                $em->persist($user);
                $em->flush();
                $this->addFlash('success', 'Данні відправлено за електронною поштою : ' . $email);
                return $this->redirectToRoute('app_login');
            }
            $this->addFlash('warning', 'Користувач з електронною поштою : ' . $email . ' не зареєстровано.');
            return $this->redirect($_SERVER['REQUEST_URI']);
        }

        return $this->render('security/forgotPassword.html.twig', [
            'forgotPasswordForm' => $fPasswordForm->createView(),
        ]);
    }

    /**
     * @Route("/personal/restore/change_password=yes&USER_CHECKWORD={code}&USER_LOGIN=u23{userId}37", name="app_restore_password",
     *      requirements={
     *          "userId": "\d+"
     *      })
     */
    public function resetPassword(
        Request $request,
        UserRepository $repositoryUser,
        UserPasswordEncoderInterface $passwordEncoder,
        $userId)
    {
        if ($this->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('catalog');
        }
        $rPasswordForm = $this->createForm(ResetPasswordFormType::class);
        $rPasswordForm->handleRequest($request);
        if ($rPasswordForm->isSubmitted() && $rPasswordForm->isValid()) {
            $user = $repositoryUser->findOneBy(['id' => $userId]);
                $user->setPassword($passwordEncoder->encodePassword(
                    $user,
                    $rPasswordForm['plainPassword']->getData()
                ));
                $em = $this->getDoctrine()->getManager();
                $em->persist($user);
                $em->flush();
            $this->addFlash('success', 'Пароль успішно змінено!');
                return $this->redirectToRoute('app_login');
            }
        return $this->render('security/resetPassword.html.twig', [
            'resetPasswordForm' => $rPasswordForm->createView(),
        ]);
    }

    /**
     * @Route("/privacy_policy", name="app_privacy_policy")
     */
    public function privacyPolicy()
    {
        return $this->render('security/privacy_policy.html.twig');
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }

    public function randString($n): string
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';

        for ($i = 0; $i < $n; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $randomString .= $characters[$index];
        }

        return $randomString;
    }
}
