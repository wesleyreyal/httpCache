<?php
// src/Serializer/AdminContextBuilder.php
namespace App\Decorater;

use ApiPlatform\Exception\RuntimeException;
use ApiPlatform\Serializer\SerializerContextBuilderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

final class AdminContextBuilder implements SerializerContextBuilderInterface
{
    private SerializerContextBuilderInterface $decorated;
    private AuthorizationCheckerInterface $authorizationChecker;

    public function __construct(SerializerContextBuilderInterface $decorated, AuthorizationCheckerInterface $authorizationChecker)
    {
        $this->decorated = $decorated;
        $this->authorizationChecker = $authorizationChecker;
    }

    public function createFromRequest(Request $request, bool $normalization, ?array $extractedAttributes = null): array
    {

        $context = $this->decorated->createFromRequest($request, $normalization, $extractedAttributes);
        // Add `admin:update_user_normalization` for normalization requests
        // Otherwise, add `admin:update_user_denormalization` for denormalization requests


        if ($request->getMethod() == Request::METHOD_PATCH && $this->authorizationChecker->isGranted('ROLE_ADMIN')) {
            if(!is_array($context['groups'])) {
                $context['groups'] = [$context['groups']];
            }
            $context['groups'][] = $normalization ? 'admin:update_user_normalization' : 'admin:update_user_denormalization';
        }

        return $context;
    }
}