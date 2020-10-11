<?php

namespace App\DataFixtures;


use App\Entity\AttributeType;
use Doctrine\Common\Persistence\ObjectManager;

class AttributeTypeFixture extends BaseFixture
{


    protected function loadData(ObjectManager $manager)
    {
        $this->createMany(1, 'value_type_brand', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('brand');

            return $valueType;
        });
        $this->createMany(1, 'value_type_country', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('country');

            return $valueType;
        });
        $this->createMany(1, 'value_type_width', function() {
            $valueType = new AttributeType();
            $valueType->setName('width');

            return $valueType;
        });
        $this->createMany(1, 'value_type_height', function() {
            $valueType = new AttributeType();
            $valueType->setName('height');

            return $valueType;
        });
        $this->createMany(1, 'value_type_depth', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('depth');

            return $valueType;
        });

        $this->createMany(1, 'value_type_material', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('material');

            return $valueType;
        });
        $this->createMany(1, 'value_type_warranty', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('warranty');

            return $valueType;
        });

        $this->createMany(1, 'value_type_berthWidth', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('BerthWidth');

            return $valueType;
        });
        $this->createMany(1, 'value_type_berthDepth', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('BerthDepth');

            return $valueType;
        });
        $this->createMany(1, 'value_type_sofaType', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('SofaType');

            return $valueType;
        });
        $this->createMany(1, 'value_type_internalFilling', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('InternalFilling');

            return $valueType;
        });

        $this->createMany(1, 'value_type_color', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('Color');

            return $valueType;
        });
        $this->createMany(1, 'value_type_pillows', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('Pillows');

            return $valueType;
        });
        $this->createMany(1, 'value_type_weight', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('Weight');

            return $valueType;
        });

        $this->createMany(1, 'value_type_chok', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('Chok');

            return $valueType;
        });
        $this->createMany(1, 'value_type_vog', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('Vog');

            return $valueType;
        });

        $this->createMany(1, 'value_type_log', function($i) {
            $valueType = new AttributeType();
            $valueType->setName('Log');

            return $valueType;
        });


        $manager->flush();
    }

}