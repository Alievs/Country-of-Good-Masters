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
        ['100 см', '110 см', '120 см'],
        ['150 см', '155 см', '158 см'],
        ['50 см', '60 см', '35 см'],
        ['Wood', 'Steel', 'Plastic'],
        ['Ukraine', 'Russia', 'Poland'],
        ['Some Brand', 'Brand', 'Another Brand'],
        ['Some Warranty 1-2 year', 'Some Warranty 1 year', 'Some Warranty 3 year'],
        ['10 см', '11 см', '12 см'],
        ['20 см', '24 см', '25 см'],
        ['Угловой', 'Раскладной', 'Модульный'],
        ['Пружинный блок + Пенополиуретан', 'ППУ', 'Ламелі, ППУ'],
        ['Red', 'Blue', 'Green'],
        ['С подушками', 'Без подушек', 'С половиной подушек'],
        ['2,7 кг', '3 кг', '8 кг'],
    ];

    private static $valueC = [
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        'Sanity',
        '17,9', //15,6
        '256 MB', //512 MB
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

    private static $attributeTypeC = [
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        'value_type_chok',
        'value_type_vog',
        'value_type_log',
    ];


    protected function loadData(ObjectManager $manager)
    {
//        rand(0, 2)
        for ($f = 0; $f < 200; $f++) {

            /** @var Product $product */
            $product = $this->getRandomReference('main_products');

            for ($b = 0; $b < 14; $b++) {

                $productValue = new AttributeValue();

                $productValue->setValue(self::$value[$b][rand(0, 2)]);
                $productValue->setAttributeType($this->getRandomReference(self::$attributeType[$b]));

                $productValue->setProduct($product);

                $this->createManyValues($productValue);
            }
        }


        for ($f = 0; $f < 10; $f++) {

            /** @var Product $product */
            $product = $this->getRandomReference('sec_products');

            for ($b = 0; $b < 9; $b++) {

                if ($b >= 6){

                    $productValue = new AttributeValue();

                    $productValue->setValue(self::$valueC[$b]);
                    $productValue->setAttributeType($this->getRandomReference(self::$attributeTypeC[$b]));

                    $productValue->setProduct($product);

                    $this->createManyValues($productValue);

                }
                else{
                    $productValue = new AttributeValue();

                    $productValue->setValue(self::$value[$b][rand(0, 2)]);
                    $productValue->setAttributeType($this->getRandomReference(self::$attributeType[$b]));

                    $productValue->setProduct($product);

                    $this->createManyValues($productValue);
                }

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