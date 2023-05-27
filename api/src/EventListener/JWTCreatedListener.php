<?php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JWTCreatedListener
{
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        $expiration = new \DateTime('+1 day');
        $payload = $event->getData();
        $payload['user_id'] = $event->getUser()->getId();
        $payload['exp'] = $expiration->getTimestamp();

        $event->setData($payload);

        return;
    }
}
