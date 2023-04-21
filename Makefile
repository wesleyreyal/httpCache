.PHONY: start-dev start-prod delete-migrations fixtures reset-db make-migrations

DEV_STACK=docker compose -f docker-compose.yml -f
PHP_DB=$(DEV_STACK) docker-compose.override.yml exec php bin/console

start-dev: ## Run the application in dev
	$(DEV_STACK) docker-compose.override.yml up -d

start-prod: ## Run the application in prod
	$(DEV_STACK) docker-compose.prod.yml up -d

delete-migrations:
	$(DEV_STACK) docker-compose.override.yml exec database psql -U app app -c "delete from doctrine_migration_versions"

make-migrations:
	$(PHP_DB) make:migration

reset-db:
	$(PHP_DB) do:da:dr --force
	$(PHP_DB) do:da:cr
##$(PHP_DB) do:mi:mi --quiet
##$(PHP_DB) do:fi:lo --quiet
