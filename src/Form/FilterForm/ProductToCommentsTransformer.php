<?php

namespace App\Form\FilterForm;

use App\Repository\ProductRepository;
use Symfony\Component\Form\DataTransformerInterface;

class ProductToCommentsTransformer implements DataTransformerInterface
{
    private $productRepository;
    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }
    public function transform($value)
    {
        if (null === $value) {
            return '';
        }
        return $value->getId();
    }
    public function reverseTransform($value)
    {
        return $this->productRepository->findOneBy(['id' => $value]);
    }
}