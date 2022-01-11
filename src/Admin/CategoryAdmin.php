<?php

namespace App\Admin;



use App\Entity\Category;
use App\Form\ImagesFormType;
use Liip\ImagineBundle\Form\Type\ImageType;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelAutocompleteType;
use Sonata\AdminBundle\Form\Type\ModelHiddenType;
use Sonata\AdminBundle\Form\Type\ModelListType;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Vich\UploaderBundle\Form\Type\VichImageType;

final class CategoryAdmin extends AbstractAdmin
{

    public function toString($object): string
    {
        return $object instanceof Category
            ? $object->getTitle()
            : 'Category'; // shown in the breadcrumb on the create view
    }

    // This method configures which fields are displayed on the edit and create actions
    protected function configureFormFields(FormMapper $form)
    {
        $form
            ->with('Додати продукт', ['class' => 'col-md-9'])
            ->add('title', TextType::class, [
                'required' => true,
            'label' => 'Назва категории',
             ])
            ->add('parent', EntityType::class, [
                'class' => Category::class,
                'required' => false,
                'choice_label' => 'title',
                'label' => 'Подкатегория',
                'help' => ''

            ])
            ->add('root', EntityType::class, [
                'class' => Category::class,
                'required' => false,
                'choice_label' => 'title',
                'label' => 'Главная категория',
                'help' => ''
            ])
            ->end()
            ->with('Images', ['class' => 'col-md-9'])
//            ->add('categoryImage', null, [
//                'attr' => ['class' => 'hidden'],
//                'label' => 'Основне зображення',
//            ])

            ->add('imageFile', VichImageType::class, [
                'required' => false,
                'label' => 'Файл зображення',
                'help' => 'Основне зображення для 2 и 3 категории',
            ])
            ->end();
    }

    // This method configures the filters, used to filter and sort the list of models
    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('title');
    }

    // Here you specify which fields are shown when all models are listed
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('title',null,[
                'label' => 'Назва категории',
            ])
                ->add('category_image', VichImageType::class,[
                    'label' => 'Файл зображення',
                ]);
    }
    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('title')
            ->add('imageFile');
        ;
    }
}