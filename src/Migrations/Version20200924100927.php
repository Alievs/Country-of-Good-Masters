<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200924100927 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE attribute_value DROP FOREIGN KEY FK_FE4FBB8241ED7DB8');
        $this->addSql('DROP INDEX IDX_FE4FBB8241ED7DB8 ON attribute_value');
        $this->addSql('ALTER TABLE attribute_value CHANGE options_name_id attribute_type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE attribute_value ADD CONSTRAINT FK_FE4FBB824ED0D557 FOREIGN KEY (attribute_type_id) REFERENCES attribute_type (id)');
        $this->addSql('CREATE INDEX IDX_FE4FBB824ED0D557 ON attribute_value (attribute_type_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE attribute_value DROP FOREIGN KEY FK_FE4FBB824ED0D557');
        $this->addSql('DROP INDEX IDX_FE4FBB824ED0D557 ON attribute_value');
        $this->addSql('ALTER TABLE attribute_value CHANGE attribute_type_id options_name_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE attribute_value ADD CONSTRAINT FK_FE4FBB8241ED7DB8 FOREIGN KEY (options_name_id) REFERENCES attribute_type (id)');
        $this->addSql('CREATE INDEX IDX_FE4FBB8241ED7DB8 ON attribute_value (options_name_id)');
    }
}
