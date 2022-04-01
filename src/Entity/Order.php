<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\OrderBy;
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
     *     pattern     = "/\+38\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/",
     *     htmlPattern = "\+38\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}",
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

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTimeInterface|null
     * @OrderBy ("DESC")
     */
    private $order_date;

    /**
     * @ORM\Column(name="is_status", type="boolean", nullable=true)
     */
    private $isStatus;

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

    public function getOrderDate(): ?\DateTimeInterface
    {
        return $this->order_date;
    }

    public function setOrderDate(\DateTimeInterface $order_date): self
    {
        $this->order_date = $order_date;

        return $this;
    }

    public function getIsStatus(): ?bool
    {
        return $this->isStatus;
    }

    public function setIsStatus(bool $isStatus = null): self
    {
        $this->isStatus = $isStatus;

        return $this;
    }

    public function getCartOrderProduct(): array
    {
        $cart = unserialize($this->getCart());
        $newCart = $cart->getProducts();
        foreach ($newCart as $value)
        {
            $arrayCart[] = $value;
        }
        return $arrayCart;
    }
}
