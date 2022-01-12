<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;

class CommentsAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $form)
    {
        $form
            ->add('body')
            ->add('dignity')
            ->add('shortcomings')
            ->add('product')
            ->add('published_date')
            ->add('nickname')
            ->add('user_email')
        ;
    }

    protected function configureListFields(ListMapper $list)
    {
        $list
            ->add('_action',null, array(
                'actions' => [
                    'show' => [],
                    'delete' => []
                ],
            ))
            ->add('nickname')
            ->add('user_email')
            ->add('body')
            ->add('dignity')
            ->add('shortcomings')
            ->add('rating')
            ->add('published_date',null,[
                'order_by'=>'DESC'
            ])
        ;
    }
}