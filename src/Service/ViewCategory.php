<?php

namespace App\Service;


use App\Repository\CategoryRepository;

class ViewCategory
{
    /**
     * @var CategoryRepository
     */
    private $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function showCategory()
    {
//        $category = $this->categoryRepository->findAll();

        return $this->categoryRepository->childrenHierarchy();
    }
}