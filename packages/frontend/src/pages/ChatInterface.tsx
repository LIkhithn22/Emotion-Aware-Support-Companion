import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sendMessage } from '../api/messages';

interface Message {
  id: string | number;
  content: string;
  senderRole: 'USER' | 'SYSTEM';
}

/**
 * ChatInterface — boundary object
 * UC02 SendMessageForAnalysis
 */
export default function ChatInterface() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isSending) return;

    const content = input.trim();
    const tempId = Date.now();
    
    // Optimistic UI update
    setMessages(prev => [...prev, { id: tempId, content, senderRole: 'USER' }]);
    setInput('');
    setIsSending(true);

    try {
      // Actually send to backend (UC02/UC03)
      const savedMessages = await sendMessage(Number(sessionId), content);
      
      // Update the temp message with real ID, and append the SYSTEM message
      setMessages(prev => {
        const userMsgUpdated = prev.map(msg => 
          msg.id === tempId ? { ...msg, id: savedMessages[0].messageId } : msg
        );
        return [...userMsgUpdated, {
          id: savedMessages[1].messageId,
          content: savedMessages[1].content,
          senderRole: savedMessages[1].senderRole
        }];
      });
    } catch (err) {
      console.error('Failed to send message:', err);
      // Revert optimistic update on failure
      setMessages(prev => prev.filter(msg => msg.id !== tempId));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'var(--font-family-base)', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1>Chat Session {sessionId}</h1>
      
      <div 
        data-testid="message-list"
        style={{ 
          flex: 1, 
          overflowY: 'auto', 
          border: '1px solid var(--color-border)', 
          borderRadius: 'var(--radius-md)', 
          padding: '1rem',
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {messages.length === 0 && (
          <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center' }}>
            Session is open. Ready for input.
          </p>
        )}
        {messages.map(msg => (
          <div 
            key={msg.id} 
            data-testid="message-bubble"
            style={{
              alignSelf: msg.senderRole === 'USER' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.senderRole === 'USER' ? 'var(--color-primary-600)' : 'var(--color-surface-raised)',
              color: msg.senderRole === 'USER' ? 'white' : 'var(--color-text)',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              maxWidth: '80%',
              wordWrap: 'break-word'
            }}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} style={{ display: 'flex', gap: '0.5rem' }}>
        <input 
          type="text" 
          data-testid="message-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: '0.75rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)'
          }}
        />
        <button 
          type="submit" 
          data-testid="send-btn"
          disabled={!input.trim() || isSending}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--color-primary-600)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            cursor: (!input.trim() || isSending) ? 'not-allowed' : 'pointer',
            opacity: (!input.trim() || isSending) ? 0.6 : 1
          }}
        >
          Send
        </button>
      </form>
    </main>
  );
}
