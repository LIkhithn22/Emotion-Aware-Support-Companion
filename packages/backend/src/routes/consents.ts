import { Router } from 'express';

/**
 * Consents router — /api/v1/consents
 * UC06 ViewConsentInformation
 */
const router = Router();

router.get('/:id', (_req, res) => {
  res.status(501).json({ message: 'Get consent record — not yet implemented' });
});

router.put('/:id', (_req, res) => {
  res.status(501).json({ message: 'Update consent record — not yet implemented' });
});

router.delete('/:id', (_req, res) => {
  res.status(501).json({ message: 'Delete consent record — not yet implemented' });
});

export default router;
