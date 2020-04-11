<?php

namespace App\Controller;


use App\Entity\Cart;
use App\Entity\Order;
use App\Form\PaymentFormType;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Charge;
use Stripe\Stripe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PaymentController extends AbstractController
{
    /**
     * @Route("/checkout", name="checkout")
     */
    public function getCheckout(Request $request, EntityManagerInterface $em){
        if(!$request->getSession()->has('cart')){
            return $this->redirectToRoute('user_cart');
        }
        $form = $this->createForm(PaymentFormType::class);

        $oldCart = $request->getSession()->get('cart');
        $cart = new Cart($oldCart);
        $total = $cart->getTotalPrice();


        if ($request->isMethod('POST')) {
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                //stripe stuff
                Stripe::setApiKey('sk_test_1Hk2teDeXUZ2Kk3auUfOspXt00vguv8XDT');
                try {
                    $charge = Charge::create([
                        'amount' => $cart->getTotalPrice() * 100,
                        'currency' => 'usd',
                        'source' => $form->get('token')->getData(), // obtained with payment.js
                        'description' => 'Test Charge'
                    ]);

                    //create order
                    $order = new Order();
                    $order->setCart( serialize($cart) );
                    $order->setEmail($form->get('email')->getData());
                    $order->setName($form->get('name')->getData());
                    $order->setPaymentId($charge->id);

                    $em->persist($order);
                    $em->flush();

                } catch (\Exception $e){
                    return $this->redirectToRoute('checkout', [
                        'error' => $e->getMessage()
                    ]);
                }

                $request->getSession()->remove('cart');
                $this->addFlash('success', 'Successfully purchased products!');

                return $this->redirectToRoute('catalog_all');
            }
        }


        return $this->render('cart/payment.html.twig', [
            'total' => $total,
            'form' => $form->createView(),
            'stripe_public_key' => 'pk_test_X8Y56MItIliyYpZBq249Q59a00uV47Hinq',
        ]);
    }
//
//    /**
//     * @Route("/checkout", name="postCheckout", methods={"POST"})
//     */
//    public function postCheckout(Request $request){
//        if(!$request->getSession()->has('cart')){
//            return $this->redirectToRoute('user_cart');
//        }
//
//        $oldCart = $request->getSession()->get('cart');
//        $cart = new Cart($oldCart);
//
//        //stripe stuff
//        Stripe::setApiKey('sk_test_1Hk2teDeXUZ2Kk3auUfOspXt00vguv8XDT');
//        try {
//            Charge::create([
//                'amount' => $cart->getTotalPrice() * 100,
//                'currency' => 'usd',
//                'source' => $request->request->get('stripeToken'), // obtained with payment.js
//                'description' => 'Test Charge'
//            ]);
//        } catch (\Exception $e){
//            return $this->redirectToRoute('checkout', [
//                'error' => $e->getMessage()
//            ]);
//        }
//
//        $request->getSession()->remove('cart');
//
//        return $this->redirectToRoute('catalog_all', [
//            'success', 'Successfully purchased products!'
//        ]);
//    }
}