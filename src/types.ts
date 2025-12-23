export type HARMScore = {
    health: number;
    ambition: number;
    relation: number;
    money: number;
    primary: 'health' | 'ambition' | 'relation' | 'money';
    secondary: 'health' | 'ambition' | 'relation' | 'money';
};

export type BusinessLayer = {
    level: 'L' | 'M' | 'H';
    label: string; // e.g. "入門", "プロ"
    description: string;
    monthlyIncomeEstimate: string;
};

export type GenreCandidate = {
    id: string;
    category: string;
    title: string;
    subtitle: string;
    description: string;
    metrics: {
        experience: number;
        achievement: number;
        aiAffinity: number;
        marketability: number;
    };
    confidence: number;
};

export type Section2Result = {
    sessionId: string;
    harmScore: HARMScore;
    layer: BusinessLayer;
    candidates: GenreCandidate[];
};

export type Competitor = {
    id: string;
    name: string;
    price: number;
    salesCopy?: string;
    platform: 'note' | 'brain' | 'tips' | 'other';
    url?: string;
};

export type MarketAnalysis = {
    competitorCount: number;
    priceRange: { min: number; max: number };
    majorPlatforms: string[];
    competitors: Competitor[];
    marketMap: {
        points: { id: string; x: number; y: number; color: string; label?: string }[];
    };
    grokAnalysis: {
        buzzHooks: string[];
        topNeeds: { text: string; stars: number }[];
        trends: {
            current: string[];
            future: string[];
            oversaturated: string[];
        };
    };
    differentiation: {
        title: string;
        suitability: 'HIGH' | 'MEDIUM' | 'LOW';
        description: string;
    };
    conclusion: {
        overview: string;
        strategy: string;
        quickWins: string[];
        risks: string[];
    };
};
