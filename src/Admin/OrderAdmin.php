<?php

namespace App\Admin;

use App\Entity\Order;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class OrderAdmin extends AbstractAdmin
{
    protected $datagridValues = array(
        '_sort_order' => 'DESC',
        '_sort_by' => 'order_date',
    );
    public function configureRoutes(RouteCollection $collection) {
        $collection
            ->remove('create')
            ->remove('export')
        ;
    }

    public function toString($object): ?string
    {
        return $object instanceof Order
            ? $object->getName()
            : 'Order'; // shown in the breadcrumb on the create view
    }

    // This method configures which fields are displayed on the edit and create actions
    protected function configureFormFields(FormMapper $form)
    {
        $form
            ->add('name')
            ->add('lastName')
            ->add('email')
            ->add('phoneNumber')
            ->add('pay')
            ->add('delivery')
            ->add('address')
            ->add('warehouse')
            ->add('totalOrderPrice')
    ;
    }

    // This method configures the filters, used to filter and sort the list of models
    protected function configureDatagridFilters(DatagridMapper $datagrid)
    {
        $datagrid
            ->add('name', null,[
                'label' => 'Імя Замовника',
            ])
            ->add('lastName', null,[
                'label' => 'Прізвище Замовника',
            ])
            ->add('email', null,[
                'label' => 'Email Замовника',
            ])
            ->add('phoneNumber', null,[
                'label' => 'Телефон Замовника',
            ])
        ;

    }

    // Here you specify which fields are shown when all models are listed
    protected function configureListFields(ListMapper $list)
    {
        $list
            ->add('_action',null,[
                'actions' => [
                    'show' => [],
                    'edit' => [],
                    'delete' => []
                ],
            ])
            ->add('order_date', null, [
                'format' => 'd-m-Y H:m:s',
                'widget' => 'single_text',
                'label' => 'Дата замовлення',

            ])
            ->add('isStatus', 'choice', [
                'label' => 'Статус замовлення',
                'editable' => true,
                'choices' => [
                    '' => 'Очікуючи підтвердження',
                    0 => 'Скасувати',
                    1 => 'Підтвердити замовлення'
                ],
            ])
            ->add('name', null,[
                'label' => 'Імя Замовника',
            ])
            ->add('lastName', null,[
                'label' => 'Прізвище Замовника',
            ])
            ->add('email', null,[
                'label' => 'Email Замовника',
            ])
            ->add('phoneNumber', null,[
                'label' => 'Телефон Замовника',
            ])
            ->add('pay', null,[
                'label' => 'Розрахунок',
            ])
            ->add('delivery', null,[
                'label' => 'Місце',
            ])
            ->add('address', null,[
                'label' => 'Адреса доставки',
            ])
            ->add('warehouse', null,[
                'label' => 'Відділення',
            ])
            ->add('totalOrderPrice', null,[
                'label' => 'Загальга ціна за замовлення',
            ])
            ;
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->with('Замовлення', array(
                'class' => 'col-md-6',
                'box_class'   => 'box box-solid box-info'
            ))
            ->add('order_date', null, [
                'format' => 'd-m-Y H:m:s',
                'widget' => 'single_text',
                'label' => 'Дата замовлення',

            ])
            ->add('isStatus', 'choice', [
                'label' => 'Статус замовлення',
                'choices' => [
                    null => 'Очікує підтвердження',
                    0 => 'Скасовано',
                    1 => 'Підтверджено'
                ],
            ])
            ->add('name', null,[
                'label' => 'Імя Замовника',
            ])
            ->add('lastName', null,[
                'label' => 'Прізвище Замовника',
            ])
            ->add('email', null,[
                'label' => 'Email Замовника',
            ])
            ->add('phoneNumber', null,[
                'label' => 'Телефон Замовника',
            ])
            ->add('pay', null,[
                'label' => 'Розрахунок',
            ])
            ->add('delivery', null,[
                'label' => 'Місце',
            ])
            ->add('address', null,[
                'label' => 'Адреса доставки',
            ])
            ->add('warehouse', null,[
                'label' => 'Відділення',
            ])
            ->add('totalOrderPrice', null,[
                'label' => 'Загальга ціна за замовлення',
            ])
            ->end()
            ->with('Список Замовлення', array('class' => 'col-md-6', 'box_class'   => 'box box-solid box-info'))
            ->add('cartOrderProduct', ChoiceType::class, [
                'translation_domain' => 'options',
                'label' => 'Замовлення Продукта',
                'template' => 'Admin/order/orderProduct.html.twig',
            ])
            ->add('total_order_price', null,[
                'label' => 'Загальга ціна за замовлення',
            ])
            ->end()
        ;
    }
}