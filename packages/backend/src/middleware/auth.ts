/**
 * Auth middleware — stub
 *
 * Validates JWT tokens for protected routes.
 * The system uses pseudonymous user identity (no mandatory PII).
 *
 * TODO: Implement in UC01 development phase.
 */
import type { Request, Response, NextFunction } from 'express';

export function requireAuth(_req: Request, _res: Response, next: NextFunction): void {
  // TODO: Implement JWT verification using express-jwt
  // For now, pass through to allow UC scaffold to be tested unauthenticated.
  next();
}
