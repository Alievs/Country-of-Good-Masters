<?php


namespace App\DataFixtures;


use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixture extends BaseFixture
{

    private $passwordEncoder;
    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    protected function loadData(ObjectManager $manager)
    {
        $this->createMany(10, 'main_users', function($i) {

            $users = new User();
            $users->setEmail(sprintf('simple%d@example.com', $i));
            $users->setName($this->faker->firstName);
            $users->setPhoneNumber("+381234567890");
            $users->agreeTerms();
            $users->setPassword($this->passwordEncoder->encodePassword(
                $users,
                'asd'
            ));

            return $users;
        });

        $this->createMany(3, 'admin_users', function($i) {

            $users = new User();
            $users->setEmail(sprintf('admin%d@example.com', $i));
            $users->setName($this->faker->firstName);
            $users->setPhoneNumber("+381234567890");
            $users->agreeTerms();
            $users->setRoles(['ROLE_ADMIN']);
            $users->setPassword($this->passwordEncoder->encodePassword(
                $users,
                'asd'
            ));

            return $users;
        });

        $manager->flush();

    }

    public function getDependencies()
    {
        return [
            ProductFixture::class,
            ProductInfoFixture::class,
        ];
    }
}