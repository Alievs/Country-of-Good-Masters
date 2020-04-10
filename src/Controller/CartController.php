<?php

namespace App\Controller;


use App\Entity\Cart;
use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{

    /**
     * @Route("/cart", name="user_cart")
     */
    public function cart()
    {

        return $this->render('cart.html.twig', [

        ]);
    }


    /**
     * @Route("/add-to-cart/{id}", name="cart_add", methods={"POST"})
     */
    public function add(Request $request, $id, EntityManagerInterface $em)
    {
        //looking for product (id)
        $product = $em->getRepository(Product::class)->find($id);

        //checking existence of cart, if not then create
        $oldCart =  $request->getSession()->has('cart') ?  $request->getSession()->get('cart') : null;
        $cart = new Cart($oldCart);
        $cart->add($product, $product->getId() ?? $id);

        $request->getSession()->set('cart', $cart);

        return new Response(null, 204);

    }

}