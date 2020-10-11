<?php

namespace App\EventListener;


use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class FiltersFieldSubscriber implements EventSubscriberInterface
{


    public function preSetData(FormEvent $event)
    {
        $form = $event->getForm();
        $options = $event->getForm()->getConfig()->getOptions()['myOptions'];

        foreach ($options as $key => $values){
            $choices = [];

            foreach ($values as $parameter){
                $choices[$parameter] = $parameter;
            }

            $form->add($key, ChoiceType::class, [
                'label' => $key,
                'translation_domain' => 'options',
                'required' => false,
                'expanded' => true,
                'multiple' => true,
                'choices' => $choices,

            ]);

        }

        $form
            ->add('min', NumberType::class, [
                'label' => false,
                'required' => false,
                'attr' => [
                    'placeholder' => 'min'
                ]
            ])
            ->add('max', NumberType::class, [
                'label' => false,
                'required' => false,
                'attr' => [
                    'placeholder' => 'max'
                ]
            ])
        ;

    }

    /**
     * @return array The event names to listen to
     */
    public static function getSubscribedEvents()
    {
        return [FormEvents::PRE_SET_DATA => 'preSetData'];
    }
}