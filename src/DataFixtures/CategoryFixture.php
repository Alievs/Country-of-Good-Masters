<?php


namespace App\DataFixtures;


use App\Entity\Category;
use Doctrine\Common\Persistence\ObjectManager;

class CategoryFixture extends BaseFixture
{

    private static $productCategory = [
        'Symfony',
        'Cool Thing',
        'Toppy',
        'Very cool thing',
        'Other Categories',
    ];

    protected function loadData(ObjectManager $manager)
    {
        $this->createMany(5, 'main_categorys', function($i) {

            $category = new Category();
            $category->setName(self::$productCategory[$i]);

            return $category;
        });

        $manager->flush();

    }
}