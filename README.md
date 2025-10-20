# My Chrome Extension — E2E + CI

## Como rodar localmente (sem Docker)
1. `npm ci`
2. `npm run build`
3. `npx playwright test --reporter=list,html`
4. Relatório em `playwright-report/`. Abra com `npx playwright show-report`.

## Rodar com Docker Compose
1. `docker compose build`
2. `docker compose run --rm e2e`
O container executa `npm run test:e2e` por padrão.

## O que a pipeline faz (GitHub Actions)
- Instala dependências e Playwright
- Roda `npm run build` (gera `dist/extension.zip`)
- Roda testes E2E com Playwright (HTML report em `playwright-report`)
- Publica artefatos: `playwright-report` e `dist/extension.zip`
- Se você criar uma tag `vX.Y.Z`, a workflow cria uma GitHub Release com o zip.

## Observações
- Ajuste `tests/extension.spec.ts` para refletir como sua extensão funciona (content script, opções, popup).
- Em ambientes CI rodamos headless. Localmente pode trocar `headless: false`.
>>>>>>> f35746d (Entrega II - Extensão + Docker + CI)
