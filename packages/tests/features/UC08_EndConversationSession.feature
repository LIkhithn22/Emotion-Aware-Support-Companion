# UC08 — EndConversationSession
#
# Feature file placeholder.
# Gherkin scenarios will be generated here using Template 1 of the methodology.
#
# Actors:           User, EmotionAwareSupportCompanion
# Boundary objects: ChatInterface, HomeScreen
# Entity objects:   ConversationSession
# Services:         SessionManager
#
# Quality requirements:
#   - Session closure must complete within 1 second
#   - No user messages sent after closure are stored under the closed session
#
# TODO: Replace this placeholder with Template 1 output for UC08.

@UC08
Feature: End Conversation Session

  Background:
    Given there is an active conversation session
    And the chat interface is open

  Scenario: UC08-S01 User ends a conversation session (placeholder)
    Given the User is in an active chat session
    When the User selects "End Session"
    Then a closing message is displayed
    And the session status is set to "CLOSED"
    And no further messages are accepted for the closed session
    And the User is returned to the home screen
    # TODO: complete with Template 1 acceptance contract
