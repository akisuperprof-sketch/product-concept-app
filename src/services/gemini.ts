import { GoogleGenerativeAI } from "@google/generative-ai";
import type { Section2Result, MarketAnalysis } from "../types";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

const SYSTEM_PROMPT_PHASE1 = `
You are an Elite Business Concept Architect & Market Researcher AI.
Your goal is to analyze the user's "Self-Analysis Result" and identify the most profitable and suitable "Business Concept" for them.

Analyze the user's strengths against the 4 HARM categories (Health, Ambition, Relation, Money). Assign a score (0-100) to each.
Determine Business Layer (L, M, or H).
Generate 3 Sub-Genre Candidates with metrics.

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
You are an Elite Business Concept Architect & Market Researcher AI.
Simulate a "Deep Research" process for the selected genre.

Find 5-10 specific competitors.
Analyze Price distribution.
Create a Market Opportunity Map (Scatter plot coordinates 0-100).
Grok X Analysis (Buzz hooks, top needs, trends).
Strategic Conclusion.

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
