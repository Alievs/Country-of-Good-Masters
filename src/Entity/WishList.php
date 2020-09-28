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

        $wishList = ['item' => $product,
            'category' => $category];

        //in case double click the product is replaced by itself
        if ($this->items){
            if (isset($this->items[$id])) {
                $wishList = $this->items[$id];
            }
        }
        $this->items[$id] = $wishList;

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