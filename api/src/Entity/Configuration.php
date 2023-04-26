<?php

declare(strict_types=1);

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Repository\ConfigurationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ConfigurationRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new Post(
            denormalizationContext: ['groups' => 'create_update_domain_denormalization'],
        ),
        new Patch(
            denormalizationContext: ['groups' => 'create_update_domain_denormalization'],
        ),
        new Delete(),
    ],
    normalizationContext: ['groups' => 'get_configuration_normalization'],
    security: "is_granted('ROLE_ADMIN') or object.getDomain().getOwner() == user",
)]
class Configuration
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Assert\NotBlank]
    private int $id;

    #[Assert\NotBlank]
    #[Groups(['get_configuration_normalization','create_update_domain_denormalization'])]
    #[ORM\Column(length: 100)]
    private string $zone;

    #[Assert\NotBlank]
    #[Groups(['get_configuration_normalization','create_update_domain_denormalization'])]
    #[ORM\Column(type: Types::TEXT)]
    private string $configuration;

    #[Assert\NotBlank]
    #[Groups(['get_configuration_normalization','create_update_domain_denormalization'])]
    #[ORM\Column(length: 39)]
    private string $ip;

    #[Assert\NotBlank]
    #[Groups(['get_configuration_normalization'])]
    #[ORM\ManyToOne(inversedBy: 'configurations')]
    #[ORM\JoinColumn(nullable: false)]
    private Domain $domain;

    public function getId(): int
    {
        return $this->id;
    }

    public function getZone(): string
    {
        return $this->zone;
    }

    public function setZone(string $zone): self
    {
        $this->zone = $zone;

        return $this;
    }

    public function getConfiguration(): string
    {
        return $this->configuration;
    }

    public function setConfiguration(string $configuration): self
    {
        $this->configuration = $configuration;

        return $this;
    }

    public function getIp(): string
    {
        return $this->ip;
    }

    public function setIp(string $ip): self
    {
        $this->ip = $ip;

        return $this;
    }

    public function getDomain(): Domain
    {
        return $this->domain;
    }

    public function setDomain(Domain $domain): self
    {
        $this->domain = $domain;

        return $this;
    }
}
