.PHONY: dev stop logs build

dev:
	pm2 start ecosystem.config.cjs

stop:
	pm2 delete ecosystem.config.cjs 2>/dev/null || true

logs:
	pm2 logs phlo-web

build:
	cd web && npm run build
