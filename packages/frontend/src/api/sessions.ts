/**
 * Sessions API module — stub
 *
 * UC01 InitiateConversation  — createSession
 * UC08 EndConversationSession — closeSession
 * UC09 ViewConversationHistory — listUserSessions
 *
 * TODO: Implement functions as each UC is developed.
 */
import { apiClient } from './client';

export async function createSession(userId?: number) {
  // UC01 — POST /api/v1/sessions
  const res = await apiClient.post('/sessions', { userId });
  return res.data;
}

export async function closeSession(_sessionId: number) {
  // UC08 — PUT /api/v1/sessions/:id/close
  const res = await apiClient.put(`/sessions/${_sessionId}/close`);
  return res.data;
}

export async function listUserSessions(_userId: number) {
  // UC09 — GET /api/v1/users/:id/sessions
  const res = await apiClient.get(`/users/${_userId}/sessions`);
  return res.data;
}

export async function getSession(_sessionId: number) {
  const res = await apiClient.get(`/sessions/${_sessionId}`);
  return res.data;
}
