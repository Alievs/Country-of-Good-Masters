<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Show\ShowMapper;

final class CommentsAdmin extends AbstractAdmin
{
    protected $datagridValues = array(
        '_sort_order' => 'ASC',
        '_sort_by' => 'isPublished',
    );

    public function configureRoutes(RouteCollection $collection)
    {
        $collection
            ->remove('create')
            ->remove('edit')
        ;
    }

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
                'header_style' => 'width: 14%; text-align: center',
                'header_class' => 'customActions',
                'label' => 'Действия',
            ))
            ->add('isPublished', null, array(
                'label' => 'Опобликованый',
                'editable' => true
            ))
            ->add('nickname')
            ->add('user_email')
            ->add('body')
            ->add('dignity')
            ->add('shortcomings')
            ->add('rating')
        ;
    }
    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->with('Комментарии', array(
                'class' => 'col-xs-6 col-xs-offset-3',
                'box_class'   => 'box box-solid box-info'
            ))
            ->add('isPublished', null, array(
                'label' => 'Опобликованый',
                'editable' => true
            ))
            ->add('nickname')
            ->add('user_email')
            ->add('body')
            ->add('dignity')
            ->add('shortcomings')
            ->add('rating')
            ->end()
        ;
    }
}