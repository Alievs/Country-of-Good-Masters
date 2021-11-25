<?php

namespace App\Traits;

trait Sort
{
    /**
     * @param array $query
     * @return integer[]
     */
    public function sortFilter($query): array
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

        if (isset($query['sort']) && !empty($query['sort']) ){
            $sort = $query['sort'];
        }
        else{
            $sort = 'novelty';
        }

        if (isset($query['limit']) && !empty($query['limit']) && is_numeric($query['limit']) ){
            $limit = (int)$query['limit'];
        }
        else{
            $limit = 16;
        }

        if (!in_array($limit, [16, 32, 64, 128], true)){
            $limit = 16;
        }

        return [
            'sort_options' => $sort_options,
            'sort' => $sort,
            'limit_page' => $limit_page,
            'limit' => $limit,
        ];

    }

    /**
     * @param $getParams
     * @param $options
     * @return array
     */
    public function stripUnrelatedKeys ($getParams, $options): array
    {
        $pre_choices = [];

        foreach ($getParams as $key => $value){

            if (isset($options[$key])){
//                inner values в двух массивах
                $choice = array_intersect($value, $options[$key]);
                $pre_choices[$key] = $choice;
            }
        }
        return $pre_choices;
    }

}