<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Factory\ConfigurationFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ConfigurationFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        ConfigurationFactory::createMany(10);

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            DomainFixtures::class,
        ];
    }
}
