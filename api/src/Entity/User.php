<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Repository\UserRepository;
use App\State\UserPasswordHasher;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ApiResource(
    operations: [
        new GetCollection(
            normalizationContext: ['groups' => 'get_user_normalization'],
            security: "is_granted('ROLE_ADMIN')",
        ),
        new Get(
            normalizationContext: ['groups' => 'get_user_normalization'],
        ),
        new Post(
            normalizationContext: ['groups' => 'create_update_user_normalization'],
            denormalizationContext: ['groups' => 'create_user_denormalization'],
            processor: UserPasswordHasher::class,
        ),
        new Patch(
            normalizationContext: ['groups' => 'create_update_user_normalization'],
            denormalizationContext: ['groups' => 'update_user_denormalization'],
            processor: UserPasswordHasher::class,
        ),
        new Delete(),
    ],
    security: "is_granted('ROLE_ADMIN') or object == user",
)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    #[Groups(['get_user_normalization','create_update_user_normalization','create_user_denormalization','update_user_denormalization'])]
    #[ORM\Column(length: 180, unique: true)]
    private string $email;

    #[Groups(['get_users_normalization','admin:create_update_user_denormalization','admin:create_update_user_normalization'])]
    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string|null The hashed password
     */
    #[ORM\Column]
    #[Groups(['create_user_denormalization','update_user_denormalization'])]
    private ?string $password ;

    #[Groups(['get_users_normalization','create_update_user_normalization','create_user_denormalization','update_user_denormalization'])]
    #[ORM\Column(length: 100)]
    private string $lastname;

    #[Groups(['get_users_normalization','create_update_user_normalization','create_user_denormalization','update_user_denormalization'])]
    #[ORM\Column(length: 100)]
    private string $firstname;

    #[Groups(['get_users_normalization','create_update_user_normalization','create_user_denormalization','update_user_denormalization'])]
    #[ORM\Column(length: 150, nullable: true)]
    private string $company;

    #[Groups(['get_users_normalization'])]
    #[ORM\OneToMany(mappedBy: 'owner', targetEntity: Domain::class, orphanRemoval: true)]
    private Collection $domains;

    public function __construct()
    {
        $this->domains = new ArrayCollection();
        $this->roles = ['ROLE_USER'];
    }

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

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(?string $company): self
    {
        $this->company = $company;

        return $this;
    }

    /**
     * @return Collection<int, Domain>
     */
    public function getDomains(): Collection
    {
        return $this->domains;
    }

    public function addDomain(Domain $domain): self
    {
        if (!$this->domains->contains($domain)) {
            $this->domains->add($domain);
            $domain->setOwner($this);
        }

        return $this;
    }

    public function removeDomain(Domain $domain): self
    {
        if ($this->domains->removeElement($domain)) {
            // set the owning side to null (unless already changed)
            if ($domain->getOwner() === $this) {
                $domain->setOwner(null);
            }
        }

        return $this;
    }
}
