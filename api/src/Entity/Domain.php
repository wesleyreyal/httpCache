<?php

declare(strict_types=1);

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Repository\DomainRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: DomainRepository::class)]
#[ApiResource(
    operations: [
        new GetCollection(
            normalizationContext: ['groups' => 'get_domain_normalization'],
            security: "is_granted('ROLE_USER')",
        ),
        new Get(
            normalizationContext: ['groups' => 'get_domain_normalization'],
        ),
        new Post(
            normalizationContext: ['groups' => 'create_domain_normalization'],
            denormalizationContext: ['groups' => 'create_update_domain_denormalization'],
        ),
        new Patch(
            normalizationContext: ['groups' => 'update_domain_normalization'],
            denormalizationContext: ['groups' => 'create_update_domain_denormalization'],
        ),
        new Delete()
    ],
    security: "is_granted('ROLE_ADMIN') or object.owner == user",
)]
class Domain
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: UuidType::NAME)]
    private Uuid $id;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(['get_domain_normalization', 'create_update_domain_normalization', 'create_update_domain_denormalization'])]
    private string $dns;

    #[ORM\Column]
    #[Assert\NotBlank]
    #[Groups(['get_domain_normalization', 'create_update_domain_normalization'])]
    private bool $valid;

    #[ORM\ManyToOne(inversedBy: 'domains')]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotBlank]
    private User $owner;

    /** @var Collection<int, Configuration> */
    #[ORM\OneToMany(mappedBy: 'domain', targetEntity: Configuration::class, orphanRemoval: true)]
    #[Groups(['get_domain_normalization', 'create_update_domain_normalization'])]
    private Collection $configurations;

    public function __construct()
    {
        $this->configurations = new ArrayCollection();
    }

    public function getId(): Uuid
    {
        return $this->id;
    }

    public function getDns(): string
    {
        return $this->dns;
    }

    public function setDns(string $dns): self
    {
        $this->dns = $dns;

        return $this;
    }

    public function isValid(): bool
    {
        return $this->valid;
    }

    public function setValid(bool $valid): self
    {
        $this->valid = $valid;

        return $this;
    }

    public function getOwner(): User
    {
        return $this->owner;
    }

    public function setOwner(User $owner): self
    {
        $this->owner = $owner;

        return $this;
    }

    /**
     * @return Collection<int, Configuration>
     */
    public function getConfigurations(): Collection
    {
        return $this->configurations;
    }

    public function addConfiguration(Configuration $configuration): self
    {
        if (!$this->configurations->contains($configuration)) {
            $this->configurations->add($configuration);
            $configuration->setDomain($this);
        }

        return $this;
    }

    public function removeConfiguration(Configuration $configuration): self
    {
        $this->configurations->removeElement($configuration);

        return $this;
    }
}
