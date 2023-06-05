<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230602122615 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Adding token and activated fields for User';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE "user" ADD token VARCHAR(128) DEFAULT NULL');
        $this->addSql('ALTER TABLE "user" ADD activated BOOLEAN NOT NULL DEFAULT FALSE');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE "user" DROP token');
        $this->addSql('ALTER TABLE "user" DROP activated');
    }
}
