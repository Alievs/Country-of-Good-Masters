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
                'required' => false,
            ])
            ->add('berthDepth', NumberType::class, [
                'label' => 'Довжина спального місця',
                'required' => false,
            ])
            ->add('sofaType', TextType::class, [
                'label' => 'Tип дивана',
                'required' => false,
            ])
            ->add('internalFilling', TextType::class, [
                'required' => false,
            ])
            ->add('sleepingPlaces', TextType::class, [
                'required' => false,
            ])
            ->add('frameMaterial', TextType::class, [
                'required' => false,
            ])
            ->add('color', TextType::class, [
                'required' => false,
            ])
            ->add('pillows', TextType::class, [
                'required' => false,
            ])
            ->add('weight', TextType::class, [
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ProductInfo::class,
        ]);
    }
}
