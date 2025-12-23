# Product Concept Design Support Agent - Application Specification

## 1. Overview
An AI-powered application that analyzes a user's self-analysis results to identify the most suitable business genres, perform HARM analysis, and conduct deep competitor research using "Deep Research" and "Grok X Analysis" concepts.

## 2. Core User Flow
1.  **Section 1 Input:** User pastes their self-analysis text/JSON and selects MBTI (optional).
2.  **Analysis Phase 1:** AI analyzes strengths, determines HARM score and Business Layer.
3.  **Section 2 Genre Selection:** User reviews 3 proposed sub-genres and selects one.
4.  **Analysis Phase 2 (Deep Research):** AI performs multi-step competitor analysis (Market Research -> Competitor Extraction -> Analysis -> SNS Analysis -> Integration -> Positioning).
5.  **Section 3 Competitor Analysis Result:** Display comprehensive market report, competitor map, SNS trends, and strategic positioning.

## 3. Detailed Screen Specifications

### 3.1. Input Screen (Section 1)
*   **Header:** "Section1の結果を入力"
*   **Primary Input:** Large text area. Placeholder encourages pasting result from "Section 1" tool.
*   **MBTI Input:** Dropdown for Type (e.g., INTJ-A) and Confidence (High/Medium/Low).
*   **Action:** "分析を開始" button (Blue gradient).

### 3.2. Genre Selection Screen (Section 2)
*   **Header:** "あなたの強みを活かせるジャンルを特定"
*   **HARM Score:**
    *   Donut Chart: 4 colors (Health, Ambition, Relation, Money).
    *   Legend: Score / 100 for each.
    *   Analysis Text: Primary & Secondary traits.
*   **Layer Judgment:**
    *   Result: e.g., "L層 (入門)".
    *   Explanation: "行動・成長・価値提供・成果の4指標から推論".
    *   Suitability: "月1~10万相当".
*   **Sub-genre Candidates (3 Cards):**
    *   Category Tag (e.g., "Ambition").
    *   Title & Subtitle (e.g., "自動化ノウハウ - AI活用").
    *   Metrics: 経歴, 実績, AI親和性, 市場性 (Percentages).
    *   Action: "選択する" button.
*   **Completion State:**
    *   Shows selected genre path.
    *   Action: "Section 3 で競合分析を開始".

### 3.3. Competitor Analysis Result Screen (Section 3)
*   **Header:** "AI Deep Research + X分析で市場を掴む"
    *   Button: "最新を取得".
*   **Learning Section:** "プロはこうやって競合分析する" (5 Steps visualization).
*   **Research Summary:**
    *   **Deep Research Card:** Competitor count, Price range (Min-Max), Main Platforms.
    *   **Grok X Analysis Card:** Buzz posts count, Keywords, Trends.
*   **Competitor List:** Accordion list of specific competitors (Title, Price, Tag).
*   **Analysis Framework:**
    *   **Price Range Analysis:** Heatmap bar showing Low(Free-10k), Mid(10k-30k), High(30k+).
    *   **Support Type:** Unknown/Text/Video etc.
    *   **Platform Analysis:** Tags (note, brain, tips etc.).
*   **Market Demand Analysis:**
    *   **Competitor Intensity:** "HIGH/LOW" badge + Description.
    *   **Market Verification:** "HIGH/LOW" badge + Checkpoints (e.g., Paid notes exist).
*   **Differentiation Opportunity:**
    *   Card showing specific strategy (e.g., "戦略設計・体系化") and suitability "HIGH".
*   **Market Opportunity Map (Scatter Plot):**
    *   X-Axis: Price (0k - 150k).
    *   Y-Axis: Product Format (Community, Consulting, Video Course, Ebook).
    *   Plot points: Competitors (Blue/Orange/Green dots).
    *   Goal: Find "Blue Ocean" spots.
*   **Grok X Analysis Results:**
    *   **Buzz Trends:** Hooks, formats, timing (Weekday 19-21h etc.).
    *   **Top 5 Needs/Worries:** List of user pain points with star ratings.
    *   **Market Trends:** Current, Upcoming, Oversaturated areas.
*   **Conclusion:**
    *   **Demand Market Analysis:** Summary text.
    *   **Differentiation (Shift Axis):** Conceptual text (e.g., "Not partial know-how, but framework").
*   **Market Summary / Latest Research:**
    *   **Overview:** Text describing the market status (Red Ocean/Blue Ocean).
    *   **Strategy:** Recommended approach for the user.
    *   **Quick Wins & Risks:** Bullet points.
*   **Learning Point:** "今回の競合分析で学んだこと" summary card.

## 4. System Prompt Design (Reverse Engineered)
The AI plays the role of an expert business consultant and market researcher. It needs to output structured JSON data containing:
1.  **HARM Analysis:** Scores (0-100) for Health, Ambition, Relation, Money.
2.  **Layer Analysis:** L/M/H classification with reasoning.
3.  **Genre Proposals:** 3 distinct business ideas based on user strengths.
4.  **Deep Research Data:**
    *   Mocked (or searched) competitor data (Names, Prices, URL/Platform).
    *   Market stats (Price distribution).
5.  **Grok X (Social) Data:**
    *   Simulated social listening trends (Buzzwords, User complaints).
6.  **Strategic Positioning:**
    *   Differentiation axis.
    *   Map coordinates for competitors.

## 5. Technical Stack
*   **Frontend:** React (Vite), TypeScript.
*   **Styling:** Tailwind CSS (Custom configuration for "Premium Agentic" look - glassmorphism, gradients).
*   **Charts:** Recharts (Donut, Scatter Plot, Bar).
*   **Icons:** Lucide React.
*   **State:** React Context for session data.

## 6. Implemented File Structure
```
/
├── specification.md       # Functional specifications
├── system_prompt.md       # AI System Instruction (Reverse engineered)
├── chat_history.md        # Project log
├── tailwind.config.js     # Custom design system configuration
├── src/
│   ├── App.tsx            # Main routing logic
│   ├── index.css          # Global styles & Gradients
│   ├── types.ts           # TypeScript definitions
│   ├── services/
│   │   └── mockData.ts    # Mock data strictly matching screenshots
│   └── components/
│       ├── Section1Input.tsx    # Input screen
│       ├── Section2Genre.tsx    # HARM & Genre selection
│       ├── Section3Analysis.tsx # Competitor analysis dashboard
│       └── LoadingScreen.tsx    # Progress animation
```
