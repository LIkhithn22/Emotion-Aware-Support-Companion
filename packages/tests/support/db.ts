/**
 * Test database client — Prisma client pointed at the TEST database.
 *
 * Used in Cucumber step definitions and Before/After hooks to:
 *   - Reset tables to a known state before each scenario (Rule 2)
 *   - Seed UC-specific fixture data
 *   - Assert persistence side effects after UI actions
 *
 * The TEST_DATABASE_URL must point to easc_test (see .env.example).
 */
import { PrismaClient } from '@prisma/client';

// Singleton — reused across all steps within a test run
let _prisma: PrismaClient | null = null;

export function getTestDb(): PrismaClient {
  if (!_prisma) {
    _prisma = new PrismaClient({
      datasources: {
        db: { url: process.env.TEST_DATABASE_URL },
      },
    });
  }
  return _prisma;
}

export async function disconnectTestDb(): Promise<void> {
  if (_prisma) {
    await _prisma.$disconnect();
    _prisma = null;
  }
}

/**
 * Wipes all rows from all tables in dependency order.
 * Call in a Before hook at the start of each scenario.
 *
 * TODO: Extend as new entity tables are added per UC.
 */
export async function resetTestDatabase(): Promise<void> {
  const db = getTestDb();
  // Delete in reverse FK dependency order
  await db.auditLogEntry.deleteMany();
  await db.crisisFlag.deleteMany();
  await db.emotionRecord.deleteMany();
  await db.feedbackEntry.deleteMany();
  await db.message.deleteMany();
  await db.consentRecord.deleteMany();
  await db.privacySettings.deleteMany();
  await db.conversationSession.deleteMany();
  await db.retentionPolicy.deleteMany();
  await db.userProfile.deleteMany();
}
