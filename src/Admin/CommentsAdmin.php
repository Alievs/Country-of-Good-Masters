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
            ->remove('export')
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
            ->add('nickname',null, array(
                'label' => 'Имя',
            ))
            ->add('user_email',null, array(
                'label' => 'Email пользователя',
            ))
            ->add('body',null, array(
                'label' => 'Текст комментария',
                'sortable' => false,
            ))
            ->add('dignity',null, array(
                'label' => 'Текст достоинство продукта',
                'sortable' => false,
            ))
            ->add('shortcomings',null, array(
                'label' => 'Текст недостатки продукта',
                'sortable' => false,
            ))
            ->add('rating',null, array(
                'label' => 'Оценка продукта',
            ))
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
            ))
            ->add('nickname',null, array(
            ))
            ->add('user_email',null, array(
                'label' => 'Email пользователя',
            ))
            ->add('body',null, array(
                'label' => 'Текст комментария',
            ))
            ->add('dignity',null, array(
                'label' => 'Текст достоинство продукта',
            ))
            ->add('shortcomings',null, array(
                'label' => 'Текст недостатки продукта',
            ))
            ->add('rating',null, array(
                'label' => 'Оценка продукта',
            ))
            ->end()
        ;
    }
}