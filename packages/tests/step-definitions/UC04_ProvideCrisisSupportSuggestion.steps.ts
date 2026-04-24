/**
 * UC04 — ProvideCrisisSupportSuggestion step definitions (placeholder)
 * TODO: Implement in UC04 development phase.
 */
import { Given, When, Then } from '@cucumber/cucumber';

Given('the conversation session is active', function () {
  // TODO: seed OPEN ConversationSession
});

Given('a User message has been received', function () {
  // TODO: seed user Message
});

Given('the User sends a message containing high-risk language', async function () {
  // TODO: fill chat input with crisis-trigger phrase
});

When('the safety rules engine analyses the message', async function () {
  // TODO: trigger message send + await response
});

Then('the message is flagged as potential crisis', async function () {
  // TODO: assert CrisisFlag row exists in test DB
});

Then('a crisis support suggestion is displayed to the User', async function () {
  // TODO: assert crisis banner visible in chat UI
});

Then('a CrisisFlag is recorded in the database', async function () {
  // TODO: assert CrisisFlag row with correct sessionId
});
