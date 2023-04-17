PHONY: start-dev start-prod
.PHONY: help

help:
	@grep -E '(^[0-9a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-25s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/
DEV_STACK=docker compose -f docker-compose.yml -f

start-dev: ## Run the application in dev
	$(DEV_STACK) docker-compose.override.yml up -d

start-prod: ## Run the application in prod
	$(DEV_STACK) docker-compose.prod.yml up -d
