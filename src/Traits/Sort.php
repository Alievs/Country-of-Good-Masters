<?php

namespace App\Traits;


use Symfony\Component\HttpFoundation\ParameterBag;

trait Sort
{

    public function sortFilter(ParameterBag $query)
    {
        $sort_options = [
            'cheap' => 'Від дешевих до дорогих',
            'expensive' => 'Від дорогих до дешевих',
            'novelty' => 'Новинки',
            'action' => 'Акційні',
            'rank' => 'За рейтингом',
            ];

        $limit_page = [
            '16' => '16',
            '32' => '32',
            '64' => '64',
            '128' => '128',
        ];

        if ($query->has('sort') && $query->get('sort') !== ''){
            $sort = $query->get('sort');
        }
        else{
            $sort = 'novelty';
        }

        if ($query->has('limit') && $query->get('limit') !== '' && is_numeric($query->get('limit')) ){
            $limit = $query->get('limit');
        }
        else{
            $limit = 16;
        }

        return [
            'sort_options' => $sort_options,
            'sort' => $sort,
            'limit_page' => $limit_page,
            'limit' => $limit,
            ];

    }

}