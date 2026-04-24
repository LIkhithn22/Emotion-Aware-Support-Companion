/**
 * Emotion Analysis Service — stub
 *
 * UC02 SendMessageForAnalysis / UC05 RequestClarification
 *
 * This service will use a rule-based lexicon classifier (compromise NLP)
 * to infer emotion label and confidence from user message text.
 *
 * Keeping this deterministic (no external ML API) ensures acceptance tests
 * can run reliably without network dependencies (Rule 3 of methodology).
 *
 * TODO: Implement in UC02 development phase.
 */

import type { EmotionLabel, RiskLevel } from '../domain/entities';

export interface EmotionAnalysisResult {
  emotionLabel: EmotionLabel;
  confidenceScore: number;  // 0.0 – 1.0
  riskLevel: RiskLevel;
}

/**
 * Analyses the given text and returns an emotion result.
 * @param text - The user's message content
 * @returns EmotionAnalysisResult
 */
export async function analyseEmotion(_text: string): Promise<EmotionAnalysisResult> {
  // TODO: Implement rule-based lexicon classification using `compromise` NLP
  throw new Error('analyseEmotion — not yet implemented (UC02)');
}
