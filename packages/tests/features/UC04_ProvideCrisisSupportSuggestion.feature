# UC04 — ProvideCrisisSupportSuggestion
#
# Feature file placeholder.
# Gherkin scenarios will be generated here using Template 1 of the methodology.
#
# Actors:           EmotionAwareSupportCompanion, User
# Boundary objects: ChatInterface
# Entity objects:   EmotionRecord, CrisisFlag, Message
# Services:         CrisisDetection (rule-based keyword engine)
#
# Quality requirements:
#   - Crisis checks executed for EVERY user message
#   - Crisis suggestions must never provide clinical diagnoses or self-harm instructions
#
# TODO: Replace this placeholder with Template 1 output for UC04.

@UC04
Feature: Provide Crisis Support Suggestion

  Background:
    Given the conversation session is active
    And a User message has been received

  Scenario: UC04-S01 System detects high-risk language and provides crisis guidance (placeholder)
    Given the User sends a message containing high-risk language
    When the safety rules engine analyses the message
    Then the message is flagged as potential crisis
    And a crisis support suggestion is displayed to the User
    And a CrisisFlag is recorded in the database
    # TODO: complete with Template 1 acceptance contract
