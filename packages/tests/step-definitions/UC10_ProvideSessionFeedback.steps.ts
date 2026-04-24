/**
 * UC10 — ProvideSessionFeedback step definitions (placeholder)
 * TODO: Implement in UC10 development phase.
 */
import { Given, When, Then } from '@cucumber/cucumber';

Given('a conversation session has ended', function () {
  // TODO: seed CLOSED ConversationSession
});

Given('feedback functionality is enabled', function () {
  // TODO: no-op — enabled by default
});

Given('the User is shown the feedback form', async function () {
  // TODO: navigate to /feedback/:sessionId
});

When('the User rates usability, trust, and empathy on Likert scales', async function () {
  // TODO: interact with rating inputs
});

When('the User submits the feedback form', async function () {
  // TODO: click Submit button
});

Then('a FeedbackEntry is stored in anonymised form', async function () {
  // TODO: query getTestDb().feedbackEntry and assert record exists
});
