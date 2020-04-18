<?php

namespace App\Controller;


use App\Entity\Product;
use App\Entity\WishList;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WishController extends AbstractController
{
    //wish list link
    /**
     * @Route("/wish", name="wish_list")
     */
    public function compare(Request $request)
    {
        if (!$request->getSession()->has('wish')) {
            return $this->render('products/wishlist.html.twig');
        }

        $oldWish = $request->getSession()->get('wish');
        $wish = new WishList($oldWish);


        return $this->render('products/wishlist.html.twig', [
            'products' => $wish->getItems(),
        ]);
    }

    //add to wish list
    /**
     * @Route("/add-to-wish/{id}", name="wish_add", methods={"POST"})
     */
    public function add(Request $request, $id, EntityManagerInterface $em)
    {
        //looking for product (id)
        $product = $em->getRepository(Product::class)->find($id);

        if ($product !== null){

            //checking existence of compare, if not then create
            $oldCompare =  $request->getSession()->has('wish') ?  $request->getSession()->get('wish') : null;
            $compare = new WishList($oldCompare);
            $compare->add($product, $product->getId(), $product->getCategory()->getName());

            $request->getSession()->set('wish', $compare);
        }

        return new Response(null, 204);
    }

    //remove wish product
    /**
     * @Route("/wish-remove-product/{id}", name="wish_remove", methods={"GET"})
     */
    public function remove(Request $request, $id)
    {

        //checking existence of cart, if not then just skip
        $oldCompare =  $request->getSession()->has('wish') ?  $request->getSession()->get('wish') : null;
        $compare = new WishList($oldCompare);
        $compare->removeWishProduct($id);

        if (count($compare->getItems()) > 0) {
            $request->getSession()->set('wish', $compare);
        } else {
            $request->getSession()->remove('wish');
        }

        return $this->redirectToRoute('wish_list');
    }

    //clear wish list
    /**
     * @Route("/wish-clear", name="wish_clear", methods={"GET"})
     */
    public function removeAll(Request $request)
    {
        $request->getSession()->remove('wish');

        return $this->redirectToRoute('wish_list');
    }
}