<?php

namespace App\Service;


use Symfony\Component\Form\FormFactory;
use App\Form\SearchForm\SearchFormType;

class ProductSearch
{
    private $formFactory;


    public function __construct(FormFactory $formFactory) {
        $this->formFactory = $formFactory;
    }

    public function productNameSearch() {
        $form = $this->formFactory->createBuilder('App\Form\SearchForm\SearchFormType');

        return $form->getForm()->createView();
    }

}