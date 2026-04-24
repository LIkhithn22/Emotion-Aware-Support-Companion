# UC02 — SendMessageForAnalysis
#
# Feature file placeholder.
# Gherkin scenarios will be generated here using Template 1 of the methodology.
#
# Actors:           User, EmotionAwareSupportCompanion
# Boundary objects: ChatInterface
# Entity objects:   Message, EmotionRecord, ConversationSession
# Services:         EmotionAnalysisComponent (rule-based classifier)
#
# Quality requirements:
#   - Message forwarded for analysis within 1 second
#   - No truncation or modification of user text
#
# TODO: Replace this placeholder with Template 1 output for UC02.

@UC02
Feature: Send Message For Analysis

  Background:
    Given there is an active conversation session for the User
    And the chat interface is visible

  Scenario: UC02-S01 User sends a message for emotion analysis (placeholder)
    Given the User is on the chat interface
    When the User enters a message describing their feelings
    And the User selects "Send"
    Then the message is stored in the conversation history
    And the EmotionAnalysisComponent is requested to analyse the message
    # TODO: complete with Template 1 acceptance contract
