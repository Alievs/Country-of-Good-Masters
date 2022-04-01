<?php

namespace App\Data;

class ViewedList
{
    private $items = null;

    public function __construct($oldViewed)
    {
        if ($oldViewed){
            $this->items = $oldViewed->items;
        }
    }
    public function add($product, $id, $category, $comments)
    {

        $viewedList = ['item' => $product,
            'category' => $category,
            'comments' => $comments
            ];

        //in case double click the product is replaced by itself
        if ($this->items){
            if (isset($this->items[$id])) {
                $viewedList = $this->items[$id];
            }
        }
        $this->items[$id] = $viewedList;

    }

    public function removeViewedProduct($id)
    {
        unset($this->items[$id]);
    }

    public function getItems()
    {
        return $this->items;
    }
}