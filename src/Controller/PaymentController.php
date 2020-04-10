<?php

namespace App\Controller;


use App\Entity\Cart;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PaymentController extends AbstractController
{
    /**
     * @Route("/checkout", name="checkout")
     */
    public function checkout(Request $request){
        if(!$request->getSession()->has('cart')){
            return $this->render('cart/payment.html.twig');
        }

        $oldCart = $request->getSession()->get('cart');
        $cart = new Cart($oldCart);
        $total = $cart->getTotalPrice();

        return $this->render('cart/payment.html.twig', [
            'total' => $total,
        ]);
    }
}