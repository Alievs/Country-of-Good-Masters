<?php

namespace App\Admin;



use App\Entity\Category;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

final class CategoryAdmin extends AbstractAdmin
{
    public function toString($object)
    {
        return $object instanceof Category
            ? $object->getName()
            : 'Product'; // shown in the breadcrumb on the create view
    }

    // This method configures which fields are displayed on the edit and create actions
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper->add('name', TextType::class);
    }

    // This method configures the filters, used to filter and sort the list of models
    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('name');
    }

    // Here you specify which fields are shown when all models are listed
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name');
    }
}