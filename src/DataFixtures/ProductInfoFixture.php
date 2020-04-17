<?php
/**
 * Created by PhpStorm.
 * User: alibaba
 * Date: 17.04.20
 * Time: 0:13
 */

namespace App\DataFixtures;


use App\Entity\ProductInfo;
use Doctrine\Common\Persistence\ObjectManager;

class ProductInfoFixture extends BaseFixture
{
    private static $infoType = [
        'Раскладной',
        'Угловой',
        'Модульный',
    ];

    private static $infoFilling = [
        'Ламелі, ППУ',
        'ППУ',
        'Пружинный блок + Пенополиуретан',
    ];

    private static $infoFrameMaterial = [
        'Дерево',
        'Металл',
        'Пластик',
    ];

    private static $infoColor = [
        'Blue',
        'Red',
        'Green',
        'Black',
    ];

    private static $infoPillows = [
        'С подушками',
        'Без подушек',
    ];

    protected function loadData(ObjectManager $manager)
    {
        $this->createMany(10, 'main_info', function($i) {

            $info = new ProductInfo();

            $info->setBerthWidth(rand(10, 100));
            $info->setBerthDepth(rand(10, 100));

            $info->setSofaType($this->faker->randomElement(self::$infoType));
            $info->setInternalFilling($this->faker->randomElement(self::$infoFilling));

            $info->setSleepingPlaces(rand(1, 4));

            $info->setFrameMaterial($this->faker->randomElement(self::$infoFrameMaterial));
            $info->setColor($this->faker->randomElement(self::$infoColor));

            $info->setPillows($this->faker->randomElement(self::$infoPillows));
            $info->setWeight(rand(1, 10));

            $info->setProduct($this->getRandomReference('main_products'));

            return $info;
        });

        $manager->flush();

    }


    public function getDependencies()
    {
        return [
            ProductFixture::class,
        ];
    }
}