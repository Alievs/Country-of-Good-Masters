<?php

namespace App\Controller;


use App\Entity\Product;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\RouterInterface;


class HomeController extends AbstractController
{

    private $router;

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    /**
     * @Route("/", name="homepage")
     */
    public function homepage()
    {


        return $this->render('home.html.twig', [

        ]);
    }

    /**
     * @Route("/catalog", name="catalog")
     */
    public function catalog(ProductRepository $repository, CategoryRepository $repositoryCat, Request $request)
    {
        $categorys = $repositoryCat->findAll();

        $adapter = $repository->pagerfantaQuery();

        $pagerfanta = new Pagerfanta($adapter);
        $pagerfanta->setMaxPerPage(10);

        if (isset($_GET['page'])) {
            $pagerfanta->setCurrentPage($_GET['page']);
        }else{
            $pagerfanta->setCurrentPage($request->get('page', 1));
        }



        return $this->render('catalog.html.twig', [
            'categorys' => $categorys,
            'product_pager' => $pagerfanta,
        ]);
    }
}