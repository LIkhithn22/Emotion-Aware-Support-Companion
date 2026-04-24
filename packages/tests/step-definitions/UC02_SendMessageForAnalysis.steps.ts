/**
 * UC02 — SendMessageForAnalysis step definitions (placeholder)
 * TODO: Implement in UC02 development phase.
 */
import { Given, When, Then } from '@cucumber/cucumber';

Given('there is an active conversation session for the User', function () {
  // TODO: seed a ConversationSession with status OPEN
});

Given('the chat interface is visible', async function () {
  // TODO: await this.page.goto(`/chat/${this.sessionId}`);
});

Given('the User is on the chat interface', async function () {
  // TODO: navigate to chat page
});

When('the User enters a message describing their feelings', async function () {
  // TODO: await this.page.getByTestId('message-input').fill('I feel overwhelmed today');
});

Then('the message is stored in the conversation history', async function () {
  // TODO: query getTestDb().message.findFirst(...) and assert
});

Then('the EmotionAnalysisComponent is requested to analyse the message', async function () {
  // TODO: assert EmotionRecord row exists in DB or mock was called
});
