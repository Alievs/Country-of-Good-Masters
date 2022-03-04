<?php

namespace App\Entity;

use App\Repository\CommentsRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\OrderBy;

/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 *
 */
class Comments
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $body;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $dignity;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $shortcomings;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $rating;

    /**
     * @ORM\ManyToOne(targetEntity=Product::class, inversedBy="comments")
     */
    private $product;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTimeInterface|null
     * @OrderBy ("DESC")
     */
    private $published_date;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nickname;

    /**
     * @ORM\Column(type="string", length=180, unique=false)
     */
    private $user_email;

    /**
     * @ORM\Column(name="is_published", type="boolean")
     */
    private $isPublished = 0;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): self
    {
        $this->body = $body;

        return $this;
    }

    public function getDignity(): ?string
    {
        return $this->dignity;
    }

    public function setDignity(?string $dignity): self
    {
        $this->dignity = $dignity;

        return $this;
    }

    public function getShortcomings(): ?string
    {
        return $this->shortcomings;
    }

    public function setShortcomings(?string $shortcomings): self
    {
        $this->shortcomings = $shortcomings;

        return $this;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(?int $rating): self
    {
        $this->rating = $rating;

        return $this;
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

    public function getPublishedDate(): ?\DateTimeInterface
    {
        return $this->published_date;
    }

    public function setPublishedDate(\DateTimeInterface $published_date): self
    {
        $this->published_date = $published_date;

        return $this;
    }

    public function getNickname(): ?string
    {
        return $this->nickname;
    }

    public function setNickname(string $nickname): self
    {
        $this->nickname = $nickname;

        return $this;
    }

    public function getUserEmail(): ?string
    {
        return $this->user_email;
    }

    public function setUserEmail(string $user_email): self
    {
        $this->user_email = $user_email;

        return $this;
    }

    public function getIsPublished(): ?bool
    {
        return $this->isPublished;
    }

    public function setIsPublished(bool $isPublished): self
    {
        $this->isPublished = $isPublished;

        return $this;
    }

}
