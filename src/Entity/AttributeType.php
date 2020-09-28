<?php

namespace App\Entity;

use App\Repository\AttributeTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AttributeTypeRepository::class)
 */
class AttributeType
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=AttributeValue::class, mappedBy="attributeType")
     */
    private $attributeValue;

    public function __construct()
    {
        $this->attributeValue = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|AttributeValue[]
     */
    public function getAttributeValue(): Collection
    {
        return $this->attributeValue;
    }

    public function addAttributeValue(AttributeValue $attributeValue): self
    {
        if (!$this->attributeValue->contains($attributeValue)) {
            $this->attributeValue[] = $attributeValue;
            $attributeValue->setAttributeType($this);
        }

        return $this;
    }

    public function removeAttributeValue(AttributeValue $attributeValue): self
    {
        if ($this->attributeValue->contains($attributeValue)) {
            $this->attributeValue->removeElement($attributeValue);
            // set the owning side to null (unless already changed)
            if ($attributeValue->getAttributeType() === $this) {
                $attributeValue->setAttributeType(null);
            }
        }

        return $this;
    }

}
