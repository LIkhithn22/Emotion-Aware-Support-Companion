import { Router } from 'express';
import sessionsRouter from './sessions';
import messagesRouter from './messages';
import usersRouter from './users';
import emotionsRouter from './emotions';
import crisisFlagsRouter from './crisisFlags';
import consentsRouter from './consents';
import feedbackRouter from './feedback';
import auditLogsRouter from './auditLogs';
import retentionPoliciesRouter from './retentionPolicies';

export const router = Router();

// ── Route mounts ──────────────────────────────────────────────────────────────
// Each sub-router maps to the REST API design in the project proposal.
// Routes are stub-only until the corresponding use case is implemented.

router.use('/sessions', sessionsRouter);           // UC01, UC02, UC03, UC04, UC05, UC08, UC10
router.use('/messages', messagesRouter);           // UC02, UC03
router.use('/users', usersRouter);                 // UC01, UC06, UC07, UC09
router.use('/emotions', emotionsRouter);           // UC02, UC03, UC05
router.use('/crisis-flags', crisisFlagsRouter);    // UC04
router.use('/consents', consentsRouter);           // UC06
router.use('/feedback', feedbackRouter);           // UC10
router.use('/audit-logs', auditLogsRouter);        // System-wide audit
router.use('/retention-policies', retentionPoliciesRouter); // UC07
