<?php

namespace App\EventListener;


use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class FiltersFieldSubscriber implements EventSubscriberInterface
{


    public function preSetData(FormEvent $event)
    {
        $form = $event->getForm();
        $options = $event->getForm()->getConfig()->getOptions()['myOptions'];

        $form
            ->add('min', NumberType::class, [
                'label' => false,
                'required' => false,
                'attr' => [
                    'placeholder' => 'Min',
                    ]
            ])
            ->add('max', NumberType::class, [
                'label' => false,
                'required' => false,
                'attr' => [
                    'placeholder' => 'Max',
                ]
            ])
        ;
        if (!empty($options)) {
            foreach ($options as $key => $values){
                $choices = [];

                foreach ($values as $parameter){
                    $choices[$parameter] = $parameter;
                }
                asort($choices);

                $form->add($key, ChoiceType::class, [
                    'label' => $key,
                    'translation_domain' => 'options',
                    'required' => false,
                    'expanded' => true,
                    'multiple' => true,
                    'choices' => $choices,
                ]);
            }
        }

        $form
            ->add('sort', HiddenType::class, [
                'label' => false,
                'required' => false,
            ])
            ->add('limit', HiddenType::class, [
                'label' => false,
                'required' => false,
            ])
        ;

        if (empty($options)) {
            $form
                ->add('search', HiddenType::class, [
                'label' => false,
                'required' => false,
            ])
            ;
        }


    }

    /**
     * @return array The event names to listen to
     */
    public static function getSubscribedEvents()
    {
        return [FormEvents::PRE_SET_DATA => 'preSetData'];
    }
}