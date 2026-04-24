import { Router } from 'express';

/**
 * Feedback router — /api/v1/feedback
 * UC10 ProvideSessionFeedback
 */
const router = Router();

router.get('/:id', (_req, res) => {
  res.status(501).json({ message: 'Get feedback entry — not yet implemented' });
});

router.put('/:id', (_req, res) => {
  res.status(501).json({ message: 'Update feedback entry — not yet implemented' });
});

router.delete('/:id', (_req, res) => {
  res.status(501).json({ message: 'Delete feedback entry — not yet implemented' });
});

export default router;
