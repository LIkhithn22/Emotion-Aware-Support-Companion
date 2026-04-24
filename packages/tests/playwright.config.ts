import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config — used for browser-layer acceptance steps.
 * The main test runner is Cucumber.js; this config is referenced
 * by support/hooks.ts to launch/close browser instances.
 */
export default defineConfig({
  testDir: './features',
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: process.env.FRONTEND_URL ?? 'http://localhost:5173',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  outputDir: 'test-results/',
});
