<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Repository\ConfigurationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ConfigurationRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new Post(
            denormalizationContext: ['groups' => 'create_configuration_denormalization']
        ),
        new Patch(
            denormalizationContext: ['groups' => 'update_configuration_denormalization'],
        ),
        new Delete(),
    ],
    normalizationContext: ['groups' => 'get_configuration_normalization'],
    security: "is_granted('ROLE_ADMIN') or object.getDomain().getOwner() == user"
)]
class Configuration
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    #[Groups(['get_configuration_normalization','create_configuration_denormalization','update_configuration_denormalization'])]
    #[ORM\Column(length: 100)]
    private string $zone;

    #[Groups(['get_configuration_normalization','create_configuration_denormalization','update_configuration_denormalization'])]
    #[ORM\Column(type: Types::TEXT)]
    private string $configuration;

    #[Groups(['get_configuration_normalization','create_configuration_denormalization','update_configuration_denormalization'])]
    #[ORM\Column(length: 39)]
    private string $ip;

    #[Groups(['get_configuration_normalization'])]
    #[ORM\ManyToOne(inversedBy: 'configurations')]
    #[ORM\JoinColumn(nullable: false)]
    private Domain $domain;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getZone(): ?string
    {
        return $this->zone;
    }

    public function setZone(string $zone): self
    {
        $this->zone = $zone;

        return $this;
    }

    public function getConfiguration(): ?string
    {
        return $this->configuration;
    }

    public function setConfiguration(string $configuration): self
    {
        $this->configuration = $configuration;

        return $this;
    }

    public function getIp(): ?string
    {
        return $this->ip;
    }

    public function setIp(string $ip): self
    {
        $this->ip = $ip;

        return $this;
    }

    public function getDomain(): ?Domain
    {
        return $this->domain;
    }

    public function setDomain(?Domain $domain): self
    {
        $this->domain = $domain;

        return $this;
    }
}
