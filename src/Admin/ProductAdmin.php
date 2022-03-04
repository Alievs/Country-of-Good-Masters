<?php
namespace App\Admin;

use App\Entity\Category;
use App\Entity\Product;
use App\Form\AdminForm\AttributeValueForm;
use App\Form\ImagesFormType;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\Form\Type\BooleanType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Vich\UploaderBundle\Form\Type\VichImageType;

final class ProductAdmin extends AbstractAdmin
{
    protected $datagridValues = array(
        '_sort_order' => 'DESC',
        '_sort_by' => 'id',
    );

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
            $list['import']['template'] = 'Admin/admin_button/import/import_product.html.twig';
            $list['export']['template'] = 'Admin/admin_button/export/export_product.html.twig';
        }
        return $list;
    }

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
                    'attr' => array('min' => 0),
                    'label' => 'Ціна за одиницю',
                    'error_bubbling' => true,
                ])
                ->add('discount', IntegerType::class, [
                    'attr' => array('min' => 1, 'max'=>100),
                    'label' => 'Знижка (в %)',
                    'required' => false,
                    'help' => 'если скидки нету просто оставьте пустым'
                ])
                ->add('final_price', IntegerType::class, [
                    'attr' => ['class' => 'hidden'],
                    'label' => ' ',
                    'required' => false,
                ])
                ->add('inStock', BooleanType::class, [
                    'attr' => ['class' => 'hidden'],
                    'label' => false,
                    'transform' => true,
                    'required' => true,
                ])
                ->add('imageFile', VichImageType::class, [
                    'asset_helper' => true,
                    'required' => false,
                    'allow_delete'  => true,
                    'delete_label' => 'Удалить изображение',
                    'download_uri' => true,
                    'image_uri' => true,
                    'label' => 'Основное изображение',
                    'download_link' => true,
                    'help' => 'Обязательно!!!'
                ])
                ->add('images', CollectionType::class, [
                    'entry_type' => ImagesFormType::class,
                    'allow_add' => true,
                    'allow_delete'  => true,
                    'required' => false,
                    'by_reference' => false,
                    'label' => 'Дополнительные изображения',
                ])
            ->end()
            ->with('Категории', ['class' => 'col-md-3'])
                ->add('categories',  null, [
                    'label' => 'Назва продукту',
                    'class' => Category::class,
                    'expanded' => true,
                    'by_reference' => false,
                    'multiple' => true,
                    'choice_label' => 'title',
                    'required' => true,
                ])
            ->end()
            ->with('Характеристики', ['class' => 'col-md-3'])
                ->add('attributeValues', CollectionType::class, [
                    'entry_type' => AttributeValueForm::class,
                    'label' => 'тип - значения',
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
            ->add('id',null, [
                'label' => 'По id Продукта'
            ])
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
                'header_style' => 'width: 35%; text-align: center',
                'header_class' => 'customActions',
                'label' => 'Действия',
                'actions' => [
                    'show' => [],
                    'edit' => [],
                    'delete' => []
                ],
            ))
            ->add('id', null, [
                'header_style' => 'width: 3%; text-align: center',
                'label' => 'id Продукта',
            ])
//            ->add('inStock', null, [
//                'header_style' => 'width: 3%; text-align: center',
//                'label' => 'В наличии',
//                'editable' => true
//            ])
            ->add('mainImage_', 'image', array(
                'label' => 'Основное изображение',
                'header_style' => 'width: 10%; text-align: center',
                'prefix' => '/media/cache/cart_univers2/assets/images/products/',
                'width' => 200,
                'height' => 200,
            ))
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
                'header_style' => 'width: 40%; text-align: center',
                'row_align' => 'center',
                'label' => 'Опис продукту',
            ])
            ->add('unitPrice',null, [
                'header_style' => 'width: 1%; text-align: center',
                'label' => 'Ціна продукту'
            ])
            ->add('discount','progress_bar', [
                'header_style' => 'width: 1%; text-align: center',
                'label' => 'Знижка (в %)',
                'style' => 'info',
                'striped' => true, // Add a striped effect
                'suffix' => '%',
                'template' => 'Admin/product/productListDiscount.html.twig',
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
            ->add('mainImage', 'image',[
                'label' => 'Основное изображение',
                'template' => 'Admin/image/image.html.twig',
                'prefix' => '/media/cache/cart_univers2/assets/images/products/',
                'width' => 300,
                'height' => 300,
            ])
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
            ->add('discount','null', [
                'label' => 'Знижка (в %)'
            ])
            ->add('final_price',null, [
                'label' => 'Цена со скидкой'
            ])
            ->add('rating',null, [
                'label' => 'Рейтинг товара'
            ])
            ->add('images', CollectionType::class,[
                'label' => 'Дополнительное изображение к товару',
                'prefix' => '/media/cache/cart_univers2/assets/images/products/',
                'template' => 'Admin/image/imagesCollection.html.twig',
            ])
            ->end()

            ->with('Характеристики Продукта', array('class' => 'col-md-6', 'box_class'   => 'box box-solid box-info'))
            ->add('attributeValues', ChoiceType::class, [
                'translation_domain' => 'options',
                'label' => 'тип - значения',
                'template' => 'Admin/product/showProductTypeValue.html.twig',
            ])
            ->end()
        ;
    }
}