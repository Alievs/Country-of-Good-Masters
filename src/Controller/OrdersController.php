<?php

namespace App\Controller;

use App\Repository\OrderRepository;
use App\Traits\KnpPager;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrdersController extends AbstractController
{
    use KnpPager;

    /**
     * @Route("/orders", name="app_user_order_list")
     * @IsGranted("ROLE_USER")
     */
    public function userOrdersListActive(OrderRepository $orderRepository, Request $request, PaginatorInterface $paginator): Response
    {
        $user = $this->getUser();
        $query = $orderRepository->findBy(['email'=>$user->getEmail()],['order_date'=>'DESC']);
        $pager = $this->pageRouter($query, $request, $paginator, 10);

        return $this->render('orders/ordersList.html.twig', [
            'product_pager' => $pager
        ]);
    }

    /**
     * @Route("/orders/{id}", name="app_user_order",
     *      requirements={
     *          "id": "\d+"
     *      })
     * @IsGranted("ROLE_USER")
     */
    public function userOrdersActive(OrderRepository $orderRepository, Request $request, PaginatorInterface $paginator, $id): Response
    {
        $query = $orderRepository->findOneBy(['id'=>$id]);
        if (!$query) {
            return $this->redirect('/404/');
        }
        $orderCart = $query->getCart();
        $oldCart = unserialize($orderCart);
        $product = $oldCart->getProducts();
        $pager = $this->pageRouter($product, $request, $paginator, 10);

        return $this->render('orders/order.html.twig', [
            'order' => $query,
            'product_pager' =>$pager
        ]);
    }

}