<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220121132737 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');
        $this->addSql('CREATE TRIGGER product_create_final_price
                            BEFORE INSERT ON product
                            FOR EACH ROW
                            BEGIN
                                IF NEW.discount IS NULL THEN
                                    SET NEW.final_price = NEW.unit_price;
                                ELSE 
                                    SET NEW.final_price = NEW.unit_price * (100 - NEW.discount) / 100;
                                END IF;
                            END');
        $this->addSql('CREATE TRIGGER product_update_final_price
                            BEFORE UPDATE ON product
                            FOR EACH ROW
                            BEGIN
                                IF NEW.discount IS NULL THEN
                                    SET NEW.final_price = NEW.unit_price;
                                ELSE 
                                    SET NEW.final_price = NEW.unit_price * (100 - NEW.discount) / 100;
                                END IF;
                            END;');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');
        $this->addSql('DROP TRIGGER product_create_final_price');
        $this->addSql('DROP TRIGGER product_update_final_price');
    }
}
