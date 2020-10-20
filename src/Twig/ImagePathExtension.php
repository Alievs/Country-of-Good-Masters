<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class ImagePathExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/2.x/advanced.html#automatic-escaping
            new TwigFilter('product_image_path', [$this, 'getProductImagePath']),
            new TwigFilter('sub_product_image_path', [$this, 'getSubProductImagePath']),
        ];
    }

//    public function getFunctions(): array
//    {
//        return [
//            new TwigFunction('function_name', [$this, 'doSomething']),
//        ];
//    }

    public function getProductImagePath($value)
    {
        return 'build/images/products/' . $value;
    }
    public function getSubProductImagePath($value)
    {
        return 'images/products/' . $value;
    }
}
