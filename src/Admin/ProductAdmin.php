<?php


namespace App\Admin;

use App\Entity\Category;
use App\Entity\Product;
use App\Form\AdminForm\AttributeValueForm;
use App\Form\AdminForm\AttributeValueForm1;
use App\Form\AdminForm\TestForm;
use App\Form\ImagesFormType;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\Form\Type\BooleanType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Vich\UploaderBundle\Form\Type\VichImageType;

final class ProductAdmin extends AbstractAdmin
{
    public function toString($object): ?string
    {
        return $object instanceof Product
            ? $object->getName()
            : 'Product'; // shown in the breadcrumb on the create view
    }

    // This method configures which fields are displayed on the edit and create actions
    protected function configureFormFields(FormMapper $form)
    {
        $form
            ->with('Додати продукт', ['class' => 'col-md-5'])
                ->add('name', null, [
                    'label' => 'Назва продукту',
                ])
                ->add('description', TextAreaType::class, [
                    'label' => 'Опис продукту',
                    'attr' => ['rows' => 10],
                ])
            ->add('unit_price', IntegerType::class, [
                    'label' => 'Ціна за одиницю',
            ])
            ->add('discount', IntegerType::class, [
                'label' => 'Скидка',
                'required' => false,
            ])
            ->add('final_price', IntegerType::class, [
////                'attr' => ['class' => 'hidden'],
//                'empty_data' => 1
            ])
            ->add('inStock', BooleanType::class, [
                'transform' => true,
                'attr' => ['class' => 'hidden'],
            ])
//                ->add('width', NumberType::class, [
//                    'label' => 'Ширина (см)',
//                ])
//                ->add('height', NumberType::class, [
//                    'label' => 'Висота (см)',
//                ])
//                ->add('depth', NumberType::class, [
//                    'label' => 'Глибина (см)',
//                ])
//                ->add('material', TextType::class, [
//                    'label' => 'Матеріал',
//                ])
//                ->add('country', TextType::class, [
//                    'label' => 'Країна',
//                ])
//                ->add('brand', TextType::class, [
//                    'label' => 'Бренд',
//                ])
//                ->add('warranty', TextType::class, [
//                    'label' => 'Гарантія',
//                ])
            ->end()

//            ->with('Meta data', ['class' => 'col-md-3'])
//                ->add('category', ModelType::class, [
//                    'class' => Category::class,
//                    'property' => 'name',
//                    'label' => 'Категорія',
//                ])
//            ->end()

//            ->with('Додаткова Iнформація', ['class' => 'col-md-9'])
//                ->add('productInfo', ProductInfoFormType::class, [
//                    'label' => 'О продукте',
//                ])
//            ->end()
            ->with('Категории', ['class' => 'col-md-3'])
            ->add('categories',  null, [
                'class' => Category::class,
                'expanded' => true,
                'by_reference' => false,
                'multiple' => true,
                'choice_label' => 'title',
                'required' => true,
            ])
            ->end()

            ->with('Зображення', ['class' => 'col-md-5'])

//                ->add('mainImage', null, [
//                    'attr' => ['class' => 'hidden'],
//                    'label' => 'Основне зображення',
//                ])

            ->add('imageFile', VichImageType::class, [
                'required' => true,
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

            ->end()

            ->with('Характеристики', ['class' => 'col-md-3'])
            ->add('attributeValues', CollectionType::class, [
                'entry_type' => AttributeValueForm::class,
                'label' => 'Характеристики Продукта',
                'by_reference' => false,
                'allow_add' => true,
                'allow_delete' => true,
                'required' => true,
            ])
            ->end()
        ;
    }

    // This method configures the filters, used to filter and sort the list of models
    protected function configureDatagridFilters(DatagridMapper $datagrid)
    {
        $datagrid
            ->add('name',null, [
                'label' => 'По имени'
            ])
            ->add('categories', null, [
                'label' => 'По категория'
            ], EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'title',
            ])
        ;
    }

    // Here you specify which fields are shown when all models are listed
    protected function configureListFields(ListMapper $list)
    {
        $list
            ->add('_action',null, array(
                'header_style' => 'width: 23%; text-align: center',
                'header_class' => 'customActions',
                'label' => 'Действия',
                'actions' => [
                    'show' => [],
                    'edit' => [],
                    'delete' => []
                ],
            ))
            ->add('inStock', null, [
                'header_style' => 'width: 3%; text-align: center',
                'label' => 'В наличии',
                'editable' => true
            ])
            ->add('imageFile', TextType::class,[
//                'uri_prefix' => '/images/products',
                'header_style' => 'width: 3%; text-align: center',
                'row_align' => 'center',
                'label' => 'Файл зображення',
                'template' => 'SonataMediaBundle:MediaAdmin:list_image.html.twig'
            ])
            ->addIdentifier('categories',  CollectionType::class, [
                'header_style' => 'width: 5%; text-align: center',
                'row_align' => 'center',
                'sortable' => false,
                'label' => 'Название категории продукта',
                'associated_property' => 'title',
            ])
            ->addIdentifier('name' , null, [
                'sortable' => false,
                'header_style' => 'width: 10%; text-align: center',
                'row_align' => 'center',
                'label' => 'Назва продукту',
            ])
            ->add('_description_', TextType::class,[
                'header_style' => 'width: 35%; text-align: center',
                'row_align' => 'center',
                'label' => 'Опис продукту',
            ])
            ->add('unitPrice',null, [
                'header_style' => 'width: 1%; text-align: center',
                'label' => 'Ціна продукту'
            ])
            ->add('discount',null, [
                'header_style' => 'width: 1%; text-align: center',
                'label' => 'Знижка (в %)'
            ])
            ->add('final_price',null, [
                'header_style' => 'width: 1%; text-align: center',
                'label' => 'Цена со скидкой'
            ])
            ->add('rating',null, [
                'header_style' => 'width: 1%; text-align: center',
                'label' => 'Рейтинг товара'
            ])
            ;
    }
    protected function configureShowFields(ShowMapper $show): void
    {
        $show

            ->with('Продукция', array(
                'class' => 'col-md-6',
                'box_class'   => 'box box-solid box-info'
            ))
            ->add('inStock', null, [
                'header_style' => 'width: 3%; text-align: center',
                'label' => 'В наличии',
                'editable' => true
            ])
            ->add('categories',  CollectionType::class, [
                'label' => 'Название категории продукта',
                'associated_property' => 'title',
            ])
            ->add('name',null, [
                'label' => 'Назва продукту'
            ])
            ->add('description', null, [
                'label' => 'Опис продукту',
            ])
            ->add('unitPrice',null, [
                'label' => 'Ціна продукту'
            ])
            ->add('discount',null, [
                'label' => 'Знижка (в %)'
            ])
            ->add('final_price',null, [
                'label' => 'Цена со скидкой'
            ])
            ->add('rating',null, [
                'label' => 'Рейтинг товара'
            ])
            ->end()
            ->with('Характеристики Продукта', array('class' => 'col-md-6', 'box_class'   => 'box box-solid box-info'))
//            ->add('attributeValues', CollectionType::class, [
//                'associated_property' => 'value'
//            ])
//            ->add('attributeValues', null, [
////                'entry_type' => AttributeValueForm::class,
//                'template' => 'Admin/comments/show_comment.html.twig',
//                'label' => 'Характеристики Продукта',
//            ])
            ->add('attributeValues', null, [
                'label' => 'Характеристики Продукта',
                'template' => 'Admin/comments/show_comment.html.twig',
            ])
            ->end()
        ;
    }
}