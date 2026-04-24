/**
 * Environment configuration — reads from process.env (populated by dotenv in index.ts).
 * Centralised here so all modules import from one place, not directly from process.env.
 */
export const env = {
  port: parseInt(process.env.PORT ?? '3001'),
  nodeEnv: process.env.NODE_ENV ?? 'development',
  databaseUrl: process.env.DATABASE_URL ?? '',
  testDatabaseUrl: process.env.TEST_DATABASE_URL ?? '',
  jwtSecret: process.env.JWT_SECRET ?? 'dev_secret_change_me',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  /** Confidence score below which UC05 RequestClarification is triggered */
  emotionConfidenceThreshold: parseFloat(
    process.env.EMOTION_CONFIDENCE_THRESHOLD ?? '0.60',
  ),
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
} as const;
