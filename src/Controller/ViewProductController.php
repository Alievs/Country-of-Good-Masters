<?php

namespace App\Controller;

use App\Data\ViewedList;
use App\Entity\Category;
use App\Entity\Comments;
use App\Entity\Product;
use App\Traits\KnpPager;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ViewProductController extends AbstractController
{
    use KnpPager;

    /**
     * @Route("/recently-viewed", name="app_recently_viewed")
     * @IsGranted("ROLE_USER")
     */
    public function recentlyViewedActive(PaginatorInterface $paginator, Request $request): Response
    {
        if (!$request->getSession()->has('recently-viewed')) {
            return $this->render('account/Profile/recently_viewed.html.twig');
        }

        $oldViewed = $request->getSession()->get('recently-viewed');
        $viewed = new ViewedList($oldViewed);
        $query = $viewed->getItems();
        $pager = $this->pageRouter($query, $request, $paginator, 10);
        return $this->render('account/Profile/recently_viewed.html.twig', [
            'product_pager' => $pager
        ]);
    }

    /**
     * @Route("/add-to-recently-viewed/{id}", name="app_recently_viewed_add", methods="POST",
     *      requirements={
     *          "id": "\d+"
     *      }))
     */
    public function add(Request $request, $id, EntityManagerInterface $em): Response
    {
            $product = $em->getRepository(Product::class)->find($id);

            if ($product !== null){
                //checking existence of wish, if not then create
                $comments = $em->getRepository(Comments::class)->findByCount($id);
                $oldViewed =  $request->getSession()->has('recently-viewed') ?  $request->getSession()->get('recently-viewed') : null;
                $viewed = new ViewedList($oldViewed);

                $category = '';
                foreach ($product->getCategories() as $cat) {
                    /** @var Category $cat */
                    $category = $cat->getTitle();
                }
                $viewed->add($product, $product->getId(), $category, $comments);

                $request->getSession()->set('recently-viewed', $viewed);
            }
        return new Response(null, 204);
    }

    /**
     * @Route("/wrecently-viewed-remove-product/{id}", name="app_recently-viewed_remove", methods={"GET"},
     *      requirements={
     *          "id": "\d+"
     *      })
     */
    public function remove(Request $request, $id): RedirectResponse
    {
        $oldViewed =  $request->getSession()->has('recently-viewed') ?  $request->getSession()->get('recently-viewed') : null;
        $viewed = new ViewedList($oldViewed);
        $viewed->removeViewedProduct($id);

        if (count($viewed->getItems()) > 0) {
            $request->getSession()->set('recently-viewed', $viewed);
        } else {
            $request->getSession()->remove('recently-viewed');
        }

        return $this->redirectToRoute('app_recently_viewed');
    }

    /**
     * @Route("/recently-viewed-clear", name="app_recently_viewed_clear", methods={"GET"})
     */
    public function removeAll(Request $request): Response
    {
        $request->getSession()->remove('recently-viewed');

        return new Response(null, 204);
    }
}