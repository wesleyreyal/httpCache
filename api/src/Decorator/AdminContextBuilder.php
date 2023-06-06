<?php

declare(strict_types=1);

namespace App\Decorator;

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

    /**
     * @param array<mixed>|null $extractedAttributes
     * @return array<mixed>
     */
    public function createFromRequest(Request $request, bool $normalization, $extractedAttributes = null): array
    {
        $context = $this->decorated->createFromRequest($request, $normalization, $extractedAttributes);
        if ($request->getMethod() == Request::METHOD_PATCH && $this->authorizationChecker->isGranted('ROLE_ADMIN')) {
            if (!is_array($context['groups'])) {
                $context['groups'] = [$context['groups']];
            }
            // Add `admin:update_user_normalization` for normalization requests
            // Otherwise, add `admin:update_user_denormalization` for denormalization requests
            $context['groups'][] = $normalization ? 'admin:create_update_user_normalization' : 'admin:create_update_user_denormalization';
        }

        return $context;
    }
}
