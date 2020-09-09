<?php

namespace App\Form;


use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class UserRegistrationFormType extends AbstractType
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
            ->add('agreeTerms', CheckboxType::class,
                [
                    'mapped' => false,
                    'constraints' => [
                        new IsTrue([
                            'message' => 'У нас тут бунтар :)'
                        ])
                    ]
                ]
            )
            ->add('plainPassword', RepeatedType::class,
                [
                    'invalid_message' => 'Неправильне підтвердження паролю',
                    'mapped' => false,
                    'type' => PasswordType::class,
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Будь ласка, введіть пароль!'
                        ]),
                        new Length([
                            'min' => 6,
                            'minMessage' => 'Занадто короткий пароль! Спробуйте ще раз'
                        ])
                    ],
                    'first_options' => array('label' => 'Password'),
                    'second_options' => array('label' => 'Repeat Password'),
                ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}