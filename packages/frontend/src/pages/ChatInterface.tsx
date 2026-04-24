import { useParams } from 'react-router-dom';

/**
 * ChatInterface — boundary object
 * UC02 SendMessageForAnalysis
 * UC03 GenerateSupportiveResponse
 * UC04 ProvideCrisisSupportSuggestion
 * UC05 RequestClarification
 * UC08 EndConversationSession
 */
export default function ChatInterface() {
  const { sessionId } = useParams<{ sessionId: string }>();

  return (
    <main style={{ padding: '2rem', fontFamily: 'var(--font-family-base)' }} data-testid="chat-container">
      <h1>Chat Session {sessionId}</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
        Session is open. Ready for input.
      </p>
    </main>
  );
}
