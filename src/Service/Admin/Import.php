<?php

namespace App\Service\Admin;
use App\Entity\AttributeType;
use App\Entity\AttributeValue;
use App\Entity\Category;
use App\Entity\Images;
use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Reader\Xls;
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
        $uploadsDirCategory = '../assets/images/products/';
        if (isset($_FILES['upload_file']))
        {
            $arrayFilesCategory = $_FILES['upload_file']['name'];
            $cArrayFilesCategory = count($arrayFilesCategory);
            for ($c = 0; $c < $cArrayFilesCategory; $c++) {
                $extensionC = pathinfo($arrayFilesCategory[$c], PATHINFO_EXTENSION);
                if (isset($arrayFilesCategory[$c]) === true) {
                    if ($extensionC === 'jpg' || $extensionC === 'png') {
                        move_uploaded_file($_FILES["upload_file"]["tmp_name"][$c], $uploadsDirCategory.$_FILES["upload_file"]["name"][$c]);
                    } elseif ($extensionC === 'xlsx' || $extensionC === 'xls') {
                        $fileNameC = $_FILES['upload_file']['name'][$c];
                        $fileTmpC = $_FILES['upload_file']['tmp_name'][$c];
                    }else{
                        $this->addFlash('error', 'Нет файла! Оберить файла xlsx aбо xls!');
                        return $this->redirect('/admin/app/category/list');
                    }
                }
            }
        }else{
            $this->addFlash('error', 'Файл не найден!');
            return $this->redirect('/admin/app/category/list');
        }
        if (isset($fileNameC) && $fileNameC == 0) {
            $extension = pathinfo($fileNameC, PATHINFO_EXTENSION);
            if ($extension == 'xlsx') {
                $read = new Xlsx();
            } else if ($extension === 'xls') {
                $read = new Xls();
            } else {
                $this->addFlash('error', 'Неправильный формат файла! Оберить файла Category.xlsx!');
                return $this->redirect('/admin/app/category/list');
            }
            $spreadsheet = $read->load($fileTmpC);
            $spreadsheet->getActiveSheet()->removeRow(1); // I added this to be able to remove the first file line
            $sheetData = $spreadsheet->getActiveSheet()->toArray(); // here, the read data is turned into an array
            $this->entityManager = $this->getDoctrine()->getManager();
            $countData = count($sheetData);
            if ($countData > 1) {
                foreach ($sheetData as $Row) {
                    $title = $Row[0];
                    $parent = $Row[1];
                    $image = $Row[2];
                    $categoriesExistent = $this->entityManager->getRepository(Category::class)->findOneBy(['title' => $title]);
                    $parents = $this->entityManager->getRepository(Category::class)->findOneBy(['title' => $parent]);
                    if (!$categoriesExistent) {
                        $category = new Category();
                        $category->setTitle($title);
                        $category->setParent($parents);
                        $category->setCategoryImage($image);
                        $this->entityManager->persist($category);
                        $this->entityManager->flush();
                    }
                }
            }
            $this->addFlash('success', 'Файл корректен и был успешно загружен!');
        }else {
            $this->addFlash('error', 'Неправильный формат файла! Оберить файла xlsx aбо xls!');
        }
        return $this->redirect('/admin/app/category/list');

    }

    /**
     * @throws Exception
     */
    public function importProduct(): RedirectResponse
    {
        global $fileTmpP;
        $uploadsDirProduct = '../assets/images/products/';
        if (isset($_FILES['upload_file']))
        {
            $arrayFilesProduct = $_FILES['upload_file']['name'];
            $cArrayFileProduct = count($arrayFilesProduct);
            for ($p = 0; $p < $cArrayFileProduct; $p++) {
                $extensionP = pathinfo($arrayFilesProduct[$p], PATHINFO_EXTENSION);
                if (isset($arrayFilesProduct[$p]) === true) {
                    if ($extensionP === 'jpg' || $extensionP === 'png') {
                        move_uploaded_file($_FILES["upload_file"]["tmp_name"][$p], $uploadsDirProduct.$_FILES["upload_file"]["name"][$p]);
                    } elseif ($extensionP === 'xlsx' || $extensionP === 'xls') {
                        $fileNameP = $_FILES['upload_file']['name'][$p];
                        $fileTmpP = $_FILES['upload_file']['tmp_name'][$p];
                    }else{
                        $this->addFlash('error', 'Нет файла! Оберить файла xlsx aбо xls!');
                        return $this->redirect('/admin/app/product/list');
                    }
                }
            }
        }else{
            $this->addFlash('error', 'Файл не найден!');
            return $this->redirect('/admin/app/product/list');
        }
        if (isset($fileNameP)) {
        $extension = pathinfo($fileNameP, PATHINFO_EXTENSION);
            if('csv' == $extension) {
                $read = new \PhpOffice\PhpSpreadsheet\Reader\Csv();
            } else if('xls' == $extension) {
                $read = new \PhpOffice\PhpSpreadsheet\Reader\Xls();
            } else
                $read = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
//        if ($extension === 'xlsx') {
//            $read = new Xlsx();
//        } else if ($extension === 'xls') {
//            $read = new Xls();
//        } else {
//            $this->addFlash('error', 'Неправильный формат файла! Оберить файла xlsx aбо xls!');
//            return $this->redirect('/admin/app/product/list');
//        }
        $spreadsheet = $read->load($fileTmpP);
        $spreadsheet->getActiveSheet();
//        $spreadsheet->getActiveSheet()->removeRow(1);
        $sheetData = $spreadsheet->getActiveSheet()->toArray();
        $this->entityManager = $this->getDoctrine()->getManager();

        $countData = count($sheetData);
        if ($countData > 1) {
            foreach ($sheetData as $Row) {
                $pName = $Row[1];
                $pCategory = explode(',', $Row[2]);
                $pDescription = $Row[3];
                $attValues = [
                    $Row[4],
                    $Row[5],
                    explode(', ', $Row[6]),
                    explode(', ', $Row[7])
                ];
                $images = explode('|', $Row[8]);
                $attTypes = [
                    'brand',
                    'country',
                    'material',
                    'color',
                ];
                $productExistent = $this->entityManager->getRepository(Product::class)->findOneBy(['name' => $pName]);

                if (!$productExistent) {
                    $categories = $this->entityManager->getRepository(Category::class)->findBy(['title' => $pCategory]);
                    $product = new Product();
                    $product->setUpdatedAt(new \DateTime());
                    $product->setInStock(1);
                    $product->setName($pName);
                    $product->setMainImage(current($images));
//                    $product->setUnitPrice(9999);
//                    $product->setDiscount();
                    if ($pDescription !== null){
                        $product->setDescription($pDescription);
                    }
                    foreach ($categories as $cat) {
                        $product->addCategory($cat);
                    }
                    $countValue = count($attValues);
                    for ($y = 0; $y < $countValue; $y++) {
                        if (isset($attValues[$y]) === true ) {
                            if (is_array($attValues[$y]) === true) {
                                $countValueY = count($attValues[$y]);

                                for ($k = 0; $k < $countValueY; $k++) {
                                   if(!empty($attValues[$y][$k])) {
                                       $attValue = new AttributeValue();
                                       $attType = $this->entityManager->getRepository(AttributeType::class)->findOneBy(['name' => $attTypes[$y]]);
                                       $attValue->setAttributeType($attType);
                                       $attValue->setValue($attValues[$y][$k]);
                                       $attValue->setProduct($product);
                                       $product->addAttributeValue($attValue);
                                   }
                                }
                            } else {
                                if($attValues[$y] !== null) {
                                    $atteValue = new AttributeValue();
                                    $atteType = $this->entityManager->getRepository(AttributeType::class)->findOneBy(['name' => $attTypes[$y]]);
                                    $atteValue->setAttributeType($atteType);
                                    $atteValue->setValue($attValues[$y]);
                                    $atteValue->setProduct($product);
                                    $product->addAttributeValue($atteValue);
                                }
                            }
                        }
                    }
                    array_splice($images, 0, 1);
                    $countImages = count($images);
                    for ($a = 0; $a < $countImages; $a++)
                    {
                       if (!empty($images[$a]))
                       {
                            $pImages = new Images();
                            $pImages ->setImageName($images[$a]);
                            $pImages->setProduct($product);
                            $pImages->setUpdatedAt(new \DateTime());
                            $product->addImage($pImages);

                       }
                    }
//                    dd($product);
                    $this->entityManager->persist($product);
                    $this->entityManager->flush();
                }
            }
        }
        $this->addFlash('success', 'Файл корректен и был успешно загружен!');
        } else {
            $this->addFlash('error', 'Неправильный формат файла! Оберить файла xlsx aбо xls!');
        }
        return $this->redirect('/admin/app/product/list');

    }
}