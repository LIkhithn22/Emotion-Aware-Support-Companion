/**
 * UC05 — RequestClarification step definitions (placeholder)
 * TODO: Implement in UC05 development phase.
 */
import { Given, When, Then } from '@cucumber/cucumber';

Given('the emotion analysis result has confidence below {float}', function (_threshold: number) {
  // TODO: seed EmotionRecord with confidenceScore < _threshold
});

When('the system processes the low-confidence result', async function () {
  // TODO: trigger analysis pipeline
});

Then('a clarification question is displayed to the User', async function () {
  // TODO: assert clarification message visible in chat UI
});

Then('the clarification interaction is recorded in the conversation history', async function () {
  // TODO: assert SYSTEM clarification Message row in DB
});
