<?php

namespace App\Form;

use App\Entity\ProductInfo;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductInfoFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('berthWidth', NumberType::class, [
                'label' => 'Ширина спального місця',
            ])
            ->add('berthDepth', NumberType::class, [
                'label' => 'Довжина спального місця',
            ])
            ->add('sofaType', TextType::class, [
                'label' => 'Tип дивана'
            ])
            ->add('internalFilling', TextType::class)
            ->add('sleepingPlaces', TextType::class)
            ->add('frameMaterial', TextType::class)
            ->add('color', TextType::class)
            ->add('pillows', TextType::class)
            ->add('weight', TextType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ProductInfo::class,
        ]);
    }
}
