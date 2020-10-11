<?php

namespace App\Tests\Service;

use App\Entity\User;
use App\Service\Mailer;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class MailerTest extends TestCase
{
    public function testSendWelcomeMessage()
    {
        $symfonyMailer = $this->createMock(MailerInterface::class);
        $symfonyMailer->expects($this->once())
            ->method('send');

        $user = new User();
        $user->setName('Victor');
        $user->setEmail('victor@symfonycasts.com');

        $mailer = new Mailer($symfonyMailer);
        $email = $mailer->sendWelcomeMessage($user);

        $this->assertSame('Добро Пожаловать на сайт craftbud.com.ua', $email->getSubject());
        $this->assertCount(1, $email->getTo());
        /** @var Address[] $addresses */
        $addresses = $email->getTo();
        $this->assertInstanceOf(Address::class, $addresses[0]);
        $this->assertSame('Victor', $addresses[0]->getName());
        $this->assertSame('victor@symfonycasts.com', $addresses[0]->getAddress());
    }
}
