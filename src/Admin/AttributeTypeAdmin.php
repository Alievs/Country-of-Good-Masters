<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;

final class AttributeTypeAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $form)
    {
        $form
            ->with('Тип Характеристики', ['class' => 'col-md-6'])
                ->add('name',null, [
                'required' => true,
                'label' => 'Название Характеристики'
                ])
            ->end()
        ;
    }
    protected function configureListFields(ListMapper $list)
    {
        $list
            ->add('_action',null, array(
                'header_style' => 'width: 20%; text-align: center',
                'header_class' => 'customActions',
                'label' => 'Действия',
                'actions' => [
                    'edit' => [],
                    'delete' => []
                ],
            ))
            ->add('name',null,[
                'label' => 'Название Характеристики ',
            ])
        ;
    }
}