<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Show\ShowMapper;

class OneClickOrderAdmin extends AbstractAdmin
{
    public function configureRoutes(RouteCollection $collection) {
        $collection
            ->remove('create')
            ->remove('export')
        ;
    }

    protected function configureFormFields(FormMapper $form)
    {
        $form
            ->add('phone_number',null,[
                'label' => 'Номер Телефона',
            ])
            ->add('status',null,[
                'label' => 'Статус замовлення',
            ])
            ->add('idProduct',null,[
                'label' => 'id Продукта',
            ])
            ->add('priceProduct',null,[
                'label' => 'Цена',
            ])
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
                    'show' => [],
                    'edit' => [],
                    'delete' => []
                ],
            ))
            ->add('status',null,[
                'label' => 'Статус замовлення',
            ])
            ->add('phone_number',null,[
                'label' => 'Номер Телефона',
            ])
            ->add('idProduct',null,[
                'label' => 'id Продукта',
            ])
            ->add('priceProduct',null,[
                'label' => 'Цена',
            ])
            ->add('sentAt',null,[
                'label' => 'Дата замовлення',
            ])
        ;
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('status',null,[
                'label' => 'Статус замовлення',
            ])
            ->add('phone_number',null,[
                'label' => 'Номер Телефона',
            ])
            ->add('idProduct',null,[
                'label' => 'id Продукта',
            ])
            ->add('priceProduct',null,[
                'label' => 'Цена',
            ])
            ->add('sentAt',null,[
                'label' => 'Дата замовлення',
            ])
        ;
    }

}