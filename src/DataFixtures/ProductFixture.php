<?php

namespace App\DataFixtures;


use App\Entity\Product;
use Doctrine\Common\Persistence\ObjectManager;

class ProductFixture extends BaseFixture
{
    private static $productTitle = [
        'Some-Product-1',
        'Some-Product-2',
        'Some-Product-3',
        'Some-Product-4',
    ];

    private static $productImages = [
        'product-1a.png',
        'product-2a.png',
        'product-3a.png',
        'product-4a.jpg',
    ];


    public function loadData(ObjectManager $manager)
    {
        $this->createMany(200, 'main_products', function($i) {

            $product = new Product();
            $product->setName($this->faker->randomElement(self::$productTitle))
                ->setDescription(<<<EOF
Ipsum dolor amet veniam shank in dolore. Ham hock nisi landjaeger cow,
lorem proident [beef ribs](https://baconipsum.com/) aute enim veniam ut cillum pork chuck picanha. Dolore reprehenderit
labore minim pork belly spare ribs cupim short loin in. Elit exercitation eiusmod dolore cow.
shank eu pork belly meatball non cupim.
Laboris beef ribs fatback fugiat eiusmod jowl kielbasa alcatra dolore velit ea ball tip. Pariatur
laboris sunt venison, et laborum dolore minim non meatball. Shankle eu flank aliqua shoulder,
capicola biltong frankfurter boudin cupim officia. Exercitation fugiat consectetur ham. Adipisicing
picanha shank et filet mignon pork belly ut ullamco. Irure velit turducken ground round doner incididunt
occaecat lorem meatball prosciutto quis strip steak.
Meatball adipisicing ribeye bacon strip steak eu. Consectetur ham hock pork hamburger enim strip steak
mollit quis officia meatloaf tri-tip swine. Cow ut reprehenderit, buffalo incididunt in filet mignon
strip steak pork belly aliquip capicola officia. Labore deserunt esse chicken lorem shoulder tail consectetur
cow est ribeye adipisicing. Pig hamburger pork belly enim. Do porchetta minim capicola irure pancetta chuck
fugiat.
EOF
                );

            $product->setUpdatedAt(new \DateTime(sprintf('-%d days', rand(1, 100))));

            $product->addCategory($this->getRandomReference('main_categorys'));
            $pric = random_int(10, 1900);
            $product->setUnitPrice($pric);

            $discont = random_int(0, 2);
            if ( $discont === 2 ){
                $disc = random_int(5, 15);
                $product->setDiscount($disc);
            }

            if (isset($disc)){
                $dcpc = floor($pric * ((100 - $disc)/100));
                $product->setDiscountedPrice($dcpc);
            }
            else {
                $product->setDiscountedPrice($pric);
            }
            $product->setMainImage($this->faker->randomElement(self::$productImages));


            return $product;
        });


        $this->createMany(20, 'sec_products', function($i) {

            $product = new Product();
            $product->setName($this->faker->randomElement(self::$productTitle))
                ->setDescription(<<<EOF
Ipsum dolor amet veniam shank in dolore. Ham hock nisi landjaeger cow,
lorem proident [beef ribs](https://baconipsum.com/) aute enim veniam ut cillum pork chuck picanha. Dolore reprehenderit
labore minim pork belly spare ribs cupim short loin in. Elit exercitation eiusmod dolore cow.
shank eu pork belly meatball non cupim.
Laboris beef ribs fatback fugiat eiusmod jowl kielbasa alcatra dolore velit ea ball tip. Pariatur
laboris sunt venison, et laborum dolore minim non meatball. Shankle eu flank aliqua shoulder,
capicola biltong frankfurter boudin cupim officia. Exercitation fugiat consectetur ham. Adipisicing
picanha shank et filet mignon pork belly ut ullamco. Irure velit turducken ground round doner incididunt
occaecat lorem meatball prosciutto quis strip steak.
Meatball adipisicing ribeye bacon strip steak eu. Consectetur ham hock pork hamburger enim strip steak
mollit quis officia meatloaf tri-tip swine. Cow ut reprehenderit, buffalo incididunt in filet mignon
strip steak pork belly aliquip capicola officia. Labore deserunt esse chicken lorem shoulder tail consectetur
cow est ribeye adipisicing. Pig hamburger pork belly enim. Do porchetta minim capicola irure pancetta chuck
fugiat.
EOF
                );

            $product->setUpdatedAt(new \DateTime(sprintf('-%d days', rand(1, 100))));

            $product->addCategory($this->getRandomReference('sec_categorys'));
            $pric = random_int(10, 1900);
            $product->setUnitPrice($pric);

            $discont = random_int(0, 2);
            if ( $discont === 2 ){
                $disc = random_int(5, 15);
                $product->setDiscount($disc);
            }

            if (isset($disc)){
                $dcpc = floor($pric * ((100 - $disc)/100));
                $product->setDiscountedPrice($dcpc);
            }
            $product->setMainImage($this->faker->randomElement(self::$productImages));


            return $product;
        });

        $manager->flush();

    }

    public function getDependencies()
    {
        return [
            CategoryFixture::class,
        ];
    }

}