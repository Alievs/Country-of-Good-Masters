<?php

namespace App\Service\Admin;
use App\Entity\AttributeType;
use App\Entity\AttributeValue;
use App\Entity\Category;
use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;

class Import extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct( EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @throws Exception
     */
    public function importCategory(): RedirectResponse
    {
        $upload_file = $_FILES['upload_file']['name'];
        $extension = pathinfo($upload_file, PATHINFO_EXTENSION);
        if ($extension == 'xlsx' && $upload_file === 'Category.xlsx')
        {
            $read = new Xlsx();
        }else{
            $this->addFlash('error', 'Неправильный формат файла! Оберить файла Category.xlsx!');
            return $this->redirect('/admin/app/category/list');
        }
        $spreadsheet = $read->load($_FILES['upload_file']['tmp_name']);
        $spreadsheet->getActiveSheet()->removeRow(1); // I added this to be able to remove the first file line
        $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true); // here, the read data is turned into an array
        $this->entityManager = $this->getDoctrine()->getManager();
        foreach ($sheetData as $Row)
        {
            $title = $Row['A'];
            $parent = $Row['B'];
            $image = $Row['C'];
            $categoriesExistent = $this->entityManager->getRepository(Category::class)->findOneBy(['title' => $title]);
            $parents = $this->entityManager->getRepository(Category::class)->findOneBy(['title' => $parent]);
            if (!$categoriesExistent)
            {
                $category = new Category();
                $category->setTitle($title);
                $category->setParent($parents);
                $category->setCategoryImage($image);
                $this->entityManager->persist($category);
                $this->entityManager->flush();
            }
        }
        $this->addFlash('success', 'Файл успешно загружен!');
        return $this->redirect('/admin/app/category/list');
    }

    public function importProduct(): RedirectResponse
    {
        $upload_file = $_FILES['upload_file']['name'];
        $extension = pathinfo($upload_file, PATHINFO_EXTENSION);
        if ($extension == 'xlsx' && $upload_file === 'Product.xlsx')
        {
            $read = new Xlsx();
        } else {
            $this->addFlash('error', 'Неправильный формат файла! Оберить файла Product.xlsx!');
            return $this->redirect('/admin/app/product/list');
        }
        $spreadsheet = $read->load($_FILES['upload_file']['tmp_name']);
        $spreadsheet->getActiveSheet()->removeRow(1); // I added this to be able to remove the first file line
        $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true); // here, the read data is turned into an array
        $this->entityManager = $this->getDoctrine()->getManager();

        foreach ($sheetData as $Row) {
            $name = $Row['A'];
            $image = $Row['B'];
            $price = $Row['C'];
            $discount = $Row['D'];
            $description = $Row['E'];
            $category = $Row['F'];
            $attributeTypes = $Row['G'];
            $attributeValues = $Row['H'];

            $productExistent = $this->entityManager->getRepository(Product::class)->findOneBy(['name' => $name]);
            $categories = $this->entityManager->getRepository(Category::class)->findBy(['title' => explode(PHP_EOL, $category)]);
            $attributeType = $this->entityManager->getRepository(AttributeType::class)->findBy(['name' => explode(PHP_EOL, $attributeTypes)]);
            if (!$productExistent) {
                $arrayAttValue = explode(PHP_EOL, $attributeValues);
                $arrayAttType = explode(PHP_EOL, $attributeTypes);

                $product = new Product();
                $product->setUpdatedAt(new \DateTime());
                $product->setInStock(1);
                $product->setName($name);
                $product->setMainImage($image);
                $product->setUnitPrice($price);
                $product->setDiscount($discount);
                $product->setDescription($description);
                foreach ($categories as $cat) {
                    $product->addCategory($cat);
                }
                if ($attributeTypes !== null && $attributeValues !== null)
                {
                    for ($i = 0; $i < count($attributeType); $i++)
                    {
                        if (isset($arrayAttValue[$i]) === true) {
                            $attValue = new AttributeValue();
                            $attType = $this->entityManager->getRepository(AttributeType::class)->findOneBy(['name' => $arrayAttType[$i]]);
                            $attValue->setAttributeType($attType);
                            $attValue->setValue($arrayAttValue[$i]);
                            $attValue->setProduct($product);
                            $product->addAttributeValue($attValue);
                        }
                    }
                }
                $this->entityManager->persist($product);
                $this->entityManager->flush();
            }
        }
        $this->addFlash('success', 'Файл успешно загружен!');
        return $this->redirect('/admin/app/product/list');
    }
}