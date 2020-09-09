<?php

namespace App\Controller;


use App\Entity\Product;
use App\Entity\WishList;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Wish2Controller extends AbstractController
{
    //wish list link
    /**
     * @Route("/wish", name="wish_list")
     * @IsGranted("ROLE_USER")
     */
    public function listOfWish(Request $request, CategoryRepository $categoryRepository)
    {
        $categories = $categoryRepository->findAll();

        if (!$request->getSession()->has('wish')) {
            return $this->render('account/Profile/wishlist_layout.html.twig', [
                'categories' => $categories,
            ]);
        }

        $oldWish = $request->getSession()->get('wish');
        $wish = new WishList($oldWish);


        return $this->render('account/Profile/wishlist_layout.html.twig', [
            'products' => $wish->getItems(),
            'categories' => $categories,
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

            //checking existence of wish, if not then create
            $oldWish =  $request->getSession()->has('wish') ?  $request->getSession()->get('wish') : null;
            $wish = new WishList($oldWish);
            $wish->add($product, $product->getId(), $product->getCategory()->getName());

            $request->getSession()->set('wish', $wish);
        }

        return new Response(null, 204);
    }

    //remove wish product
    /**
     * @Route("/wish-remove-product/{id}", name="wish_remove", methods={"GET"})
     */
    public function remove(Request $request, $id)
    {

        //checking existence of wish, if not then just skip
        $oldWish =  $request->getSession()->has('wish') ?  $request->getSession()->get('wish') : null;
        $wish = new WishList($oldWish);
        $wish->removeWishProduct($id);

        if (count($wish->getItems()) > 0) {
            $request->getSession()->set('wish', $wish);
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

//        return $this->redirectToRoute('wish_list');
        return new Response(null, 204);
    }



}