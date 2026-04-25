import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getTestDb } from '../support/db';

// UC03 Background
Given('the User has just sent a message that was analyzed', async function () {
  // We use the UI to send the initial message to set up the state
  await this.page.getByTestId('message-input').fill('I am just setting up the background state.');
  await this.page.getByTestId('send-btn').click();
  // Wait for the system response to appear to ensure the turn is complete
  await expect(this.page.getByTestId('message-bubble').filter({ hasText: "I'm here for you." })).toBeVisible();
});

// Scenario 1: SAD
When('the EmotionAnalysisComponent returns the emotion {string}', async function (emotion: string) {
  this.emotion = emotion;
  // We trigger the deterministic backend logic by typing a keyword
  let triggerText = '';
  if (emotion === 'SAD') {
    triggerText = 'I am feeling very sad today.';
  } else if (emotion === 'ANGRY') {
    triggerText = 'I am extremely angry and want to yell!';
  } else {
    triggerText = 'Just normal.';
  }

  this.startTime = performance.now();
  await this.page.getByTestId('message-input').fill(triggerText);
  await this.page.getByTestId('send-btn').click();
});

Then('the system composes a supportive response template for {string}', async function (emotion: string) {
  let expectedResponse = '';
  if (emotion === 'SAD') {
    expectedResponse = "I'm so sorry you're feeling that way. I'm here to listen.";
  }
  this.expectedResponse = expectedResponse;
});

Then('the safety guardrail approves the response', function () {
  // Implicitly validated if the expectedResponse is what gets saved, rather than the fallback.
});

Then('the system saves the response to the database as a SYSTEM message', async function () {
  // Give a brief moment for DB to persist
  await new Promise(r => setTimeout(r, 200));

  const systemMessages = await getTestDb().message.findMany({
    where: { 
      sessionId: this.testSessionId,
      senderRole: 'SYSTEM'
    },
    orderBy: { messageId: 'desc' },
    take: 1
  });

  expect(systemMessages.length).toBe(1);
  expect(systemMessages[0].content).toBe(this.expectedResponse);
});

Then('the response appears in the user\'s chat interface', async function () {
  const bubble = this.page.getByTestId('message-bubble').filter({ hasText: this.expectedResponse }).last();
  await expect(bubble).toBeVisible();
});

// Scenario 2: ANGRY & Fallback
When('the system composes a response that fails the safety guardrail', function () {
  // The deterministic stub fails safety when emotion is ANGRY and text contains 'yell'.
});

Then('the system replaces the response with a safe fallback message', function () {
  this.expectedResponse = "I am here to support you, but please remember I am an AI. Let's focus on what you're comfortable sharing.";
});

Then('the system saves the fallback message to the database as a SYSTEM message', async function () {
  await new Promise(r => setTimeout(r, 200));

  const systemMessages = await getTestDb().message.findMany({
    where: { 
      sessionId: this.testSessionId,
      senderRole: 'SYSTEM'
    },
    orderBy: { messageId: 'desc' },
    take: 1
  });

  expect(systemMessages.length).toBe(1);
  expect(systemMessages[0].content).toBe(this.expectedResponse);
});

Then('the fallback message appears in the user\'s chat interface', async function () {
  const bubble = this.page.getByTestId('message-bubble').filter({ hasText: this.expectedResponse }).last();
  await expect(bubble).toBeVisible();
});

// Performance
Then('the system\'s supportive response must appear within {float} seconds', async function (seconds: number) {
  // Wait for any system message to appear after the user message
  const bubble = this.page.getByTestId('message-bubble').last();
  await expect(bubble).toBeVisible();
  
  const endTime = performance.now();
  const elapsed = (endTime - this.startTime) / 1000;
  expect(elapsed).toBeLessThanOrEqual(seconds);
});
