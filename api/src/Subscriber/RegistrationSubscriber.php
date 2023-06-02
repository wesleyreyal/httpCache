<?php

namespace App\Subscriber;

use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\User;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use JetBrains\PhpStorm\ArrayShape;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Twig\Environment;

class RegistrationSubscriber implements EventSubscriberInterface
{
    private EntityManagerInterface $entityManager;
    private MailerInterface $mailer;
    private Environment $twig;
    private string $contentsDir;

    public function __construct(
        EntityManagerInterface $entityManager,
        MailerInterface $mailer,
        Environment $twig,
        string $contentsDir
    ) {
        $this->entityManager = $entityManager;
        $this->mailer = $mailer;
        $this->twig = $twig;
        $this->contentsDir = $contentsDir;
    }

    #[ArrayShape([KernelEvents::VIEW => "array"])]
    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::VIEW => ['handleRegistration', EventPriorities::PRE_WRITE]
        ];
    }

    /**
     * @throws TransportExceptionInterface
     * @throws Exception
     */
    public function handleRegistration(ViewEvent $event): void
    {
        /** @var $user User */
        $user = $event->getControllerResult();

        if (!($user instanceof User && Request::METHOD_POST === $event->getRequest()->getMethod())) {
            return;
        }

        $token = hash('sha512', $user->getEmail().(new DateTime())->format('Y-m-d H:i:s'));

        $user->setToken($token);

        $this->entityManager->flush();

        $activationUrl = sprintf('%s/activation?email=%s&token=%s', $this->contentsDir, $user->getEmail(), $token);

        $subject = $this->twig->render('emails/registration_subject.twig');

        $html = $this->twig->render('emails/registration.html.twig', [
            'user' => $user,
            'activationUrl' => $activationUrl,
        ]);

        $text = $this->twig->render('emails/registration_text.twig', [
            'user' => $user,
            'activationUrl' => $activationUrl,
        ]);

        $email = (new Email())
            ->from('noreply@souin.com')
            ->to($user->getEmail())
            ->subject($subject)
            ->text($text)
            ->html($html);

        $this->mailer->send($email);
    }
}
