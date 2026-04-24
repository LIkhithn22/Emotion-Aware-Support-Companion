/**
 * Crisis Detection Service — stub
 *
 * UC04 ProvideCrisisSupportSuggestion
 *
 * Scans message text for high-risk language patterns (self-harm,
 * harm to others, severe distress, suicidal ideation).
 * Returns a CrisisCueType if a crisis indicator is detected, or null otherwise.
 *
 * Fully deterministic — no ML/external service — ensuring acceptance tests
 * can run without external dependencies.
 *
 * TODO: Implement in UC04 development phase.
 */

import type { CrisisCueType } from '../domain/entities';

export interface CrisisDetectionResult {
  isCrisis: boolean;
  crisisCueType?: CrisisCueType;
}

/**
 * Evaluates the given text for crisis language patterns.
 * @param text - The user's message content
 * @returns CrisisDetectionResult
 */
export function detectCrisis(_text: string): CrisisDetectionResult {
  // TODO: Implement keyword/pattern matching engine
  throw new Error('detectCrisis — not yet implemented (UC04)');
}
