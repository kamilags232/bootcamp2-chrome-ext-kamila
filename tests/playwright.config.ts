import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Corrige __dirname e __filename no modo ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho da extensão empacotada
const distPath = path.join(__dirname, '..', 'dist');

export default defineConfig({
  testDir: __dirname,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }]
  ],
  use: {
    headless: true,
  },
  projects: [
    {
      name: 'chromium-with-extension',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            `--disable-extensions-except=${distPath}`,
            `--load-extension=${distPath}`,
          ],
        },
      },
    },
  ],
});
