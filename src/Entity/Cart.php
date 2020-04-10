<?php

namespace App\Entity;

class Cart
{

    public $products;
    public $totalQuantity = 0;
    public $totalPrice = 0;

    public function __construct($oldCart)
    {
        if ($oldCart){
            $this->products = $oldCart->products;
            $this->totalQuantity = $oldCart->totalQuantity;
            $this->totalPrice = $oldCart->totalPrice;
        }
    }

    public function add($product, $id)
    {
        $storedProduct = ['qty' => 0,
            'unit_price' => $product->getUnitPrice(),
            'product' => $product];

        if ($this->products){
            if (array_key_exists($id, $this->products)) {
                $storedProduct = $this->products[$id];
            }
        }
        $storedProduct['qty']++;
        $storedProduct['unit_price'] = $product->getUnitPrice() * $storedProduct['qty'];
        $this->products[$id] = $storedProduct;
        $this->totalQuantity++;
        $this->totalPrice += $product->getUnitPrice();
    }
}
