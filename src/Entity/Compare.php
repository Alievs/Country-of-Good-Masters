<?php

namespace App\Entity;


class Compare
{
    private $items = null;

    public function __construct($oldCompare)
    {
        if ($oldCompare){
            $this->items = $oldCompare->items;
        }
    }

    public function add($product, $id, $category)
    {
        $max = 0;
        if ($this->items !== null){
            $max = count($this->items);
        }

        $comparedProduct = ['item' => $product,
            'category' => $category,
            'count' => $max];

        //in case double click the product is replaced by itself
        if ($this->items){
            if (array_key_exists($id, $this->items)) {
                $comparedProduct = $this->items[$id];
            }
        }
        $this->items[$id] = $comparedProduct;

    }

    public function removeCompareProduct($id)
    {
        unset($this->items[$id]);
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