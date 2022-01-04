<?php

namespace App\DataFixtures;

use App\Entity\Comments;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class CommentFixture extends BaseFixture implements DependentFixtureInterface
{

    protected function loadData(ObjectManager $manager)
    {

        $this->createMany(500, 'main_comments', function($i) use ($manager) {
            $comment = new Comments();
            $comment->setBody(
                $this->faker->boolean ? $this->faker->paragraph : $this->faker->sentences(2, true)
            );
            $comment->setRating($this->faker->numberBetween(1, 5));
            $comment->setPublishedDate($this->faker->dateTimeBetween('-1 months', '-1 seconds'));
            $comment->setProduct($this->getRandomReference('main_products'));
            $comment->setUserEmail(sprintf('simple%d@example.com', $i));
            $comment->setShortcomings(
                $this->faker->boolean ? $this->faker->paragraph : $this->faker->sentences(2, true)
            );
            $comment->setDignity(
                $this->faker->boolean ? $this->faker->paragraph : $this->faker->sentences(2, true)
            );
            $comment->setNickname($this->faker->name);


            return $comment;
        });

        $manager->flush();
    }

    /**
     * This method must return an array of fixtures classes
     * on which the implementing class depends on
     *
     * @return array
     */
    public function getDependencies(): array
    {
        return [ProductFixture::class];
    }
}