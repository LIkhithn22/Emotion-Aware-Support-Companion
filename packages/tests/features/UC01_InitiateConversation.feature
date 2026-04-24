@UC01
Feature: Initiate Conversation
  As a User seeking emotional support
  I want to start a new conversation and view the consent notice
  So that I understand the system's limitations and can begin chatting

  Background:
    Given the Emotion-Aware Support Companion application is running
    And the User has network connectivity

  Scenario: UC01-S01 User successfully starts a new conversation session
    Given the User is on the home screen
    When the User selects "Start Conversation"
    Then a consent notice is displayed containing a non-clinical disclaimer
    When the User accepts the consent notice
    Then the system creates a new pseudonymous user profile
    And the system records the consent agreement
    And a new conversation session is created with status "OPEN"
    And the chat interface is displayed ready for input

  Scenario: UC01-S02 User declines the consent notice
    Given the User is on the home screen
    When the User selects "Start Conversation"
    Then a consent notice is displayed containing a non-clinical disclaimer
    When the User declines the consent notice
    Then no conversation session is created
    And the User is returned to the home screen

  @performance
  Scenario: UC01-S03 Home screen loads within performance budget
    When the User navigates to the application
    Then the home screen should be fully rendered within 2 seconds

  @responsive
  Scenario: UC01-S04 Consent notice is readable on mobile viewports
    Given the User is viewing the consent notice
    When the viewport width is set to 320 pixels
    Then the consent text must not require horizontal scrolling
