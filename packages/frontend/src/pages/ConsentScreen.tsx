import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { createSession } from '../api/sessions';

/**
 * ConsentScreen — boundary object
 * UC01 InitiateConversation
 */
export default function ConsentScreen() {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAccept = async () => {
    setLoading(true);
    setError(null);
    try {
      // Create session via backend API. New users start with no userId.
      const data = await createSession(null as any); 
      dispatch({ type: 'SET_USER', userId: data.userId });
      dispatch({ type: 'SET_SESSION', sessionId: data.sessionId });
      navigate(`/chat/${data.sessionId}`);
    } catch (err) {
      console.error(err);
      setError('Failed to create session. Please try again.');
      setLoading(false);
    }
  };

  const handleDecline = () => {
    navigate('/');
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'var(--font-family-base)' }} data-testid="consent-screen">
      <h1>Data &amp; Consent</h1>
      
      {error && <div style={{ color: 'var(--color-danger-500)', marginBottom: '1rem' }}>{error}</div>}

      <div 
        data-testid="consent-text"
        style={{
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: 'var(--color-surface-raised)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          width: '100%',
          maxWidth: '600px',
          wordWrap: 'break-word'
        }}
      >
        <strong>Disclaimer:</strong> This Emotion-Aware Support Companion is an automated tool designed for emotional tracking and support. It is <strong>NOT</strong> a clinical or medical service and cannot provide professional medical advice, diagnosis, or treatment. If you are in crisis, please contact emergency services immediately. By proceeding, you consent to the processing of your conversation data for emotion analysis.
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <button 
          data-testid="accept-btn" 
          onClick={handleAccept}
          disabled={loading}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--color-primary-600)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Starting...' : 'I Accept'}
        </button>
        <button 
          data-testid="decline-btn" 
          onClick={handleDecline}
          disabled={loading}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            color: 'var(--color-text-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          Decline
        </button>
      </div>
    </main>
  );
}
