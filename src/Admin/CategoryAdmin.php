<?php

namespace App\Admin;

use App\Entity\Category;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\MediaBundle\SonataMediaBundle;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
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
            ->with('Додати продукт', ['class' => 'col-md-6'])

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

            ->with('Images', ['class' => 'col-md-3'])

            ->add('imageFile', VichImageType::class, [
                'asset_helper' => true,
                'required' => false,
                'allow_delete'  => true,
                'delete_label' => 'Удалить изображение',
                'label' => 'Файл зображення',
                'help' => 'Основне зображення для 2 и 3 категории',
                'download_link' => false
            ])

            ->end();
    }

    // This method configures the filters, used to filter and sort the list of models
    protected function configureDatagridFilters(DatagridMapper $datagrid)
    {
        $datagrid
            ->add('title');
    }

    // Here you specify which fields are shown when all models are listed
    protected function configureListFields(ListMapper $list)
    {
        $list
            ->add('_action',null, array(
                'actions' => [
                    'show' => [],
                    'edit' => [],
                    'delete' => []
                    ]
            ))
            ->add('imageFile', TextType::class,[
//                'uri_prefix' => '/images/products',
                'label' => 'Файл зображення',
//                'template' => 'SonataMediaBundle:MediaAdmin:list_image.html.twig'
            ])
            ->addIdentifier('title',null,[
                'label' => 'Назва категории',
            ])
            ;
    }
    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add('title',TextType::class,[])
            ->add('categoryImage', VichImageType::class,[
            'label' => 'Файл зображення',
//            'template' => 'SonataMediaBundle:MediaAdmin:list_image.html.twig'
        ])
        ;
    }

//    protected function configureDashboardActions(array $actions): array
//    {
//        $actions['import'] = [
//            'label'              => 'Import',
//            'url'                => $this->generateUrl('import'),
//            'icon'               => 'import',
//            'translation_domain' => 'SonataAdminBundle', // optional
//            'template'           => '@SonataAdmin/CRUD/dashboard__action.html.twig', // optional
//        ];
//
//        return $actions;
//    }
}