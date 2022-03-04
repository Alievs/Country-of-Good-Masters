<?php

namespace App\Admin;

use App\Entity\Order;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class OrderAdmin extends AbstractAdmin
{
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
            ->add('name')
            ->add('lastName')
        ;

    }

    // Here you specify which fields are shown when all models are listed
    protected function configureListFields(ListMapper $list)
    {
        $list
            ->add('_action',null, array(
                'actions' => [
                    'show' => [],
                    'edit' => [],
                    'delete' => []
                ],
            ))
            ->addIdentifier('name')
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

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('name')
            ->add('lastName')
            ->add('email')
            ->add('phoneNumber')
            ->add('cart')
            ->add('pay')
            ->add('delivery')
            ->add('address')
            ->add('warehouse')
            ->add('totalOrderPrice')
        ;
    }
}