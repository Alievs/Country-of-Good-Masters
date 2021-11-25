<?php

namespace App\Form;

use App\Entity\OneClickOrder;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Regex;

class OneClickOrderType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('phone_number', TelType::class)
            ->add('idProduct', HiddenType::class, [
                'required' => false
            ])
            ->add('stock', HiddenType::class, [
                'required' => false
            ])
            ->add('priceProduct', HiddenType::class, [
                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => OneClickOrder::class,
            'csrf_protection' => false
        ]);
    }
}
