<?php

declare(strict_types=1);

namespace App\Factory;

use App\Entity\Configuration;
use App\Repository\ConfigurationRepository;
use Exception;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<Configuration>
 *
 * @psalm-method Configuration|Proxy create(array|callable $attributes = [])
 * @psalm-method static Configuration|Proxy createOne(array $attributes = [])
 * @psalm-method static Configuration|Proxy find(object|array|mixed $criteria)
 * @psalm-method static Configuration|Proxy findOrCreate(array $attributes)
 * @psalm-method static Configuration|Proxy first(string $sortedField = 'id')
 * @psalm-method static Configuration|Proxy last(string $sortedField = 'id')
 * @psalm-method static Configuration|Proxy random(array $attributes = [])
 * @psalm-method static Configuration|Proxy randomOrCreate(array $attributes = [])
 * @psalm-method static ConfigurationRepository|RepositoryProxy repository()
 * @psalm-method static Configuration[]|Proxy[] all()
 * @psalm-method static Configuration[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @psalm-method static Configuration[]|Proxy[] createSequence(iterable|callable $sequence)
 * @psalm-method static Configuration[]|Proxy[] findBy(array $attributes)
 * @psalm-method static Configuration[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @psalm-method static Configuration[]|Proxy[] randomSet(int $number, array $attributes = [])
 */
final class ConfigurationFactory extends ModelFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @throws Exception
     */
    protected function getDefaults(): array
    {
        $subdomain = ["mail", "shop", "blog", "support", "forum", "api", "news", "events", "status", "dev"];
        return [
            'configuration' => self::faker()->text(255),
            'ip' => self::faker()->ipv4(),
            'zone' => $subdomain[random_int(0,count($subdomain)-1)],
            'domain' => DomainFactory::random(),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(Configuration $configuration): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Configuration::class;
    }
}
