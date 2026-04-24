/**
 * FeedbackFormUI — boundary object stub
 *
 * UC10 ProvideSessionFeedback
 *
 * Short feedback form with Likert-scale questions on:
 *   - Usability (1–5)
 *   - Trust (1–5)
 *   - Perceived Empathy (1–5)
 *   - Optional free-text comment
 *
 * Displayed automatically after EndConversationSession,
 * or accessible on demand from the menu.
 *
 * TODO: Implement in UC10 development phase.
 */
import { useParams } from 'react-router-dom';

export default function FeedbackFormUI() {
  const { sessionId } = useParams<{ sessionId: string }>();

  return (
    <main style={{ padding: '2rem', fontFamily: 'var(--font-family-base)' }}>
      <h1>Session Feedback</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
        FeedbackFormUI — session {sessionId} — UC10 ProvideSessionFeedback (not yet implemented)
      </p>
    </main>
  );
}
