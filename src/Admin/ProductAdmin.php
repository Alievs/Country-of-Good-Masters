<?php


namespace App\Admin;


use App\Entity\Category;
use App\Entity\Product;
use Norzechowicz\AceEditorBundle\Form\Extension\AceEditor\Type\AceEditorType;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
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
            ->add('name', TextType::class)
            ->add('description', AceEditorType::class, [
                'wrapper_attr' => array(), // aceeditor wrapper html attributes.
                'width' => '100%',
                'height' => 250,
                'font_size' => 12,
                'mode' => 'ace/mode/html', // every single default mode must have ace/mode/* prefix
                'theme' => 'ace/theme/monokai', // every single default theme must have ace/theme/* prefix
                'tab_size' => null,
                'read_only' => null,
                'use_soft_tabs' => null,
                'use_wrap_mode' => null,
                'show_print_margin' => null,
                'show_invisibles' => null,
                'highlight_active_line' => null,
                'options_enable_basic_autocompletion' => true,
                'options_enable_live_autocompletion' => true,
                'options_enable_snippets' => false,
                'keyboard_handler' => null
            ])
            ->add('unit_price', IntegerType::class)
            ->end()
            ->with('Meta data', ['class' => 'col-md-3'])
            ->add('category', ModelType::class, [
                'class' => Category::class,
                'property' => 'name',
            ])
            ->end()
            ->with('Images', ['class' => 'col-md-9'])
            ->add('imageName', TextType::class)
            ->add('imageFile', VichImageType::class)
            ->end();
    }

    // This method configures the filters, used to filter and sort the list of models
    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name')
            ->add('category', null, [], EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
            ]);
    }

    // Here you specify which fields are shown when all models are listed
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name')
            ->add('description')
            ->add('unit_price')
            ->add('imageName')
            ->add('category.name');
    }
}