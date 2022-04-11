<?php

namespace App\Controller;

use App\Data\Cart;
use App\Entity\OneClickOrder;
use App\Entity\Order;
use App\Form\OneClickOrderType;
use App\Form\PaymentFormType;
use App\Service\Mailer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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
            $order->setOrderDate(new \DateTime());
            $order->setUser($form->get('user')->getData());

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
     * @Route("/checkout/oneclick", name="oneclick")
     */
    public function OneClick(Request $request, EntityManagerInterface $em): Response
    {

        $form = $this->createForm(OneClickOrderType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            //create order
            $order = new OneClickOrder();
            $order->setPhoneNumber($form->get('phone_number')->getData());
            $order->setIdProduct($form->get('idProduct')->getData());
            $order->setStock($form->get('stock')->getData());
            $order->setPriceProduct($form->get('priceProduct')->getData());
            $order->setSentAt(new \DateTime);
            $order->setUpdateAt(new \DateTime);
            $order->setStatus('Необроблений');

            $em->persist($order);
            $em->flush();
        }
        return new Response(null, 204);
    }

    /**
     * @Route("/thankspage", name="thanks_page")
     */
    public function thxFunc(): Response
    {
        return $this->render('cart/thankspage.html.twig');
    }

}