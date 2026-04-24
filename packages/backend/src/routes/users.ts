import { Router } from 'express';

/**
 * Users router — /api/v1/users
 *
 * Covers:
 *   UC01 InitiateConversation     POST /api/v1/users
 *   UC06 ViewConsentInformation   GET  /api/v1/users/:id/consents
 *   UC07 ManagePrivacyPreferences GET/PUT /api/v1/users/:id/privacy-settings
 *   UC09 ViewConversationHistory  GET  /api/v1/users/:id/sessions
 *
 * TODO: Implement handlers as each UC is developed.
 */
const router = Router();

// Create user (UC01)
router.post('/', (_req, res) => {
  res.status(501).json({ message: 'Create user — not yet implemented' });
});

// Get user by ID
router.get('/:id', (_req, res) => {
  res.status(501).json({ message: 'Get user — not yet implemented' });
});

// Update user
router.put('/:id', (_req, res) => {
  res.status(501).json({ message: 'Update user — not yet implemented' });
});

// Delete user
router.delete('/:id', (_req, res) => {
  res.status(501).json({ message: 'Delete user — not yet implemented' });
});

// UC09 — List sessions for a user
router.get('/:id/sessions', (_req, res) => {
  res.status(501).json({ message: 'UC09 ViewConversationHistory — not yet implemented' });
});

// UC06 — List consent records for a user
router.get('/:id/consents', (_req, res) => {
  res.status(501).json({ message: 'UC06 ViewConsentInformation — not yet implemented' });
});

// UC06 — Create consent record
router.post('/:id/consents', (_req, res) => {
  res.status(501).json({ message: 'UC06 Create consent record — not yet implemented' });
});

// UC07 — Get privacy settings
router.get('/:id/privacy-settings', (_req, res) => {
  res.status(501).json({ message: 'UC07 ManagePrivacyPreferences (GET) — not yet implemented' });
});

// UC07 — Create privacy settings
router.post('/:id/privacy-settings', (_req, res) => {
  res.status(501).json({ message: 'UC07 ManagePrivacyPreferences (POST) — not yet implemented' });
});

// UC07 — Update privacy settings
router.put('/:id/privacy-settings', (_req, res) => {
  res.status(501).json({ message: 'UC07 ManagePrivacyPreferences (PUT) — not yet implemented' });
});

export default router;
