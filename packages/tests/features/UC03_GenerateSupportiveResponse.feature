@UC03
Feature: Generate Supportive Response
  As a User seeking emotional support
  I want the system to reply with a comforting and safe message
  So that I feel heard and supported without receiving harmful advice

  Background:
    Given the User has an active conversation session
    And the User has just sent a message that was analyzed

  Scenario: UC03-S01 System generates a safe supportive response
    When the EmotionAnalysisComponent returns the emotion "SAD"
    Then the system composes a supportive response template for "SAD"
    And the safety guardrail approves the response
    And the system saves the response to the database as a SYSTEM message
    And the response appears in the user's chat interface

  Scenario: UC03-S02 System intercepts an unsafe response and provides a fallback
    When the EmotionAnalysisComponent returns the emotion "ANGRY"
    And the system composes a response that fails the safety guardrail
    Then the system replaces the response with a safe fallback message
    And the system saves the fallback message to the database as a SYSTEM message
    And the fallback message appears in the user's chat interface

  @performance
  Scenario: UC03-S03 Response generation meets performance budget
    When the User sends a message
    Then the system's supportive response must appear within 1.5 seconds
