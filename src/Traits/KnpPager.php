<?php

namespace App\Traits;


use Knp\Component\Pager\PaginatorInterface;

trait KnpPager
{

    public function pageRouter($query, $request, PaginatorInterface $paginator)
    {
        return $paginator->paginate($query,  $request->query->getInt('page', 1), 16);

    }

    public function pageRouterLimit($query, $request, PaginatorInterface $paginator, $limit)
    {
        return $paginator->paginate($query,  $request->query->getInt('page', 1), $limit);

    }
}