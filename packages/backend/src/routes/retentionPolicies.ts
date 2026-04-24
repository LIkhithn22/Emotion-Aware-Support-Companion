import { Router } from 'express';

/**
 * Retention policies router — /api/v1/retention-policies
 * UC07 ManagePrivacyPreferences (policy-driven data retention)
 */
const router = Router();

router.post('/', (_req, res) => {
  res.status(501).json({ message: 'Create retention policy — not yet implemented' });
});

router.get('/:id', (_req, res) => {
  res.status(501).json({ message: 'Get retention policy — not yet implemented' });
});

router.get('/', (_req, res) => {
  res.status(501).json({ message: 'List retention policies — not yet implemented' });
});

router.put('/:id', (_req, res) => {
  res.status(501).json({ message: 'Update retention policy — not yet implemented' });
});

router.delete('/:id', (_req, res) => {
  res.status(501).json({ message: 'Delete retention policy — not yet implemented' });
});

export default router;
