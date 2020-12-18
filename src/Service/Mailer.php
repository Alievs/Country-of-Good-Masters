<?php

namespace App\Service;


use App\Entity\Cart;
use App\Entity\Order;
use App\Entity\User;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class Mailer
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function sendWelcomeMessage(User $user)
    {
        $email = (new TemplatedEmail())
            ->from(new Address('craftbud.com.ua@gmail.com', 'craftbud.com.ua'))
            ->to(new Address($user->getEmail(), $user->getName()))
            ->subject('Добро Пожаловать на сайт craftbud.com.ua')
            ->htmlTemplate('email/welcome.html.twig')
            ->context([
                // You can pass whatever data you want
                //   'user' => $user
            ])
        ;


        try {
            $this->mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
//            print $e->getDebug()."\n";
        }

        return $email;
    }

    public function sendUserOrderInfo(Order $order)
    {
        $email = (new TemplatedEmail())
            ->from(new Address('craftbud.com.ua@gmail.com', 'craftbud.com.ua'))
            ->to(new Address($order->getEmail(), $order->getName()))
            ->subject('Добро Пожаловать на сайт craftbud.com.ua')
            ->htmlTemplate('email/order.html.twig')
            ->context([
                // You can pass whatever data you want
            ])
        ;

        try {
            $this->mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
//            print $e->getDebug()."\n";
        }

        return $email;
    }

    public function sendAnonymOrderInfo(Order $order, Cart $cart)
    {
        if ($order->getDelivery() === 'З Відділення Нова Пошта'){
            $deliv = 1;
        }
        else{
            $deliv = 0;
        }

        $email = (new TemplatedEmail())
            ->from(new Address('craftbud.com.ua@gmail.com', 'craftbud.com.ua'))
            ->to(new Address($order->getEmail(), $order->getName()))
            ->subject('Добро Пожаловать на сайт craftbud.com.ua')
            ->htmlTemplate('email/anonymOrder.html.twig')
            ->context([
                'cart' => $cart,
                'deliv' => $deliv
            ])
        ;

        try {
            $this->mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
//            print $e->getDebug()."\n";
        }

        return $email;
    }
}