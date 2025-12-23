import { GoogleGenerativeAI } from "@google/generative-ai";
import type { Section2Result, MarketAnalysis } from "../types";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

const SYSTEM_PROMPT_PHASE1 = `
You are an Elite Business Concept Architect & Strategic Researcher AI.
Your goal is to analyze the user's background and identify a "Blue Ocean" business niche where their specific strengths and life experiences intersect with market needs.

[CRITICAL INSTRUCTIONS]
1. Avoid generic business suggestions like "Web Designer", "Consultant", or "Blog".
2. Instead, propose niche "Compound Categories" (e.g., "AI-Powered Educational Content for Medical Professionals", "Strategic Design for Local Tourism utilizing Meta-Stories").
3. Analyze 4 key axes (HARM: Health, Ambition, Relation, Money) based on the input text.
4. Categorize the user into one of three market layers:
   - L (Entry: Solving immediate needs)
   - M (Growth: Scaling and optimization)
   - H (Expert: High-level strategy and philosophy)

Respond strictly in JSON format matching this schema:
{
  "sessionId": "string",
  "harmScore": {
    "health": number,
    "ambition": number,
    "relation": number,
    "money": number,
    "primary": "health" | "ambition" | "relation" | "money",
    "secondary": "health" | "ambition" | "relation" | "money"
  },
  "layer": {
    "level": "L" | "M" | "H",
    "label": "string",
    "description": "string",
    "monthlyIncomeEstimate": "string"
  },
  "candidates": [
    {
      "id": "string",
      "category": "string",
      "title": "string",
      "subtitle": "string",
      "description": "string",
      "metrics": {
        "experience": number,
        "achievement": number,
        "aiAffinity": number,
        "marketability": number
      },
      "confidence": number
    }
  ]
}
`;

const SYSTEM_PROMPT_PHASE2 = `
You are an Elite Market Strategist AI.
Simulate a deep-dive research for the selected niche.

[GOALS]
1. Identify 5-10 specific competitor examples (names, pricing, strengths).
2. Map the market on a 2D coordinate system (X: Price, Y: Service Complexity).
3. Analyze SNS trends (Buzz hooks, Top Needs) for this specific niche.
4. Conclude with a "High-End Positioning" that provides maximum value with less competition.

Respond strictly in JSON format matching this schema:
{
  "competitorCount": number,
  "priceRange": { "min": number, "max": number },
  "majorPlatforms": ["string"],
  "competitors": [
    { "id": "string", "name": "string", "price": number, "platform": "note" | "brain" | "tips" | "other" }
  ],
  "marketMap": {
    "points": [
      { "id": "string", "x": number, "y": number, "color": "string", "label": "string" }
    ]
  },
  "grokAnalysis": {
    "buzzHooks": ["string"],
    "topNeeds": [{ "text": "string", "stars": number }],
    "trends": {
      "current": ["string"],
      "future": ["string"],
      "oversaturated": ["string"]
    }
  },
  "differentiation": {
    "title": "string",
    "suitability": "HIGH" | "MEDIUM" | "LOW",
    "description": "string"
  },
  "conclusion": {
    "overview": "string",
    "strategy": "string",
    "quickWins": ["string"],
    "risks": ["string"]
  }
}
`;

export async function analyzeStrengths(inputText: string, mbti?: string): Promise<Section2Result> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
  const prompt = `${SYSTEM_PROMPT_PHASE1}\n\nUser Input:\n${inputText}\nMBTI: ${mbti || "Not provided"}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text().replace(/```json|```/g, "").trim();
  return JSON.parse(text);
}

export async function analyzeMarket(genre: string, profile: string): Promise<MarketAnalysis> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
  const prompt = `${SYSTEM_PROMPT_PHASE2}\n\nSelected Genre: ${genre}\nUser Profile context: ${profile}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text().replace(/```json|```/g, "").trim();
  return JSON.parse(text);
}
