.PHONY: delete-migrations fixtures generate-migration migrate reset-db start-dev start-prod analyze psalm

DC=docker compose -f docker-compose.yml -f docker-compose.override.yml
BIN_CONSOLE=$(DC) exec php bin/console

delete-migrations:
	$(DC) exec database psql -U app app -c "delete from doctrine_migration_versions"

fixtures:
	$(BIN_CONSOLE) do:fi:lo --quiet

generate-migration:
	$(BIN_CONSOLE) make:migration

migrate:
	$(BIN_CONSOLE) do:mi:mi --quiet

start-dev: ## Run the application in dev
	$(DC) up -d

start-prod: ## Run the application in prod
	$(DC) docker-compose.prod.yml up -d

reset-db:
	$(BIN_CONSOLE) do:da:dr --force
	$(BIN_CONSOLE) do:da:cr
	$(MAKE) migrate fixtures

analyze: ## Run the phpstan analyze
	docker compose exec php vendor/bin/phpstan analyze -c phpstan.neon src

psalm:
	docker compose exec php ./vendor/bin/psalm --show-info=true
