<?php


namespace App\DataFixtures;


use App\Entity\Category;
use Doctrine\Common\Persistence\ObjectManager;

class CategoryFixture extends BaseFixture
{

    private static $productCategorylvl_1 = [
        'Symfony',
        'Cool Thing',
        'Toppy',
        'Very cool thing',
        'Other Categories',
    ];

    private static $productCategorylvl_2 = [
        'Banana',
        'Pineapple',
        'Peach',
        'Avocado',
        'Melon',
        'Lemon',
        'Orange',
        'Kiwi',
        'Apple',
        'Blueberry',
    ];
    private static $productCategorylvl_3 = [
        'Carrot',
        'Broccoli',
        'Corn',
        'Cucumber',
        'Green pepper',
        'Mushrooms',
        'Onion',
        'Potato',
        'Pumpkin',
        'Red pepper',
        'Tomato',

        'Beetroot',
        'Peas',
        'Radish',
        'Sweet potato',
        'Garlic',
        'Basil',
        'Bean',
        'Oregano',
        'Lentil',
    ];

    protected function loadData(ObjectManager $manager)
    {
        $this->createManyCategory(4, 'main_categorys', function($i) {

            $arr = [];

            $category = new Category();
            $category->setTitle(self::$productCategorylvl_1[$i]);

            if ($i === 0){
                $subcategory1 = new Category();
                $subcategory1->setTitle(self::$productCategorylvl_2[$i]);
                $subcategory1->setParent($category);

                $subcategory2 = new Category();
                $subcategory2->setTitle(self::$productCategorylvl_2[$i+1]);
                $subcategory2->setParent($category);
            } elseif ($i === 1) {
                $subcategory1 = new Category();
                $subcategory1->setTitle(self::$productCategorylvl_2[$i+1]);
                $subcategory1->setParent($category);

                $subcategory2 = new Category();
                $subcategory2->setTitle(self::$productCategorylvl_2[$i+2]);
                $subcategory2->setParent($category);
            } elseif ($i === 2) {
                $subcategory1 = new Category();
                $subcategory1->setTitle(self::$productCategorylvl_2[$i+2]);
                $subcategory1->setParent($category);

                $subcategory2 = new Category();
                $subcategory2->setTitle(self::$productCategorylvl_2[$i+3]);
                $subcategory2->setParent($category);
            } elseif ($i === 3) {
                $subcategory1 = new Category();
                $subcategory1->setTitle(self::$productCategorylvl_2[$i+3]);
                $subcategory1->setParent($category);

                $subcategory2 = new Category();
                $subcategory2->setTitle(self::$productCategorylvl_2[$i+4]);
                $subcategory2->setParent($category);
            }
//            elseif ($i === 4) {
//                $subcategory1 = new Category();
//                $subcategory1->setTitle(self::$productCategorylvl_2[$i+4]);
//                $subcategory1->setParent($category);
//
//                $subcategory2 = new Category();
//                $subcategory2->setTitle(self::$productCategorylvl_2[$i+5]);
//                $subcategory2->setParent($category);
//            }


            if ($i === 0) {
                $subsubcategory1 = new Category();
                $subsubcategory1->setTitle(self::$productCategorylvl_3[$i]);
                $subsubcategory1->setParent($subcategory1);

                $subsubcategory2 = new Category();
                $subsubcategory2->setTitle(self::$productCategorylvl_3[$i+1]);
                $subsubcategory2->setParent($subcategory1);

                $subsubcategory3 = new Category();
                $subsubcategory3->setTitle(self::$productCategorylvl_3[$i+2]);
                $subsubcategory3->setParent($subcategory1);

            } elseif ($i === 1) {
                $subsubcategory1 = new Category();
                $subsubcategory1->setTitle(self::$productCategorylvl_3[$i+2]);
                $subsubcategory1->setParent($subcategory1);

                $subsubcategory2 = new Category();
                $subsubcategory2->setTitle(self::$productCategorylvl_3[$i+3]);
                $subsubcategory2->setParent($subcategory1);

                $subsubcategory3 = new Category();
                $subsubcategory3->setTitle(self::$productCategorylvl_3[$i+4]);
                $subsubcategory3->setParent($subcategory2);

                $subsubcategory4 = new Category();
                $subsubcategory4->setTitle(self::$productCategorylvl_3[$i+5]);
                $subsubcategory4->setParent($subcategory2);
            } elseif ($i === 2) {
                $subsubcategory1 = new Category();
                $subsubcategory1->setTitle(self::$productCategorylvl_3[$i+5]);
                $subsubcategory1->setParent($subcategory2);

                $subsubcategory2 = new Category();
                $subsubcategory2->setTitle(self::$productCategorylvl_3[$i+6]);
                $subsubcategory2->setParent($subcategory2);

                $subsubcategory3 = new Category();
                $subsubcategory3->setTitle(self::$productCategorylvl_3[$i+7]);
                $subsubcategory3->setParent($subcategory2);

                $subsubcategory4 = new Category();
                $subsubcategory4->setTitle(self::$productCategorylvl_3[$i+8]);
                $subsubcategory4->setParent($subcategory2);
            }
//            elseif ($i === 4) {
//                $subsubcategory1 = new Category();
//                $subsubcategory1->setTitle(self::$productCategorylvl_3[$i+7]);
//                $subsubcategory1->setParent($subcategory2);
//            }

            if ($i === 0) {
                $arr = [
                    'lvl1' => [$category, $subcategory1, $subcategory2, $subsubcategory1, $subsubcategory2, $subsubcategory3],
                    'lvl2' => [$subsubcategory1, $subsubcategory2, $subsubcategory3]
                ];
            }
            elseif ($i === 1) {
                $arr = [
                    'lvl1' => [$category, $subcategory1, $subcategory2, $subsubcategory1, $subsubcategory2, $subsubcategory3, $subsubcategory4],
                    'lvl2' => [$subsubcategory1, $subsubcategory2, $subsubcategory3, $subsubcategory4]
                ];
            }
            elseif ($i === 2) {
                $arr = [
                    'lvl1' => [$category, $subcategory1, $subcategory2, $subsubcategory1, $subsubcategory2, $subsubcategory3, $subsubcategory4],
                    'lvl2' => [$subsubcategory1, $subsubcategory2, $subsubcategory3, $subsubcategory4]
                ];
            }
            elseif ($i === 3) {
                $arr = ['lvl1' => [$category, $subcategory1, $subcategory2]];
            }
            elseif ($i === 4) {
                $arr = ['lvl1' => [$category, $subcategory1, $subcategory2, $subsubcategory1]
//                    'lvl3' => [$subsubcategory1]
                ];
            }

            return $arr;
        });

        $this->createManyCategory(1, 'sec_categorys', function($i)
        {

            $arr = [];

            $category = new Category();
            $category->setTitle(self::$productCategorylvl_1[4]);

            $subcategory1 = new Category();
            $subcategory1->setTitle(self::$productCategorylvl_2[8]);
            $subcategory1->setParent($category);

            $subcategory2 = new Category();
            $subcategory2->setTitle(self::$productCategorylvl_2[9]);
            $subcategory2->setParent($category);

            $subsubcategory1 = new Category();
            $subsubcategory1->setTitle(self::$productCategorylvl_3[11]);
            $subsubcategory1->setParent($subcategory2);

            $arr = [
                'lvl1' => [$category, $subcategory1, $subcategory2, $subsubcategory1],
                'lvl2' => [$subsubcategory1]
            ];
            return $arr;
        });

        $manager->flush();

    }
}