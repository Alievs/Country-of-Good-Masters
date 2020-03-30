<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;
//001_msgphp_user
/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200327115110 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL COMMENT \'(DC2Type:msgphp_user_id)\', created_at DATETIME NOT NULL, credential_email VARCHAR(191) NOT NULL, credential_password VARCHAR(255) NOT NULL, password_reset_token VARCHAR(191) DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, confirmation_token VARCHAR(191) DEFAULT NULL, confirmed_at DATETIME DEFAULT NULL, discriminator VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649A5D24B55 (credential_email), UNIQUE INDEX UNIQ_8D93D6496B7BA4B6 (password_reset_token), UNIQUE INDEX UNIQ_8D93D649C05FB297 (confirmation_token), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE user');
    }
}
