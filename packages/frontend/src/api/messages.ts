/**
 * Messages API module — stub
 *
 * UC02 SendMessageForAnalysis — sendMessage
 * UC09 ViewConversationHistory — listMessages
 *
 * TODO: Implement as each UC is developed.
 */
import { apiClient } from './client';

export async function sendMessage(sessionId: number, content: string) {
  // UC02/UC03 — POST /api/v1/sessions/:id/messages
  const res = await apiClient.post(`/sessions/${sessionId}/messages`, {
    content,
    senderRole: 'USER', // Match the backend requirement
  });
  // Expecting an array: [userMessage, systemMessage]
  return res.data;
}

export async function listMessages(_sessionId: number) {
  // UC09 — GET /api/v1/sessions/:id/messages
  const res = await apiClient.get(`/sessions/${_sessionId}/messages`);
  return res.data;
}
