/**
 * Users API module — stub
 *
 * UC01 InitiateConversation — createUser
 * UC06 ViewConsentInformation — getConsentRecords, createConsentRecord
 * UC07 ManagePrivacyPreferences — getPrivacySettings, updatePrivacySettings
 *
 * TODO: Implement as each UC is developed.
 */
import { apiClient } from './client';

export async function createUser(_identifier: string) {
  // UC01 — POST /api/v1/users
  const res = await apiClient.post('/users', { identifier: _identifier });
  return res.data;
}

export async function getPrivacySettings(_userId: number) {
  // UC07 — GET /api/v1/users/:id/privacy-settings
  const res = await apiClient.get(`/users/${_userId}/privacy-settings`);
  return res.data;
}

export async function updatePrivacySettings(_userId: number, _settings: object) {
  // UC07 — PUT /api/v1/users/:id/privacy-settings
  const res = await apiClient.put(`/users/${_userId}/privacy-settings`, _settings);
  return res.data;
}

export async function getConsentRecords(_userId: number) {
  // UC06 — GET /api/v1/users/:id/consents
  const res = await apiClient.get(`/users/${_userId}/consents`);
  return res.data;
}

export async function createConsentRecord(_userId: number, _version: string) {
  // UC06 — POST /api/v1/users/:id/consents
  const res = await apiClient.post(`/users/${_userId}/consents`, {
    consentVersion: _version,
  });
  return res.data;
}
