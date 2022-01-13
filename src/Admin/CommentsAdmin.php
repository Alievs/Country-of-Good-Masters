<?php

namespace App\Admin;

use App\Entity\Comments;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\Filter\ChoiceType;

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
                'header_style' => 'width: 14%; text-align: center',
                'header_class' => 'customActions',
                'label' => 'Действия',
            ))
            ->add('isPublished', null, array(
                'label' => 'label.is_valid',
                'editable' => true
            ),
                'sonata_type_translatable_choice', array(
                    'translation_domain' => "SonataAdminBundle",
                    'choices' => array(
                        1 => 'label_type_eee', // or 'True'
                        2 => 'label_type_no' // or 'False'
                    ))
            )
            ->add('nickname')
            ->add('user_email')
            ->add('body')
            ->add('dignity')
            ->add('shortcomings')
            ->add('rating')
            ->add('published_date')
        ;
    }
}