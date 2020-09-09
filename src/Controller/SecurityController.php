<?php

namespace App\Controller;


use App\Entity\User;
use App\Form\UserRegistrationFormType;
use App\Repository\CategoryRepository;
use App\Security\LoginFormAuthenticator;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
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
    public function login(AuthenticationUtils $authenticationUtils, CategoryRepository $categoryRepository): Response
    {

        $categories = $categoryRepository->findAll();

        if ($this->isGranted('ROLE_USER')) {
            return new RedirectResponse($this->router->generate('homepage'));
        }
        //REMEMBER!!!!!! get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();


        return $this->render('security/login.html.twig', [
            'categories' => $categories,
            'last_username' => $lastUsername,
            'error' => $error
        ]);
    }

    /**
     * @Route("/register", name="app_register")
     */
    public function register(MailerInterface $mailer,Request $request, UserPasswordEncoderInterface $passwordEncoder,
                             GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $formAuthenticator,
                             CategoryRepository $categoryRepository)
    {
        $categories = $categoryRepository->findAll();

        if ($this->isGranted('ROLE_USER')) {
            return new RedirectResponse($this->router->generate('homepage'));
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

            $email = (new TemplatedEmail())
                ->from('craftbud.com.ua@gmail.com')
                ->to($user->getEmail())
                ->subject('Добро Пожаловать на сайт craftbud.com.ua')
                ->htmlTemplate('email/welcome.html.twig');

            $mailer->send($email);

            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $formAuthenticator,
                'main'
            );
        }

        return $this->render('security/register.html.twig', [
            'categories' => $categories,
            'registrationForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("/privacy_policy", name="app_privacy_policy")
     */
    public function privacyPolicy()
    {
        return $this->render('security/privacy_policy.html.twig', [
        ]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }
}
