<?php

namespace App\Form;

use App\Entity\Order;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class PaymentFormType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Будь ласка, вкажіть эл. пошту!'
                    ])
                ]
            ])
            ->add('name', TextType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Будь ласка, введіть ім\'я!'
                    ])
                ]
            ])
            ->add('lastName', TextType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Будь ласка, введіть свій номер телефону!'
                    ])
                ]
            ])
            ->add('phoneNumber', null , [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Будь ласка, введіть свій номер телефону!'
                    ])
                ]
            ])


            ->add('delivery', ChoiceType::class, [
                'choices' => [
                    'Самовивіз з магазину' => 'Самовивіз з Магазину',
                    'Нова Пошта' => 'З Відділення Нова Пошта',
//                    'З відділення Justin' => 'З відділення Justin',
//                    'Доставка за адресою' => 'Доставка за Адресою'
                ],
                'expanded' => true,
//                'data' => 'Самовивіз з Магазину'

            ])

            ->add('pay', ChoiceType::class, [
                'choices' => [
                    'Розрахунок готівкою' => 'Розрахунок Готівкою',
//                    'Privat Pay' => 'Privat Pay'
                ],
                'expanded' => true,
//                'data' => 'Розрахунок Готівкою'

            ])
            ->add('address', null, [
                'required' => false,
            ])
            ->add('warehouse', ChoiceType::class, [
                'required' => false,
            ])

        ;

        $builder->get('warehouse')->resetViewTransformers();
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Order::class,
        ]);
    }
}
