/**
 * Prisma seed entry point.
 *
 * Per-UC seed scripts will be added here as each use case is implemented.
 * This file is intentionally minimal at scaffold stage.
 *
 * Run: npx tsx prisma/seed.ts
 * Or:  npm run db:seed
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('[EASC Seed] No seed data defined yet.');
  console.log('[EASC Seed] Per-UC seed fixtures will be added as use cases are implemented.');
}

main()
  .catch((e) => {
    console.error('[EASC Seed] Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
