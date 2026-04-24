import { Router } from 'express';
import { prisma } from '../lib/prisma';
import crypto from 'crypto';

/**
 * Sessions router — /api/v1/sessions
 * ...
 */
const router = Router();

// UC01 — Create a new conversation session
router.post('/', async (req, res, next) => {
  try {
    const { userId } = req.body;
    let targetUserId = userId;

    if (!targetUserId) {
      // New user path: generate pseudonymous profile, consent, and session in a transaction
      const identifier = crypto.randomUUID();
      
      const result = await prisma.$transaction(async (tx) => {
        const user = await tx.userProfile.create({
          data: { identifier }
        });

        await tx.consentRecord.create({
          data: {
            userId: user.userId,
            consentVersion: 'v1.0'
          }
        });

        const session = await tx.conversationSession.create({
          data: {
            userId: user.userId,
            status: 'OPEN'
          }
        });

        return { user, session };
      });

      return res.status(201).json({
        sessionId: result.session.sessionId,
        userId: result.user.userId,
        status: result.session.status
      });
    }

    // Existing user path (future use cases)
    const session = await prisma.conversationSession.create({
      data: { userId: targetUserId, status: 'OPEN' }
    });

    res.status(201).json({
      sessionId: session.sessionId,
      userId: targetUserId,
      status: session.status
    });
  } catch (err) {
    next(err);
  }
});

// UC08 — Close an active conversation session
router.put('/:id/close', (_req, res) => {
  res.status(501).json({ message: 'UC08 EndConversationSession — not yet implemented' });
});

// UC02 — Send a message for emotion analysis
router.post('/:id/messages', (_req, res) => {
  res.status(501).json({ message: 'UC02 SendMessageForAnalysis — not yet implemented' });
});

// UC09 — List messages in a session
router.get('/:id/messages', (_req, res) => {
  res.status(501).json({ message: 'UC09 ViewConversationHistory (messages) — not yet implemented' });
});

// UC10 — Submit feedback for a session
router.post('/:id/feedback', (_req, res) => {
  res.status(501).json({ message: 'UC10 ProvideSessionFeedback — not yet implemented' });
});

// UC10 — List feedback for a session
router.get('/:id/feedback', (_req, res) => {
  res.status(501).json({ message: 'UC10 list feedback — not yet implemented' });
});

// Get session by ID
router.get('/:id', (_req, res) => {
  res.status(501).json({ message: 'Get session by ID — not yet implemented' });
});

// Delete session (consent withdrawal)
router.delete('/:id', (_req, res) => {
  res.status(501).json({ message: 'Delete session — not yet implemented' });
});

export default router;
