<?php

namespace App\Entity;


class Cart
{

    private $products = null;
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
            'price' => $product->getUnitPrice(),
            'product' => $product,
            'category' => $category,
            'id' => $id];

        if ($this->products){
            if (array_key_exists($id, $this->products)) {
                $storedProduct = $this->products[$id];
            }
        }
        $storedProduct['quantity']++;
//        $storedProduct['price'] = $product->getUnitPrice() * $storedProduct['quantity'];
        $this->products[$id] = $storedProduct;
        $this->totalQuantity++;
        $this->totalPrice += $product->getUnitPrice();
    }

    public function reduceByOne($id)
    {
        $this->products[$id]['quantity']--;
//        $this->products[$id]['price'] -= $this->products[$id]['product']->getUnitPrice();
        $this->totalQuantity--;
        $this->totalPrice -= $this->products[$id]['price'];

        if ( $this->products[$id]['quantity'] <= 0){
            unset($this->products[$id]);
        }

    }

    public function increaseByOne($id)
    {
        $this->products[$id]['quantity']++;
//        $this->products[$id]['price'] += $this->products[$id]['product']->getUnitPrice();
        $this->totalQuantity++;
        $this->totalPrice += $this->products[$id]['price'];
    }

    public function changeBy($id, $quant, $totalQuant)
    {
//       totalPrice

        $this->totalPrice -= $this->products[$id]['price'] * $this->products[$id]['quantity'];
        $this->totalPrice += $this->products[$id]['price'] * $quant;
//        quantity
        $this->products[$id]['quantity'] = $quant;
        if ($this->products[$id]['quantity'] >= 100){
            $this->products[$id]['quantity'] = 99;
        }

        $this->totalQuantity = $totalQuant;

        if ( $this->products[$id]['quantity'] <= 0){
            unset($this->products[$id]);
        }
    }


    public function removeProduct($id)
    {
        $this->totalQuantity -= $this->products[$id]['quantity'];
        $this->totalPrice -= $this->products[$id]['price'] * $this->products[$id]['quantity'];
        unset($this->products[$id]);

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
