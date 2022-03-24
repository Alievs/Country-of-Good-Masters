<?php

namespace App\Form;


use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class UserProfileFormType extends AbstractType
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
            ->add('lastName',TextType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Будь ласка, вкажіть ваше прізвище!'
                    ])
                ]
            ])
            ->add('phoneNumber', null, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Будь ласка, введіть свій номер телефону!'
                    ])
                ]
            ])
            ->add('address', ChoiceType::class, [
                'choices' => [
                    'Автономна Республіка Крим' => 'Автономна Республіка Крим',
                    'Вінницька область' => 'Вінницька область',
                    'Волинська область' => 'Волинська область',
                    'Дніпропетровська область' => 'Дніпропетровська область',
                    'Донецька область' => 'Донецька область',
                    'Житомирська область' => 'Житомирська область',
                    'Закарпатська область' => 'Закарпатська область',
                    'Запорізька область' => 'Запорізька область',
                    'Кіровоградська область' => 'Кіровоградська область',
                    'Київська область' => 'Київська область',
                    'Луганська область' => 'Луганська область',
                    'Львівська область' => 'Львівська область',
                    'м. Київ' => 'м. Київ',
                    'м. Севастополь' => 'м. Севастополь',
                    'Миколаївська область' => 'Миколаївська область',
                    'Одеська область' => 'Одеська область',
                    'Полтавська область' => 'Полтавська область',
                    'Рівненська область' => 'Рівненська область',
                    'Сумська область' => 'Сумська область',
                    'Тернопільська область' => 'Тернопільська область',
                    'Харківська область' => 'Харківська область',
                    'Херсонська область' => 'Херсонська область',
                    'Хмельницька область' => 'Хмельницька область',
                    'Черкаська область' => 'Черкаська область',
                    'Чернівецька область' => 'Чернівецька область',
                    'Чернігівська область' => 'Чернігівська область',
                    'Івано-Франківська область' => 'Івано-Франківськ область'
                ],
                'required' => true,
//                'data' => 'Івано-Франківськ'
                'placeholder' => 'Оберіть область ',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}