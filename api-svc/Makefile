.PHONY: up down logs ps

up:
	docker compose -f build/docker-compose.yml up --build

down:
	docker compose -f build/docker-compose.yml down

logs:
	docker compose -f build/docker-compose.yml logs -f

migrate:
	docker compose -f build/docker-compose.yml exec api-svc npx prisma migrate dev

ps:
	docker compose -f build/docker-compose.yml ps