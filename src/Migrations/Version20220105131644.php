<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220105131644 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');
        $this->addSql('CREATE TRIGGER rating_product_create
                             AFTER INSERT ON comments
                               FOR EACH ROW
                                UPDATE product SET rating =
                                     (SELECT SUM(rating) / COUNT(id)
                                        FROM comments 
                                       WHERE product.id = comments.product_id AND comments.is_published = 1)
                               WHERE id IN 
                                     (SELECT product_id
                                        FROM comments
                                       GROUP BY product_id)');
        $this->addSql('CREATE TRIGGER rating_product_delete
                             AFTER DELETE ON comments
                               FOR EACH ROW
                                UPDATE product SET rating =
                                     (SELECT SUM(rating) / COUNT(id)
                                        FROM comments 
                                       WHERE product.id = comments.product_id AND comments.is_published = 1)
                               WHERE id IN 
                                     (SELECT product_id
                                        FROM comments
                                       GROUP BY product_id)');
        $this->addSql('CREATE TRIGGER rating_product_update
                             AFTER UPDATE ON comments
                               FOR EACH ROW
                                UPDATE product  SET rating =
                                     (SELECT SUM(rating) / COUNT(id)
                                        FROM comments 
                                       WHERE product.id = comments.product_id AND comments.is_published = 1)
                               WHERE id IN 
                                     (SELECT product_id
                                        FROM comments
                                       GROUP BY product_id) ');

    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');
        $this->addSql('DROP TRIGGER rating_product_create');
        $this->addSql('DROP TRIGGER rating_product_delete');
        $this->addSql('DROP TRIGGER rating_product_update');
    }
}
