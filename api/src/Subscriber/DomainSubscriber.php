<?php

declare(strict_types=1);

namespace App\Subscriber;

use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\Domain;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class DomainSubscriber implements EventSubscriberInterface
{
    public function __construct(private Security $security)
    {
    }

    /**
     * @return array<string, array<int, int|string>>
     */
    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::VIEW => ['handleDomain', EventPriorities::PRE_VALIDATE],
        ];
    }

    public function handleDomain(ViewEvent $event): void
    {

        if (!($event->getControllerResult() instanceof Domain && Request::METHOD_POST === $event->getRequest()->getMethod())) {
            return;
        }

        /** @var Domain $domain */
        $domain = $event->getControllerResult();

        $domain->setValid(false);
        $domain->setOwner($this->security->getUser());
    }
}
