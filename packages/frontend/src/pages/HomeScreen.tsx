import { useNavigate } from 'react-router-dom';

/**
 * HomeScreen — boundary object
 * UC01 InitiateConversation
 */
export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <main style={{ padding: '2rem', fontFamily: 'var(--font-family-base)' }} data-testid="home-screen">
      <h1>Emotion-Aware Support Companion</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
        Welcome to your supportive companion. This service helps you track and manage your emotional well-being.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <button 
          data-testid="start-btn" 
          onClick={() => navigate('/consent')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--color-primary-600)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            fontSize: 'var(--font-size-base)',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >
          Start Conversation
        </button>
      </div>
    </main>
  );
}
