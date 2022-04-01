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
            ->add('sentAt', null, [
                'format' => 'd-m-Y H:m:s',
                'widget' => 'single_text',
                'label' => 'Дата замовлення',

            ])
            ->add('status', 'choice', [
                'header_style' => 'width: 8%; text-align: center',
                'label' => 'Статус',
                'editable' => true,
                'choices' => [
                    'Оброблений' => 'Оброблений',
                    'Необроблений ' => 'Необроблений',
                ],
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
        ;
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('sentAt', null, [
                'format' => 'd-m-Y H:m:s',
                'widget' => 'single_text',
                'label' => 'Дата замовлення',

            ])
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
        ;
    }

}