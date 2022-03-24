<?php

namespace App\Controller;


use App\Data\Cart;
use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{
    //cart link
    /**
     * @Route("/cart", name="user_cart")
     */
    public function cart(Request $request)
    {
        if (!$request->getSession()->has('cart')) {
            return $this->render('cart/cart.html.twig');
        }
        $oldCart = $request->getSession()->get('cart');
        $cart = new Cart($oldCart);

        return $this->render('cart/cart.html.twig', [
            'products' => $cart->getProducts(),
            'totalPrice' => $cart->getTotalPrice(),
        ]);


    }

    //add to cart product
    /**
     * @Route("/add-to-cart/{id}", name="cart_add", methods={"POST"},
     *      requirements={
     *          "id": "\d+"
     *      })
     */
    public function add(Request $request, $id, EntityManagerInterface $em)
    {
        //looking for product (id)
        $product = $em->getRepository(Product::class)->find($id);

        if ($product !== null){

            //checking existence of cart, if not then create
            $oldCart =  $request->getSession()->has('cart') ?  $request->getSession()->get('cart') : null;
            $cart = new Cart($oldCart);

            $category = '';
            foreach ($product->getCategories() as $cat) {
                /** @var Category $cat */
                $category = $cat->getTitle();
            }

            $cart->add($product, $product->getId(), $category);

            $request->getSession()->set('cart', $cart);

        }

        return new Response(null, 204);
    }
    //reduce by one cart product
    /**
     * @Route("/minus-one/{id}", name="cart_minus", methods={"GET"},
     *      requirements={
     *          "id": "\d+"
     *      })
     */
    public function minusOne(Request $request, $id)
    {

        //checking existence of cart, if not then create
        $oldCart =  $request->getSession()->has('cart') ?  $request->getSession()->get('cart') : null;
        $cart = new Cart($oldCart);
        $cart->reduceByOne($id);

        if (count($cart->getProducts()) > 0) {
            $request->getSession()->set('cart', $cart);
        } else {
            $request->getSession()->remove('cart');
        }

        return $this->redirectToRoute('user_cart');
    }

    //increase by one cart product
    /**
     * @Route("/plus-one/{id}", name="cart_plus", methods={"GET"},
     *      requirements={
     *          "id": "\d+"
     *      })
     */
    public function plusOne(Request $request, $id)
    {
        //checking existence of cart, if not then create
        $oldCart =  $request->getSession()->has('cart') ?  $request->getSession()->get('cart') : null;
        $cart = new Cart($oldCart);
        $cart->increaseByOne($id);

        $request->getSession()->set('cart', $cart);

        return $this->redirectToRoute('user_cart');
    }

    /**
     * @Route("/cart-change/{id}", name="cart_quant", methods={"POST"},
     *      requirements={
     *          "id": "\d+"
     *      })
     */
    public function changeBy(Request $request, $id)
    {
        //checking existence of cart, if not then create
        $oldCart =  $request->getSession()->has('cart') ?  $request->getSession()->get('cart') : null;
        $cart = new Cart($oldCart);

        if( is_numeric($_POST['quantity']) && is_numeric($_POST['totalQuantity']) )
        {
            $quant = $_POST['quantity'];
            $totalQuant = $_POST['totalQuantity'];
            $cart->changeBy($id, $quant, $totalQuant);
        }
        else {
            return new Response(null, 204);
        }

        if (count($cart->getProducts()) > 0) {
            $request->getSession()->set('cart', $cart);
        } else {
            $request->getSession()->remove('cart');
        }

        return new Response(null, 204);
    }

    //remove cart product
    /**
     * @Route("/cart-remove-product/{id}", name="cart_remove", methods={"POST"},
     *      requirements={
     *          "id": "\d+"
     *      })
     */
    public function remove(Request $request, $id)
    {

        //checking existence of cart, if not then just skip
        $oldCart =  $request->getSession()->has('cart') ?  $request->getSession()->get('cart') : null;
        $cart = new Cart($oldCart);
        $cart->removeProduct($id);

        if (count($cart->getProducts()) > 0) {
            $request->getSession()->set('cart', $cart);
        } else {
            $request->getSession()->remove('cart');
        }

        return new Response(null, 204);
    }

}