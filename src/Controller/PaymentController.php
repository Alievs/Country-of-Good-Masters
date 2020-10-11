<?php

namespace App\Controller;


use App\Data\Cart;
use App\Entity\Order;
use App\Form\PaymentFormType;
use App\Service\Mailer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PaymentController extends AbstractController
{
    /**
     * @Route("/checkout", name="checkout")
     */
    public function getCheckout(Mailer $mailer, Request $request, EntityManagerInterface $em)
    {
        if(!$request->getSession()->has('cart')){
            return $this->redirectToRoute('user_cart');
        }

        $oldCart = $request->getSession()->get('cart');
        $cart = new Cart($oldCart);

        $form = $this->createForm(PaymentFormType::class);
        $form->handleRequest($request);

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

            //            email sender
            if ($this->isGranted('ROLE_USER')){
                $mailer->sendUserOrderInfo($order);
            }
            else{
                $mailer->sendAnonymOrderInfo($order, $cart);
            }

            $request->getSession()->remove('cart');
            return $this->redirectToRoute('thanks_page');

        }

        return $this->render('cart/payment.html.twig', [
            'products' => $cart->getProducts(),
            'checkoutForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("/thankspage", name="thanks_page")
     */
    public function thxFunc()
    {
        return $this->render('cart/thankspage.html.twig');
    }

}