<?php
namespace App\Admin;

use App\Entity\Category;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Vich\UploaderBundle\Form\Type\VichImageType;

final class CategoryAdmin extends AbstractAdmin
{
    public function configureRoutes(RouteCollection $collection)
    {
        $collection
            ->remove('export')
        ;
    }
    public function configureActionButtons($action, $object = null): array
    {
        $list = parent::configureActionButtons($action, $object);
        if ($action === 'list') {
            $list['export']['template'] = 'Admin/export/category_button/export_button.html.twig';
        }
        return $list;
    }

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
            ->with('Категория', ['class' => 'col-md-4'])
                ->add('title', TextType::class, [
                    'required' => true,
                'label' => 'Название категории',
                 ])
                ->add('parent', EntityType::class, [
                    'class' => Category::class,
                    'required' => false,
                    'choice_label' => 'title',
//                    'label' => 'parent',
                    'label' => 'Под категория',
                    'help' => ''

                ])
            ->end()

            ->with('Изображения', ['class' => 'col-md-6'])

                ->add('imageFile', VichImageType::class, [
                    'asset_helper' => true,
                    'required' => false,
                    'allow_delete'  => true,
                    'download_uri' => true,
                    'image_uri' => true,
                    'delete_label' => 'Удалить изображение',
                    'label' => 'Файл изображения',
                    'help' => 'Основное изображение для 2 и 3 категории ',
                    'download_link' => true
                ])
            ->end()
        ;
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
                'header_style' => 'width: 20%; text-align: center',
                'header_class' => 'customActions',
                'label' => 'Действия',
                'actions' => [
                    'show' => [],
                    'edit' => [],
                    'delete' => []
                ]
            ))
            ->add('categoryImage', 'image', array(
                'label' => 'Основное изображение категории',
                'prefix' => '/media/cache/cart_univers2/assets/images/products/',
                'width' => 300,
                'height' => 300,
            ))
            ->addIdentifier('title','label',[
                'style' => 'info',
                'label' => 'Название категории',
            ])
        ;
    }
    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->with('Категории', array(
                'class' => 'col-xs-6 col-xs-offset-3',
                'box_class'   => 'box box-solid box-info'
            ))
            ->add('categoryImage', 'image',[
                'label' => 'Основное изображение категории',
                'template' => 'Admin/image/image.html.twig',
                'prefix' => '/media/cache/cart_univers2/assets/images/products/',
                'width' => 300,
                'height' => 300,
            ])
            ->add('title',TextType::class,[
                'label' => 'Название категории',
            ])
            ->end()
        ;
    }
}