<?php

namespace App\DataFixtures;


use App\Entity\AttributeValue;
use App\Entity\Product;
use Doctrine\Common\Persistence\ObjectManager;

class ZattributeValueFixture extends BaseFixture
{

    private static $productMaterial = [
        'steel',
        'Wood',
        'Plastic',
    ];

    private static $sofaType = [
        'Раскладной',
        'Угловой',
        'Модульный',
    ];

    private static $infoColor = [
        'Blue',
        'Red',
        'Green',
        'Black',
    ];

    private static $infoFilling = [
        'Ламелі, ППУ',
        'ППУ',
        'Пружинный блок + Пенополиуретан',
    ];

    private static $infoPillows = [
        'С подушками',
        'Без подушек',
    ];

    private static $value = [
        '100 см',
        '150 см',
        '50 см',
        'Wood',
        'Ukraine',
        'Some Brand',
        'Some Warranty 1-2 year',
        '10 см',
        '20 см',
        'Угловой',
        'Пружинный блок + Пенополиуретан',
        'Red',
        'С подушками',
        '2,7 кг',
    ];

    private static $attributeType = [
        'value_type_width',
        'value_type_height',
        'value_type_depth',
        'value_type_material',
        'value_type_country',
        'value_type_brand',
        'value_type_warranty',
        'value_type_berthWidth',
        'value_type_berthDepth',
        'value_type_sofaType',
        'value_type_internalFilling',
        'value_type_color',
        'value_type_pillows',
        'value_type_weight',
    ];


    protected function loadData(ObjectManager $manager)
    {
//        $this->createMany(100, 'main_value', function($i) {
//
//            /** @var Product $product */
//            $product = $this->getRandomReference('main_products');
//
//            $productValue = new AttributeValue();
//            for ($b = 0; $b < 14; $b++) {
//
//                $productValue = new AttributeValue();
//
//                $productValue->setValue(rand(10, 240));
//                $productValue->setAttributeType($this->getRandomReference(self::$attributeType[$b]));
//
//                $productValue->setProduct($product);
//
//            }
//
//            return $productValue;
//        });


        /** @var Product $product */
        $product = $this->getRandomReference('main_products');

        for ($f = 0; $f < 100; $f++) {

            /** @var Product $product */
            $product = $this->getRandomReference('main_products');

            for ($b = 0; $b < 14; $b++) {

                $productValue = new AttributeValue();

                $productValue->setValue(self::$value[$b]);
                $productValue->setAttributeType($this->getRandomReference(self::$attributeType[$b]));

                $productValue->setProduct($product);

                $this->createManyValues($productValue);
            }
        }


        $manager->flush();
    }

//$productValue->setProduct($this->getRandomReference('main_products'));
    public function getDependencies()
    {
        return [
            ProductFixture::class,
            AttributeTypeFixture::class,
        ];
    }
}