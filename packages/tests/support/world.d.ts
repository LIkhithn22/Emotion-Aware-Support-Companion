/**
 * Cucumber World type augmentation.
 *
 * Extends the default Cucumber World with the Playwright browser context
 * and page that are attached to `this` in Before/After hooks.
 *
 * Without this file, VS Code (and strict TypeScript) report:
 *   "Property 'page' does not exist on type 'World'"
 *   "Property 'context' does not exist on type 'World'"
 */
import type { BrowserContext, Page } from 'playwright';
import { World } from '@cucumber/cucumber';

declare module '@cucumber/cucumber' {
  interface World {
    /** Playwright Page — created fresh for each scenario in Before hook */
    page: Page;
    /** Playwright BrowserContext — created fresh for each scenario */
    context: BrowserContext;
  }
}

export {};
