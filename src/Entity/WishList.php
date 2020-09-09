<?php

namespace App\Entity;


class WishList
{
    private $items = null;

    public function __construct($oldWish)
    {
        if ($oldWish){
            $this->items = $oldWish->items;
        }
    }
    public function add($product, $id, $category)
    {
        $comparedProduct = ['item' => $product,
            'category' => $category];

        //in case double click the product is replaced by itself
        if ($this->items){
            if (array_key_exists($id, $this->items)) {
                $comparedProduct = $this->items[$id];
            }
        }
        $this->items[$id] = $comparedProduct;

    }

    public function removeWishProduct($id)
    {
        unset($this->items[$id]);
    }

    public function getItems()
    {
        return $this->items;
    }
}