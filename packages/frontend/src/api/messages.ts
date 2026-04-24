/**
 * Messages API module — stub
 *
 * UC02 SendMessageForAnalysis — sendMessage
 * UC09 ViewConversationHistory — listMessages
 *
 * TODO: Implement as each UC is developed.
 */
import { apiClient } from './client';

export async function sendMessage(_sessionId: number, _content: string) {
  // UC02 — POST /api/v1/sessions/:id/messages
  const res = await apiClient.post(`/sessions/${_sessionId}/messages`, {
    content: _content,
    senderType: 'USER',
  });
  return res.data;
}

export async function listMessages(_sessionId: number) {
  // UC09 — GET /api/v1/sessions/:id/messages
  const res = await apiClient.get(`/sessions/${_sessionId}/messages`);
  return res.data;
}
