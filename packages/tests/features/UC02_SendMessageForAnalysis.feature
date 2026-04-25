@UC02
Feature: Send Message For Analysis
  As a User engaged in a conversation
  I want to send a message describing my feelings
  So that the system can analyze my emotions and store the conversation

  Background:
    Given the User has an active conversation session
    And the User is viewing the chat interface

  Scenario: UC02-S01 User successfully sends a message
    When the User types "I am feeling a bit overwhelmed today." in the message input
    And the User clicks the Send button
    Then the message appears in the chat thread
    And the system saves the message to the database linked to the session
    And the message is forwarded to the EmotionAnalysisComponent

  Scenario: UC02-S02 User attempts to send an empty message
    When the User clicks the Send button without typing
    Then the message is not sent
    And no new message is saved to the database

  @performance
  Scenario: UC02-S03 Message analysis request meets performance budget
    When the User sends a valid message
    Then the message must be received and forwarded for analysis within 1 second

  @integrity
  Scenario: UC02-S04 Message text is preserved without truncation
    When the User sends a message containing special characters and emojis "Testing! @#% 😅"
    Then the database must store the exact text "Testing! @#% 😅" without modification
