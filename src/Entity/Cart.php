<?php

namespace App\Entity;


class Cart
{

    private $products;
    private $totalQuantity = 0;
    private $totalPrice = 0;

    public function __construct($oldCart)
    {
        if ($oldCart){
            $this->products = $oldCart->products;
            $this->totalQuantity = $oldCart->totalQuantity;
            $this->totalPrice = $oldCart->totalPrice;
        }
    }

    public function add($product, $id, $category)
    {
        $storedProduct = ['quantity' => 0,
            'unit_price' => $product->getUnitPrice(),
            'product' => $product,
            'category' => $category];

        if ($this->products){
            if (array_key_exists($id, $this->products)) {
                $storedProduct = $this->products[$id];
            }
        }
        $storedProduct['quantity']++;
        $storedProduct['unit_price'] = $product->getUnitPrice() * $storedProduct['quantity'];
        $this->products[$id] = $storedProduct;
        $this->totalQuantity++;
        $this->totalPrice += $product->getUnitPrice();
    }

    public function getTotalQuantity(): ?int
    {
        return $this->totalQuantity;
    }

    public function getProducts()
    {
        return $this->products;
    }

    public function getTotalPrice(): ?int
    {
        return $this->totalPrice;
    }
}
