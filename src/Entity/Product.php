<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @Vich\Uploadable
 */
class Product
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=191)
     * @var string
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=100, unique=true)
     * @Gedmo\Slug(fields={"name"})
     * @var string
     */
    private $link;

    /**
     * @ORM\Column(type="text")
     * @var string
     */
    private $description;

    /**
     * NOTE: This is not a mapped field of entity metadata, just a simple property.
     *
     * @Vich\UploadableField(mapping="products", fileNameProperty="MainImage")
     *
     * @var File|null
     */
    private $imageFile;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string|null
     */
    private $mainImage;

    /**
     * @ORM\Column(type="datetime")
     *
     * @var \DateTimeInterface|null
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="integer")
     * @var integer
     */
    private $unit_price;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $category;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Images", mappedBy="product", cascade={"persist", "remove"}, orphanRemoval=true, fetch="EXTRA_LAZY")
     */
    private $images;

    /**
     * @ORM\Column(type="float")
     */
    private $width;

    /**
     * @ORM\Column(type="float")
     */
    private $height;

    /**
     * @ORM\Column(type="float")
     */
    private $depth;

    /**
     * @ORM\Column(type="text")
     */
    private $material;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $brand;

    /**
     * @ORM\Column(type="text")
     */
    private $warranty;

    /**
     * @ORM\OneToOne(targetEntity="ProductInfo", mappedBy="product", cascade={"persist", "remove"}, orphanRemoval=true, fetch="EXTRA_LAZY")
     */
    private $productInfo;

    public function __construct()
    {
        $this->images = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getMainImage(): ?string
    {
        return $this->mainImage;
    }

    public function setMainImage(?string $mainImage): void
    {
        $this->mainImage = $mainImage;

    }
    /**
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $imageFile
     */
    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function getUnitPrice(): ?int
    {
        return $this->unit_price;
    }

    public function setUnitPrice(int $unit_price): self
    {
        $this->unit_price = $unit_price;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|Images[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Images $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setProduct($this);
        }

        return $this;
    }

    public function removeImage(Images $image): self
    {
        if ($this->images->contains($image)) {
            $this->images->removeElement($image);
            // set the owning side to null (unless already changed)
            if ($image->getProduct() === $this) {
                $image->setProduct(null);
            }
        }

        return $this;
    }

    public function getWidth(): ?float
    {
        return $this->width;
    }

    public function setWidth(float $width): self
    {
        $this->width = $width;

        return $this;
    }

    public function getHeight(): ?float
    {
        return $this->height;
    }

    public function setHeight(float $height): self
    {
        $this->height = $height;

        return $this;
    }

    public function getDepth(): ?float
    {
        return $this->depth;
    }

    public function setDepth(float $depth): self
    {
        $this->depth = $depth;

        return $this;
    }

    public function getMaterial(): ?string
    {
        return $this->material;
    }

    public function setMaterial(string $material): self
    {
        $this->material = $material;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(?string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getBrand(): ?string
    {
        return $this->brand;
    }

    public function setBrand(?string $brand): self
    {
        $this->brand = $brand;

        return $this;
    }

    public function getWarranty(): ?string
    {
        return $this->warranty;
    }

    public function setWarranty(string $warranty): self
    {
        $this->warranty = $warranty;

        return $this;
    }

    public function getProductInfo(): ?ProductInfo
    {
        return $this->productInfo;
    }

    public function setProductInfo(?ProductInfo $productInfo): self
    {
        $this->productInfo = $productInfo;

        // set (or unset) the owning side of the relation if necessary
        $newProduct = null === $productInfo ? null : $this;
        if ($productInfo->getProduct() !== $newProduct) {
            $productInfo->setProduct($newProduct);
        }

        return $this;
    }
}
