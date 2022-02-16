<?php

namespace App\Service\Admin;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use PhpOffice\PhpSpreadsheet\Exception;

/**
 * @method generate(mixed $requestFilter)
 */
class Export extends AbstractController
{
    /**
     * @var EntityData $data
     */
    private $data;

    public function __construct(EntityData $data)
    {
        $this->data = $data;
    }
    /**
     * @return BinaryFileResponse
     * @throws Exception
     */
    public function exportCategory(): BinaryFileResponse
    {
        $spreadsheet = new Spreadsheet();

        $sheet = $spreadsheet->getActiveSheet();
        $spreadsheet->getDefaultStyle()
            ->getFont()
            ->setName('Arial')
            ->setSize(13)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('A')->setWidth(35)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('B')->setWidth(35)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('C')->setWidth(50)
        ;
        $spreadsheet->getActiveSheet()
            ->setCellValue('A1',"Название категории")
            ->setCellValue('B1',"Название подкатегории")
            ->setCellValue('C1',"Основное изображение категории")
        ;
        $sheet->setTitle('Category List');

        // Increase row cursor after header write
        $sheet->fromArray($this->data->getDataCategory(),null, 'A2', true);
        $fileName = 'Category.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        $writer = new Xlsx($spreadsheet);

        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    /**
     * @return BinaryFileResponse
     * @throws Exception
     */
    public function exportProduct(): BinaryFileResponse
    {
        $spreadsheet = new Spreadsheet();
        $count = count($this->data->getDataProduct());

        foreach(range(2, $count+1) as $i) {
            $spreadsheet->getActiveSheet()->getRowDimension($i)->setRowHeight(200);
        }

        $sheet = $spreadsheet->getActiveSheet();
        $spreadsheet->getDefaultStyle()
            ->getFont()
            ->setName('Arial')
            ->setSize(13)
            ->setBold(true)
        ;
        $spreadsheet->getActiveSheet()
            ->getStyle('A:D')
            ->getFont()->setSize(10)
            ->setBold(true)
        ;
        $spreadsheet->getActiveSheet()
            ->getStyle('E:I')
            ->getFont()->setSize(9)
            ->setBold(true)
        ;
        $spreadsheet->getActiveSheet()
            ->getStyle('A2:F2')
            ->getFont()->setSize(10)
            ->setBold(true)
        ;
        $spreadsheet->getActiveSheet()
            ->mergeCells('G1:H1')
        ;
        $spreadsheet->getActiveSheet()
            ->getStyle('A1:F1')
            ->getAlignment()
            ->setHorizontal(Alignment::HORIZONTAL_LEFT)
        ;
        $spreadsheet->getActiveSheet()->getStyle('G1:H1')
            ->getAlignment()
            ->setHorizontal(Alignment::HORIZONTAL_CENTER)
        ;
        $spreadsheet->getActiveSheet()->getStyle('A:I')
            ->getAlignment()
            ->setVertical(Alignment::VERTICAL_TOP)
        ;
        $spreadsheet->getActiveSheet()->getStyle('C:D')
            ->getAlignment()
            ->setHorizontal(Alignment::HORIZONTAL_LEFT)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('A')->setWidth(40)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('B')->setWidth(35)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('C')->setWidth(15)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('D')->setWidth(10)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('E')->setWidth(85)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('F')->setWidth(25)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('G')->setWidth(40)
        ;
        $spreadsheet->getActiveSheet()
            ->getColumnDimension('H')->setWidth(40)
        ;
//        $spreadsheet->getActiveSheet()
//            ->getColumnDimension('I')->setWidth(60)
//        ;
        $spreadsheet->getActiveSheet()
            ->setCellValue('A1',"Название продукции")
            ->setCellValue('B1',"Основное изображение продукции")
            ->setCellValue('C1',"Цена")
            ->setCellValue('D1',"Скидка(%)")
            ->setCellValue('E1',"Опыс продутка")
            ->setCellValue('F1',"Название категории продукта")
            ->setCellValue('G1',"Характеристика продукта")
        ;
        $sheet->setTitle('Product');

        $sheet->fromArray($this->data->getDataProduct(),null, 'A2', true);
        $fileName = 'Product.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        $writer = new Xlsx($spreadsheet);

        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}