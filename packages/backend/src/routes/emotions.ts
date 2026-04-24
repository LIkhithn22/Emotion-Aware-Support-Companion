import { Router } from 'express';

/**
 * Emotions router — /api/v1/emotions
 *
 * Covers:
 *   UC02 SendMessageForAnalysis  GET/PUT/DELETE /api/v1/emotions/:id
 *   UC04 ProvideCrisisSupportSuggestion  POST /api/v1/emotions/:id/crisis-flags
 *
 * TODO: Implement handlers as each UC is developed.
 */
const router = Router();

router.get('/:id', (_req, res) => {
  res.status(501).json({ message: 'Get emotion record — not yet implemented' });
});

router.put('/:id', (_req, res) => {
  res.status(501).json({ message: 'Update emotion record — not yet implemented' });
});

router.delete('/:id', (_req, res) => {
  res.status(501).json({ message: 'Delete emotion record — not yet implemented' });
});

// UC04 — Create crisis flag for an emotion record
router.post('/:id/crisis-flags', (_req, res) => {
  res.status(501).json({ message: 'UC04 ProvideCrisisSupportSuggestion — not yet implemented' });
});

// UC04 — List crisis flags for an emotion record
router.get('/:id/crisis-flags', (_req, res) => {
  res.status(501).json({ message: 'UC04 list crisis flags — not yet implemented' });
});

export default router;
