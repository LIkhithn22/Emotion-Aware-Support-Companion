import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { router } from './routes';
import { errorHandler } from './middleware/errorHandler';

export const app = express();

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173' }));
app.use(express.json());
app.use(morgan('dev'));

// ── Health check ─────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── API routes ────────────────────────────────────────────────────────────────
// All use-case routes are mounted here.
// Each route module will be populated as UCs are implemented.
app.use('/api/v1', router);

// ── Error handling ────────────────────────────────────────────────────────────
app.use(errorHandler);
