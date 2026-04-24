/**
 * Cucumber global hooks — Before / After / BeforeAll / AfterAll
 *
 * Manages:
 *   - Playwright browser lifecycle (one browser per test run)
 *   - Test database reset before each scenario (Rule 2 of methodology)
 *   - Prisma client disconnect after all tests
 *
 * TODO: Add UC-specific seeding hooks as each UC is implemented.
 *       Each UC seed will be tagged so only relevant fixtures are loaded.
 */
import './world.d';  // ensure World augmentation is loaded
import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, type Browser } from 'playwright';
import { resetTestDatabase, disconnectTestDb } from './db';
import 'dotenv/config';

// Generous timeout for UI interactions
setDefaultTimeout(30_000);

let browser: Browser;

// ── Browser lifecycle ─────────────────────────────────────────────────────────
BeforeAll(async () => {
  browser = await chromium.launch({ headless: true });
});

AfterAll(async () => {
  await browser?.close();
  await disconnectTestDb();
});

// ── Per-scenario setup ────────────────────────────────────────────────────────
Before(async function () {
  // Reset test DB to clean state before every scenario
  await resetTestDatabase();

  // Create a fresh Playwright browser context and page for each scenario
  this.context = await browser.newContext({
    baseURL: process.env.FRONTEND_URL ?? 'http://localhost:5173',
  });
  this.page = await this.context.newPage();
});

// ── Per-scenario teardown ─────────────────────────────────────────────────────
After(async function (scenario) {
  // Capture a full-page screenshot on failure for debugging
  if (scenario.result?.status === 'FAILED' && this.page) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    this.attach(screenshot, 'image/png');
  }
  await this.context?.close();
});
