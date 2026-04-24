/**
 * Response Generator Service — stub
 *
 * UC03 GenerateSupportiveResponse / UC05 RequestClarification
 *
 * Selects and composes a supportive response based on:
 *   - Emotion label and confidence score from EmotionAnalysisResult
 *   - Recent conversation context
 *   - Rule-based safety guardrails (no diagnoses, no promises, no harmful advice)
 *
 * When confidence is below the threshold, generates a clarification question (UC05).
 *
 * TODO: Implement in UC03/UC05 development phase.
 */

import type { EmotionLabel } from '../domain/entities';

export interface ResponseGeneratorInput {
  emotionLabel: EmotionLabel;
  confidenceScore: number;
  recentContext?: string[];  // last N user + system messages for context
}

export interface GeneratedResponse {
  content: string;
  isClarificationRequest: boolean;
  passedSafetyCheck: boolean;
}

/**
 * Generates a supportive or clarification response.
 * @param input - Emotion analysis result and conversation context
 * @returns GeneratedResponse
 */
export function generateResponse(_input: ResponseGeneratorInput): GeneratedResponse {
  // TODO: Implement response strategy selection and template composition
  throw new Error('generateResponse — not yet implemented (UC03)');
}
