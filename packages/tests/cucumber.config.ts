import { defineConfig } from '@cucumber/cucumber';

export default defineConfig({
  // Feature files — one directory per UC keeps the suite organised
  paths: ['features/**/*.feature'],

  // Step definitions — loaded from per-UC files
  requireModule: ['tsx/cjs'],
  require: ['step-definitions/**/*.ts', 'support/**/*.ts'],

  // Tags are used to run a single UC at a time (npm run test:uc01, etc.)
  // No --tags flag = run all UCs

  // Output format
  format: [
    'progress-bar',
    'html:test-results/report.html',
    'json:test-results/report.json',
  ],

  // Stop immediately on first failure during a repair loop
  failFast: false,

  // Each scenario gets a fresh browser context via Playwright hooks in support/hooks.ts
  parallel: 1,
});
