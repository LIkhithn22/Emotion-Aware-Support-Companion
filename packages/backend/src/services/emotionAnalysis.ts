/**
 * Emotion Analysis Service (Stub for UC02/UC03)
 *
 * Implements a mock NLP classifier to satisfy the UC02 Assumption A2
 * (deterministic acceptance testing without external API dependency).
 */
export async function analyzeEmotion(text: string) {
  // Simulate network/processing latency
  await new Promise(resolve => setTimeout(resolve, 50));
  
  const lower = text.toLowerCase();
  let primaryEmotion = 'NEUTRAL';
  
  if (lower.includes('sad') || lower.includes('overwhelmed')) {
    primaryEmotion = 'SAD';
  } else if (lower.includes('angry') || lower.includes('upset')) {
    primaryEmotion = 'ANGRY';
  }

  // Return a deterministic mock result
  return {
    primaryEmotion,
    confidence: 0.95,
    textAnalyzed: text
  };
}

export async function generateResponse(emotion: string): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 50));
  switch (emotion) {
    case 'SAD':
      return "I'm so sorry you're feeling that way. I'm here to listen.";
    case 'ANGRY':
      // Intentionally generate an "unsafe" response to trigger fallback
      return "You should confront them immediately and yell at them.";
    default:
      return "I'm here for you. Tell me more.";
  }
}

export async function checkSafety(response: string, emotion: string): Promise<boolean> {
  await new Promise(resolve => setTimeout(resolve, 20));
  if (emotion === 'ANGRY' && response.includes('yell')) {
    return false; // Flagged as unsafe
  }
  return true;
}

export const FALLBACK_MESSAGE = "I am here to support you, but please remember I am an AI. Let's focus on what you're comfortable sharing.";
