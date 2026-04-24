/**
 * Domain entity interfaces for the Emotion-Aware Support Companion.
 *
 * These TypeScript interfaces map 1-to-1 with:
 *   - The entity objects identified in the project proposal (Tables 11–13)
 *   - The Prisma schema models in prisma/schema.prisma
 *   - The REST API request/response shapes
 *
 * All 10 persistent entity objects from the proposal are represented here.
 */

// ── UC01, UC09 ────────────────────────────────────────────────────────────────
export interface UserProfile {
  userId: number;
  identifier: string;          // pseudonymous identifier
  locale: string;              // e.g. 'en-US'
  createdAt: Date;
  updatedAt: Date;
  privacySettingsId?: number;
}

// ── UC01, UC08, UC09 ─────────────────────────────────────────────────────────
export type SessionStatus = 'OPEN' | 'CLOSED';

export interface ConversationSession {
  sessionId: number;
  userId: number;
  startTime: Date;
  endTime?: Date;
  status: SessionStatus;
  summary?: string;
}

// ── UC02, UC03 ────────────────────────────────────────────────────────────────
export type SenderType = 'USER' | 'SYSTEM';

export interface Message {
  messageId: number;
  sessionId: number;
  senderType: SenderType;
  content: string;
  timestamp: Date;
}

// ── UC02, UC03, UC04, UC05 ────────────────────────────────────────────────────
export type EmotionLabel =
  | 'happy'
  | 'sad'
  | 'anxious'
  | 'angry'
  | 'neutral'
  | 'fearful'
  | 'disgusted'
  | 'surprised'
  | 'unknown';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface EmotionRecord {
  emotionId: number;
  messageId: number;
  emotionLabel: EmotionLabel;
  confidenceScore: number;  // 0.0 – 1.0
  riskLevel: RiskLevel;
  createdAt: Date;
}

// ── UC06 ──────────────────────────────────────────────────────────────────────
export interface ConsentRecord {
  consentId: number;
  userId: number;
  consentVersion: string;
  givenAt: Date;
  withdrawnAt?: Date;
}

// ── UC07 ──────────────────────────────────────────────────────────────────────
export interface PrivacySettings {
  privacySettingsId: number;
  userId: number;
  storeHistory: boolean;
  retentionDays: number;
  anonymiseLogs: boolean;
  updatedAt: Date;
}

// ── UC10 ──────────────────────────────────────────────────────────────────────
export interface FeedbackEntry {
  feedbackId: number;
  sessionId: number;
  usabilityRating: number;    // Likert 1–5
  trustRating: number;        // Likert 1–5
  empathyRating: number;      // Likert 1–5
  comment?: string;
  submittedAt: Date;
}

// ── UC04 ──────────────────────────────────────────────────────────────────────
export type CrisisCueType =
  | 'SELF_HARM'
  | 'HARM_TO_OTHERS'
  | 'SEVERE_DISTRESS'
  | 'SUICIDAL_IDEATION'
  | 'OTHER';

export interface CrisisFlag {
  flagId: number;
  emotionId: number;
  sessionId: number;
  crisisCueType: CrisisCueType;
  detectedAt: Date;
  reviewed: boolean;
  resolved: boolean;
}

// ── System-wide ───────────────────────────────────────────────────────────────
export interface AuditLogEntry {
  logId: number;
  action: string;
  targetEntity: string;
  targetId: number;
  performedBy?: number;     // userId or null for system
  performedAt: Date;
  details?: string;
}

export interface RetentionPolicy {
  policyId: number;
  name: string;
  retentionDays: number;
  anonymiseOnExpiry: boolean;
  deleteOnExpiry: boolean;
  appliesTo: string;         // entity name this policy applies to
  createdAt: Date;
  updatedAt: Date;
}
