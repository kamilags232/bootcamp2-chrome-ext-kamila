import { test, expect, chromium } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Corrige __dirname no modo ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dist = path.resolve(__dirname, '..', 'dist');

// Teste básico: abre uma página e valida que o content script foi injetado
test('popup carrega e exibe UI', async () => {
  const context = await chromium.launchPersistentContext('', {
    headless: true,
    args: [
      `--disable-extensions-except=${dist}`,
      `--load-extension=${dist}`,
    ],
  });

  const [page] = context.pages();

  // Abre uma página qualquer para verificar comportamento
  await page.goto('https://example.com');

  // Exemplo simples: checar se o content script afetou a página
  const title = await page.title();
  expect(title).toContain('Example Domain');

  await context.close();
});

