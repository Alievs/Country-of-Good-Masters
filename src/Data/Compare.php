<?php

namespace App\Data;


class Compare
{
    private $items = null;

    public function __construct($oldCompare)
    {
        if ($oldCompare){
            $this->items = $oldCompare->items;
        }
    }

    public function add($product, $id, $category, $data, $types)
    {
        $comparedProduct = [
            'item' => $product,
            'category' => $category,
            'options' => $data,
            'type' => $types,
        ];

        //in case double click the product is replaced by itself
        if ($this->items){
            if (isset($this->items[$id])) {
                $comparedProduct = $this->items[$id];
            }
        }
        $this->items[$id] = $comparedProduct;

    }

    public function removeCompareProduct($id)
    {
        unset($this->items[$id]);
    }

    public function getTypes()
    {
        $types = [];
        foreach ($this->items as $product){
            foreach ($product as $key => $value){
                if ($key === 'type'){
                    foreach ($value as $info){
                        $types[] = $info;
                    }
                }
            }
        }
//        faster than array_unique
        $types = array_keys(array_flip($types));

        return $types;
    }

    public function getItems()
    {
        return $this->items;
    }

    public function firstOut()
    {
        $elem = array_key_first($this->items);
        $this->removeCompareProduct($elem);
    }
}