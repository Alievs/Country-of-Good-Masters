<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MoreInfoRepository")
 */
class ProductInfo
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Product", inversedBy="productInfo", cascade={"persist", "remove"})
     */
    private $product;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $berthWidth;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $berthDepth;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $sofaType;

    /**
     * @ORM\Column(type="string", length=160, nullable=true)
     */
    private $internalFilling;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $sleepingPlaces;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $frameMaterial;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $color;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $pillows;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $weight;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }

    public function getBerthWidth(): ?float
    {
        return $this->berthWidth;
    }

    public function setBerthWidth(?float $berthWidth): self
    {
        $this->berthWidth = $berthWidth;

        return $this;
    }

    public function getBerthDepth(): ?float
    {
        return $this->berthDepth;
    }

    public function setBerthDepth(?float $berthDepth): self
    {
        $this->berthDepth = $berthDepth;

        return $this;
    }

    public function getSofaType(): ?string
    {
        return $this->sofaType;
    }

    public function setSofaType(?string $sofaType): self
    {
        $this->sofaType = $sofaType;

        return $this;
    }

    public function getInternalFilling(): ?string
    {
        return $this->internalFilling;
    }

    public function setInternalFilling(?string $internalFilling): self
    {
        $this->internalFilling = $internalFilling;

        return $this;
    }

    public function getSleepingPlaces(): ?string
    {
        return $this->sleepingPlaces;
    }

    public function setSleepingPlaces(?string $sleepingPlaces): self
    {
        $this->sleepingPlaces = $sleepingPlaces;

        return $this;
    }

    public function getFrameMaterial(): ?string
    {
        return $this->frameMaterial;
    }

    public function setFrameMaterial(?string $frameMaterial): self
    {
        $this->frameMaterial = $frameMaterial;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getPillows(): ?string
    {
        return $this->pillows;
    }

    public function setPillows(?string $pillows): self
    {
        $this->pillows = $pillows;

        return $this;
    }

    public function getWeight(): ?string
    {
        return $this->weight;
    }

    public function setWeight(?string $weight): self
    {
        $this->weight = $weight;

        return $this;
    }
}
