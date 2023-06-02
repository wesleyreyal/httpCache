<?php

namespace App\Action;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use Doctrine\ORM\OptimisticLockException;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ActivationAction {
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function __invoke(Request $request): Response
    {
        $content = $request->getContent();

        try {
            $json = json_decode($content);
        } catch(\Exception $e) {
            throw new BadRequestException();
        }
        $email = $json->email;
        $token = $json->token;

        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email, 'token' => $token]);

        if(!$user) {
            throw new BadRequestException();
        }

        $user
            ->setToken('')
            ->setActivated(true);
        $this->entityManager->flush();
        return new JsonResponse();
    }
}
