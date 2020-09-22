<?php

namespace App\Form\FilterForm;


use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FilterFormType
{
//    public function buildForm(FormBuilderInterface $builder, array $options)
//    {
//        $builder
//            ->add('search', TextType::class, [
//                'label' => false,
//                'required' => false,
//                'attr' => [
//                    'placeholder' => 'Поиск',
//                    'class' => 'search',
//                    'autocomplete' => 'off',
//                    'onblur' => 'window.searchBlur()',
//                ]
//            ])
//        ;
//    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
//            'data_class' => Product::class,
            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }

}