import { Router } from 'express';

/**
 * Messages router — /api/v1/messages
 *
 * Covers:
 *   UC02 SendMessageForAnalysis     GET/PUT/DELETE /api/v1/messages/:id
 *   UC03 GenerateSupportiveResponse (response is a Message created by the system)
 *
 * TODO: Implement handlers as each UC is developed.
 */
const router = Router();

router.get('/:id', (_req, res) => {
  res.status(501).json({ message: 'Get message by ID — not yet implemented' });
});

router.put('/:id', (_req, res) => {
  res.status(501).json({ message: 'Update message — not yet implemented' });
});

router.delete('/:id', (_req, res) => {
  res.status(501).json({ message: 'Delete message — not yet implemented' });
});

// UC02/UC03 — List emotion records for a message
router.get('/:id/emotions', (_req, res) => {
  res.status(501).json({ message: 'List emotion records — not yet implemented' });
});

// UC02 — Create emotion record for a message
router.post('/:id/emotions', (_req, res) => {
  res.status(501).json({ message: 'Create emotion record — not yet implemented' });
});

export default router;
