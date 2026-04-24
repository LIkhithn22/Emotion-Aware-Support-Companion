import { Router } from 'express';

/**
 * Crisis flags router — /api/v1/crisis-flags
 * UC04 ProvideCrisisSupportSuggestion
 */
const router = Router();

router.get('/:id', (_req, res) => {
  res.status(501).json({ message: 'Get crisis flag — not yet implemented' });
});

router.put('/:id', (_req, res) => {
  res.status(501).json({ message: 'Update crisis flag — not yet implemented' });
});

router.delete('/:id', (_req, res) => {
  res.status(501).json({ message: 'Delete crisis flag — not yet implemented' });
});

export default router;
