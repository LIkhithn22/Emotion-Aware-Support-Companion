/**
 * UC08 — EndConversationSession step definitions (placeholder)
 * TODO: Implement in UC08 development phase.
 */
import { Given, When, Then } from '@cucumber/cucumber';

Given('there is an active conversation session', function () {
  // TODO: seed OPEN ConversationSession
});

Given('the chat interface is open', async function () {
  // TODO: navigate to /chat/:sessionId
});

Given('the User is in an active chat session', async function () {
  // TODO: navigate to chat page with open session
});

Then('a closing message is displayed', async function () {
  // TODO: assert closing message visible
});

Then('the session status is set to {string}', async function (_status: string) {
  // TODO: query getTestDb().conversationSession and assert status
});

Then('no further messages are accepted for the closed session', async function () {
  // TODO: attempt to send message, assert error or redirect
});

Then('the User is returned to the home screen', async function () {
  // TODO: assert page URL is '/'
});
