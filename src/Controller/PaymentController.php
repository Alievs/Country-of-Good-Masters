<?php

namespace App\Controller;


use App\Entity\Cart;
use App\Entity\Order;
use App\Form\PaymentFormType;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PaymentController extends AbstractController
{
    /**
     * @Route("/checkout", name="checkout")
     */
    public function getCheckout(Request $request, EntityManagerInterface $em, CategoryRepository $categoryRepository){

        $categories = $categoryRepository->findAll();

        if(!$request->getSession()->has('cart')){
            return $this->redirectToRoute('user_cart');
        }
        $form = $this->createForm(PaymentFormType::class);
        $form->handleRequest($request);

        $oldCart = $request->getSession()->get('cart');
        $cart = new Cart($oldCart);


//        if ($request->isMethod('POST')) {
//            $form->handleRequest($request);
//        }

        if ($form->isSubmitted() && $form->isValid())
        {
            $total = $cart->getTotalPrice();

            //create order
            $order = new Order();
            $order->setCart( serialize($cart) );
            $order->setEmail($form->get('email')->getData());
            $order->setName($form->get('name')->getData());
            $order->setLastName($form->get('lastName')->getData());
            $order->setPhoneNumber($form->get('phoneNumber')->getData());
            $order->setAddress($form->get('address')->getData());
            $order->setWarehouse($form->get('warehouse')->getData());
            $order->setDelivery($form->get('delivery')->getData());
            $order->setPay($form->get('pay')->getData());
            $order->setTotalOrderPrice($total);

            $em->persist($order);
            $em->flush();

            $request->getSession()->remove('cart');
//                $this->addFlash('success', 'Successfully purchased products!');
            return $this->redirectToRoute('thanks_page');

        }


        return $this->render('cart/payment.html.twig', [
            'categories' => $categories,
            'products' => $cart->getProducts(),
            'checkoutForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("/thankspage", name="thanks_page")
     */
    public function thanksFunc(CategoryRepository $categoryRepository){

        $categories = $categoryRepository->findAll();

        return $this->render('cart/thankspage.html.twig', [
            'categories' => $categories,
        ]);
    }


//    /**
//     * @Route("/checkout_form", name="postCheckout", methods={"POST"})
//     */
//    public function postCheckout(Request $request){
//        if(!$request->getSession()->has('cart')){
//            return $this->redirectToRoute('user_cart');
//        }
//
//        if ($request->isMethod('POST')) {
//            $form->handleRequest($request);
//
//            if ($form->isSubmitted() && $form->isValid()) {
//                //stripe stuff
//                Stripe::setApiKey('sk_test_1Hk2teDeXUZ2Kk3auUfOspXt00vguv8XDT');
//                try {
//                    $charge = Charge::create([
//                        'amount' => $cart->getTotalPrice() * 100,
//                        'currency' => 'usd',
//                        'source' => $form->get('token')->getData(), // obtained with payment.js
//                        'description' => 'Test Charge'
//                    ]);
//
//                    //create order
//                    $order = new Order();
//                    $order->setCart( serialize($cart) );
//                    $order->setEmail($form->get('email')->getData());
//                    $order->setName($form->get('name')->getData());
//                    $order->setPaymentId($charge->id);
//
//                    $em->persist($order);
//                    $em->flush();
//
//                } catch (\Exception $e){
//                    return $this->redirectToRoute('checkout', [
//                        'error' => $e->getMessage()
//                    ]);
//                }
//
//                $request->getSession()->remove('cart');
//                $this->addFlash('success', 'Successfully purchased products!');
//
//                return $this->redirectToRoute('catalog_all');
//            }
//        }
//
//
////        $oldCart = $request->getSession()->get('cart');
////        $cart = new Cart($oldCart);
////        $request->getSession()->remove('cart');
//
//        return new Response(null, 204);
////        return $this->redirectToRoute('homepage', [
////            'success', 'Successfully purchased products!'
////        ]);
//    }
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