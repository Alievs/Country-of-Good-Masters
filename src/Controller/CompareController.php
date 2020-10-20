<?php

namespace App\Controller;


use App\Entity\Category;
use App\Data\Compare;
use App\Entity\Product;
use App\Repository\AttributeTypeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CompareController extends AbstractController
{
    //compare link
    /**
     * @Route("/compare", name="item_compare")
     */
    public function compare(Request $request)
    {
        if (!$request->getSession()->has('compare')) {
            return $this->render('compare/compare.html.twig');
        }

        $oldCompare = $request->getSession()->get('compare');
        $compare = new Compare($oldCompare);

        return $this->render('compare/compare.html.twig', [
            'products' => $compare->getItems(),
            'type' => $compare->getTypes(),
        ]);
    }

    //add to compare product
    /**
     * @Route("/add-to-compare/{id}", name="compare_add", methods={"POST"})
     */
    public function add(Request $request, $id, EntityManagerInterface $em, AttributeTypeRepository $typeRepository)
    {
        //looking for product (id)
        $product = $em->getRepository(Product::class)->find($id);
        $options = $typeRepository->findById($id);

        if ($product !== null){

            //checking existence of compare, if not then create
            $oldCompare =  $request->getSession()->has('compare') ?  $request->getSession()->get('compare') : null;
            $compare = new Compare($oldCompare);

            //not more then 4 product in list
            $elem = $compare->getItems() !== null ? count($compare->getItems()) : 0;
            if ($elem >= 4){
                $compare->firstOut();
            }

//            for options display
            $arr_options = [];
            $types = [];
            foreach ($options as $data) {
                $value = [];
                $key = $data->getName();
                foreach ($data->getAttributeValue() as $param) {
                    $value[] = $param->getValue();
                }
                $arr_options[$key] = $value;
                $types[] = $key;
            }

            $category = '';
            foreach ($product->getCategories() as $cat) {
                /** @var Category $cat */
                $category = $cat->getTitle();
            }

            $compare->add($product, $product->getId(), $category, $arr_options, $types);
            $request->getSession()->set('compare', $compare);
        }

        return new Response(null, 204);
    }

    //remove compare product
    /**
     * @Route("/compare-remove-product/{id}", name="compare_remove", methods={"GET"})
     */
    public function remove(Request $request, $id)
    {

        //checking existence of compare, if not then just skip
        $oldCompare =  $request->getSession()->has('compare') ?  $request->getSession()->get('compare') : null;
        $compare = new Compare($oldCompare);
        $compare->removeCompareProduct($id);

        if (count($compare->getItems()) > 0) {
            $request->getSession()->set('compare', $compare);
        } else {
            $request->getSession()->remove('compare');
        }

        return $this->redirectToRoute('item_compare');
    }

    //clear compare
    /**
     * @Route("/compare-clear", name="compare_clear", methods={"GET"})
     */
    public function removeAll(Request $request)
    {
        $request->getSession()->remove('compare');

        return $this->redirectToRoute('item_compare');
    }
}