<?php

namespace App\Form\AdminForm;

use App\Entity\AttributeType;
use App\Entity\AttributeValue;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AttributeValueForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('attributeType', EntityType::class, [
                'class' => AttributeType::class,
                'by_reference' => true,
                'required' => false,
                'choice_label' => 'name',
                'label' => 'Тип Характеристики ',
                'help' => ''
            ])
            ->add('value')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => AttributeValue::class,
        ]);
    }
}