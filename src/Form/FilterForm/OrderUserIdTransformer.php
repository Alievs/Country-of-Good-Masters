<?php

namespace App\Form\FilterForm;

use App\Repository\UserRepository;
use Symfony\Component\Form\DataTransformerInterface;

class OrderUserIdTransformer implements DataTransformerInterface
{
    private $userRepository;
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    public function transform($value)
    {
        if (null === $value) {
            return '';
        }
        return $value->getId();
    }
    public function reverseTransform($value)
    {
        return $this->userRepository->findOneBy(['id' => $value]);
    }
}