<?php

namespace App\Traits;

use Pagerfanta\Pagerfanta;

trait PagerfantaPager
{

    public function pageRouter($adapter, $request)
    {
        $pagerfanta = new Pagerfanta($adapter);
        $pagerfanta->setMaxPerPage(12);

        if (isset($_GET['page'])) {
            $pagerfanta->setCurrentPage($_GET['page']);
        }else{
            $pagerfanta->setCurrentPage($request->get('page', 1));
        }

        return $pagerfanta;
    }
}