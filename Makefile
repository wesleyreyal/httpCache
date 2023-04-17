PHONY: start-dev start-prod
.PHONY: help

help:
	@echo The possible commands :
	@echo start-dev  Run the application in dev
	@echo start-prod  Run the application in prod

DEV_STACK=docker compose -f docker-compose.yml -f

start-dev: ## Run the application in dev
	$(DEV_STACK) docker-compose.override.yml up -d

start-prod: ## Run the application in prod
	$(DEV_STACK) docker-compose.prod.yml up -d
