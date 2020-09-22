<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200919030955 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE images (id INT AUTO_INCREMENT NOT NULL, product_id INT DEFAULT NULL, image_name VARCHAR(255) NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_E01FBE6A4584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(191) NOT NULL, link VARCHAR(100) NOT NULL, description LONGTEXT NOT NULL, main_image VARCHAR(255) NOT NULL, updated_at DATETIME NOT NULL, unit_price INT NOT NULL, width DOUBLE PRECISION NOT NULL, height DOUBLE PRECISION NOT NULL, depth DOUBLE PRECISION NOT NULL, material LONGTEXT NOT NULL, country VARCHAR(100) NOT NULL, brand VARCHAR(100) NOT NULL, warranty LONGTEXT NOT NULL, UNIQUE INDEX UNIQ_D34A04AD36AC99F1 (link), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, name VARCHAR(255) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, agreed_terms DATETIME NOT NULL, phone_number VARCHAR(100) NOT NULL, last_name VARCHAR(100) DEFAULT NULL, address VARCHAR(160) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_info (id INT AUTO_INCREMENT NOT NULL, product_id INT DEFAULT NULL, berth_width DOUBLE PRECISION DEFAULT NULL, berth_depth DOUBLE PRECISION DEFAULT NULL, sofa_type VARCHAR(100) DEFAULT NULL, internal_filling VARCHAR(160) DEFAULT NULL, sleeping_places VARCHAR(100) DEFAULT NULL, frame_material VARCHAR(100) DEFAULT NULL, color VARCHAR(100) DEFAULT NULL, pillows VARCHAR(100) DEFAULT NULL, weight VARCHAR(100) DEFAULT NULL, UNIQUE INDEX UNIQ_466113F64584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(140) NOT NULL, name VARCHAR(100) NOT NULL, last_name VARCHAR(100) NOT NULL, phone_number VARCHAR(100) NOT NULL, cart LONGTEXT NOT NULL, pay VARCHAR(160) NOT NULL, delivery VARCHAR(160) NOT NULL, address VARCHAR(255) DEFAULT NULL, warehouse LONGTEXT DEFAULT NULL, total_order_price DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE images ADD CONSTRAINT FK_E01FBE6A4584665A FOREIGN KEY (product_id) REFERENCES product (id)');
        $this->addSql('ALTER TABLE product_info ADD CONSTRAINT FK_466113F64584665A FOREIGN KEY (product_id) REFERENCES product (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE images DROP FOREIGN KEY FK_E01FBE6A4584665A');
        $this->addSql('ALTER TABLE product_info DROP FOREIGN KEY FK_466113F64584665A');
        $this->addSql('DROP TABLE images');
        $this->addSql('DROP TABLE product');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE product_info');
        $this->addSql('DROP TABLE `order`');
    }
}
