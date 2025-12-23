
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';

dotenv.config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

async function runTest() {
    const rawData = fs.readFileSync('tests/verification_data.json', 'utf8');
    const scenarios = JSON.parse(rawData);
    const results = [];

    console.log("Starting Verification Tests...");

    for (const scene of scenarios) {
        console.log(`Analyzing: ${scene.id}...`);
        const prompt = `
            あなたはビジネス設計AIです。以下のプロファイルからHARMスコア(0-100)と、推奨する3つのビジネスジャンルをJSON形式で出力してください。
            
            Profile: ${scene.profile}
            MBTI: ${scene.mbti}
            
            Schema:
            {
              "id": "${scene.id}",
              "harmScore": { "health": number, "ambition": number, "relation": number, "money": number },
              "candidates": [ { "title": "string", "reason": "string" } ]
            }
        `;

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text().replace(/```json|```/g, "").trim();
            results.push(JSON.parse(text));
        } catch (e) {
            console.error(`Error in ${scene.id}:`, e);
        }
    }

    fs.writeFileSync('tests/test_results.json', JSON.stringify(results, null, 2));
    console.log("Verification Tests Completed. Results saved to tests/test_results.json");
}

runTest();
