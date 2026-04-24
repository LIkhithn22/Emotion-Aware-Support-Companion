/**
 * UC01 — InitiateConversation step definitions (placeholder)
 *
 * Step definitions will be implemented here using Template 3 output.
 * Each step maps to a Gherkin line in UC01_InitiateConversation.feature.
 *
 * Tools used:
 *   - Playwright (this.page) for UI interactions
 *   - Prisma test client (getTestDb()) for DB assertions
 *
 * TODO: Implement in UC01 development phase.
 */
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getTestDb } from '../support/db';

Given('the Emotion-Aware Support Companion application is running', async function () {
  const response = await this.page.goto('/');
  expect(response?.ok()).toBeTruthy();
});

Given('the User has network connectivity', function () {
  // no-op for tests
});

Given('the User is on the home screen', async function () {
  await this.page.goto('/');
  await expect(this.page.getByTestId('home-screen')).toBeVisible();
});

When('the User selects {string}', async function (buttonName: string) {
  await this.page.getByRole('button', { name: buttonName }).click();
});

Then('a consent notice is displayed containing a non-clinical disclaimer', async function () {
  await expect(this.page.getByTestId('consent-screen')).toBeVisible();
  await expect(this.page.getByTestId('consent-text')).toContainText('NOT a clinical');
});

When('the User accepts the consent notice', async function () {
  await this.page.getByTestId('accept-btn').click();
  // Wait for navigation
  await this.page.waitForURL(/\/chat\/\d+/);
});

When('the User declines the consent notice', async function () {
  await this.page.getByTestId('decline-btn').click();
});

Then('the system creates a new pseudonymous user profile', async function () {
  const users = await getTestDb().userProfile.findMany();
  expect(users.length).toBe(1);
  expect(users[0].identifier).toBeDefined();
});

Then('the system records the consent agreement', async function () {
  const consents = await getTestDb().consentRecord.findMany();
  expect(consents.length).toBe(1);
});

Then('a new conversation session is created with status {string}', async function (status: string) {
  const sessions = await getTestDb().conversationSession.findMany();
  expect(sessions.length).toBe(1);
  expect(sessions[0].status).toBe(status);
});

Then('the chat interface is displayed ready for input', async function () {
  await expect(this.page.getByTestId('chat-container')).toBeVisible();
});

Then('no conversation session is created', async function () {
  const sessions = await getTestDb().conversationSession.findMany();
  expect(sessions.length).toBe(0);
});

Then('the User is returned to the home screen', async function () {
  await expect(this.page.getByTestId('home-screen')).toBeVisible();
});

When('the User navigates to the application', async function () {
  this.startTime = performance.now();
  await this.page.goto('/');
});

Then('the home screen should be fully rendered within {int} seconds', async function (seconds: number) {
  await expect(this.page.getByTestId('home-screen')).toBeVisible();
  const endTime = performance.now();
  const elapsed = (endTime - this.startTime) / 1000;
  expect(elapsed).toBeLessThanOrEqual(seconds);
});

Given('the User is viewing the consent notice', async function () {
  await this.page.goto('/consent');
  await expect(this.page.getByTestId('consent-screen')).toBeVisible();
});

When('the viewport width is set to {int} pixels', async function (width: number) {
  await this.page.setViewportSize({ width, height: 800 });
});

Then('the consent text must not require horizontal scrolling', async function () {
  const box = await this.page.getByTestId('consent-text').boundingBox();
  expect(box).not.toBeNull();
  expect(box!.width).toBeLessThanOrEqual(320); // Check that it fits in the 320px viewport
});
