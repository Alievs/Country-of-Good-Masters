<?php

namespace App\Form;

use App\Entity\Comments;

use App\Form\FilterForm\ProductToCommentsTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CommentFormType extends AbstractType
{
    private $transformer;

    public function __construct(ProductToCommentsTransformer $transformer)
    {
        $this->transformer = $transformer;
    }
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('rating', HiddenType::class, [
                'required' => false
            ])
            ->add('dignity', TextType::class, [
                'label' => 'Переваги',
                'required' => false,
            ])
            ->add('shortcomings', TextType::class, [
                'label' => 'Недоліки',
                'required' => false,
            ])
            ->add('body', TextareaType::class, [
                'label' => 'Коментар',
                'required' => true,
            ])
            ->add('nickname', TextType::class, [
                'label' => 'Ваше ім\'я',
                'required' => true,
            ])
            ->add('user_email', EmailType::class, [
                'label' => 'Ваш email',
                'required' => true,
            ])
            ->add('product', HiddenType::class, [
                'required' => true,
            ])
        ;
        $builder->get('product')
            ->addModelTransformer($this->transformer);

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Comments::class,
        ]);
    }

}