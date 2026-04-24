import type { Request, Response, NextFunction } from 'express';

/**
 * Global error handler middleware.
 * Must be registered last in the Express middleware chain.
 *
 * TODO: Extend with structured error codes as each UC is implemented.
 */
export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  console.error('[EASC Error]', err.message, err.stack);

  res.status(500).json({
    error: {
      message: err.message ?? 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
}
