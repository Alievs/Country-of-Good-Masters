<?php


namespace App\Admin;


use App\Entity\Category;
use App\Entity\Product;
use App\Form\ImagesFormType;
use App\Form\ProductInfoFormType;
use Norzechowicz\AceEditorBundle\Form\Extension\AceEditor\Type\AceEditorType;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Vich\UploaderBundle\Form\Type\VichImageType;

final class ProductAdmin extends AbstractAdmin
{
    public function toString($object)
    {
        return $object instanceof Product
            ? $object->getName()
            : 'Product'; // shown in the breadcrumb on the create view
    }

    // This method configures which fields are displayed on the edit and create actions
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('Content', ['class' => 'col-md-9'])
                ->add('name', TextType::class, [
                    'label' => 'Назва продукту',
                ])
                ->add('description', AceEditorType::class, [
                    'label' => 'Опис продукту',
                ])
                ->add('unit_price', IntegerType::class, [
                    'label' => 'Ціна за одиницю',
                ])
                ->add('width', NumberType::class, [
                    'label' => 'Ширина (см)',
                ])
                ->add('height', NumberType::class, [
                    'label' => 'Висота (см)',
                ])
                ->add('depth', NumberType::class, [
                    'label' => 'Глибина (см)',
                ])
                ->add('material', TextType::class, [
                    'label' => 'Матеріал',
                ])
                ->add('country', TextType::class, [
                    'label' => 'Країна',
                ])
                ->add('brand', TextType::class, [
                    'label' => 'Бренд',
                ])
                ->add('warranty', TextType::class, [
                    'label' => 'Гарантія',
                ])
            ->end()

//            ->with('Meta data', ['class' => 'col-md-3'])
//                ->add('category', ModelType::class, [
//                    'class' => Category::class,
//                    'property' => 'name',
//                    'label' => 'Категорія',
//                ])
//            ->end()

            ->with('Додаткова Iнформація', ['class' => 'col-md-9'])
                ->add('productInfo', ProductInfoFormType::class, [
                    'label' => 'О продукте',
                ])
            ->end()

            ->with('Images', ['class' => 'col-md-9'])

                ->add('mainImage', null, [
                    'attr' => ['class' => 'hidden'],
                    'label' => 'Основне зображення',
                ])

                ->add('imageFile', VichImageType::class, [
                    'required' => false,
                    'label' => 'Файл зображення',
                ])
                ->add('images', CollectionType::class, [
                    'entry_type' => ImagesFormType::class,
                    'allow_add' => true,
                    'allow_delete'  => true,
                    'required' => false,
                    'by_reference' => false,
                    'label' => 'Додаткові зображення',
                ])
            ->end();
    }

    // This method configures the filters, used to filter and sort the list of models
    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name')
//            ->add('category', null, [], EntityType::class, [
//                'class' => Category::class,
//                'choice_label' => 'name',
//            ])
        ;
    }

    // Here you specify which fields are shown when all models are listed
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name')
            ->add('description')
            ->add('unit_price')
            ->add('imageName')
//            ->add('category.name')
        ;
    }
}