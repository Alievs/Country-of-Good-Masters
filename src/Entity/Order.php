<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=OrderRepository::class)
 * @ORM\Table(name="`order`")
 */
class Order
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=140)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message="Будь ласка, введіть ім'я!")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message="Будь ласка, введіть прізвище!")
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message="Будь ласка, введіть свій номер телефону!")
     * @Assert\Regex(
     *     pattern     = "/\+[0-9]{11}/",
     *     htmlPattern = "\+[0-9]{11}",
     *     message="Неправильний номер телефону. Спробуйте ще раз"
     * )
     */
    private $phoneNumber;

    /**
     * @ORM\Column(type="text")
     */
    private $cart;

    /**
     * @ORM\Column(type="string", length=160)
     * @Assert\NotNull(message="Будь ласка, виберіть спосіб оплати!")
     */
    private $pay;

    /**
     * @ORM\Column(type="string", length=160)
     * @Assert\NotNull(message="Будь ласка, виберіть спосіб доставки!")
     */
    private $delivery;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $warehouse;

    /**
     * @ORM\Column(type="float")
     */
    private $totalOrderPrice;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getCart(): ?string
    {
        return $this->cart;
    }

    public function setCart(string $cart): self
    {
        $this->cart = $cart;

        return $this;
    }

    public function getPay(): ?string
    {
        return $this->pay;
    }

    public function setPay(string $pay): self
    {
        $this->pay = $pay;

        return $this;
    }

    public function getDelivery(): ?string
    {
        return $this->delivery;
    }

    public function setDelivery(string $delivery): self
    {
        $this->delivery = $delivery;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getWarehouse(): ?string
    {
        return $this->warehouse;
    }

    public function setWarehouse(?string $warehouse): self
    {
        $this->warehouse = $warehouse;

        return $this;
    }

    public function getTotalOrderPrice(): ?float
    {
        return $this->totalOrderPrice;
    }

    public function setTotalOrderPrice(float $totalOrderPrice): self
    {
        $this->totalOrderPrice = $totalOrderPrice;

        return $this;
    }
}
