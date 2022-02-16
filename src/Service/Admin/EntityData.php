<?php

namespace App\Service\Admin;

use App\Entity\Category;
use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;

class EntityData
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct( EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function getDataCategory(): array
    {
        /**
         * @var $category Category[]
         */
        $list = [];
        $categories = $this->entityManager->getRepository(Category::class)->findAll();

        foreach ($categories as $category)
        {
            $list[] = [
                $category->getTitle(),
                $category->getParent() !== null ?
                    $category->getParent()->getTitle() : '',
                $category->getCategoryImage()
            ];
        }
        return $list;
    }

    public function getDataProduct(): array
    {
        /**
         * @var $product Product[]
         */
        $list = [];
        $products = $this->entityManager->getRepository(Product::class)->findAll();
        foreach ($products as $product) {
            $list[] = [
                $product->getName(),
                $product->getMainImage(),
                $product->getUnitPrice(),
                $product->getDiscount(),
                $product->getDescription(),
                implode(PHP_EOL,  $product->getCategoriesTitle()),
                implode(PHP_EOL,  $product->getAttributesTypes()),
                implode(PHP_EOL,  $product->getAttributesValues()),
//                implode(PHP_EOL,  $product->getImagesName()),
            ];
        }
        return $list;
    }
}