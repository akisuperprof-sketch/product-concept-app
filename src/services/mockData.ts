import { Section2Result, MarketAnalysis } from '../types';

export const mockSection2Result: Section2Result = {
    sessionId: '46bc1a',
    harmScore: {
        health: 5,
        ambition: 85, // Primary based on image context (Ambition > Health)
        relation: 5,
        money: 5,
        primary: 'ambition',
        secondary: 'health'
    },
    layer: {
        level: 'L',
        label: '入門',
        description: '行動・成長・価値提供・成果の4指標からL/M/H層を推定しています。',
        monthlyIncomeEstimate: '月1~10万相当'
    },
    candidates: [
        {
            id: 'c1',
            category: 'Ambition',
            title: '自動化ノウハウ',
            subtitle: 'AI活用',
            description: '教育プログラム開発や企画設計の経験があり、全体最適・効率化を考える思考特性と自動化ノウハウは非常に相性が良い。教育・スポーツ現場の業務効率化という具体的な応用先も明確で、ビジネス化しやすい。',
            metrics: {
                experience: 90,
                achievement: 60,
                aiAffinity: 90,
                marketability: 80
            },
            confidence: 82
        },
        {
            id: 'c2',
            category: 'Ambition',
            title: '生成AI活用術',
            subtitle: 'AI活用',
            description: '論理的分析力と企画立案力を活かし、教育・指導現場での生成AI活用法を体系化できる。専門領域×AIという形で差別化しやすく、受講生向け・指導者向けコンテンツとして市場ニーズも高い。',
            metrics: {
                experience: 85,
                achievement: 60,
                aiAffinity: 90,
                marketability: 85
            },
            confidence: 80
        },
        {
            id: 'c3',
            category: 'Ambition',
            title: '事業計画作成',
            subtitle: '起業',
            description: '新規企画立案や戦略設計の経験がそのまま転用可能。AIを活用した事業計画テンプレートや思考フレームの提供により、知的価値の高いサービスとして成立する可能性が高い。',
            metrics: {
                experience: 80,
                achievement: 60,
                aiAffinity: 75,
                marketability: 75
            },
            confidence: 74
        }
    ]
};

export const mockMarketAnalysis: MarketAnalysis = {
    competitorCount: 9,
    priceRange: { min: 300, max: 49800 },
    majorPlatforms: ['note(3件)', 'brain(3件)', 'tips(3件)'],
    competitors: [
        { id: '1', name: '本業x副業両立して疲れない...', price: 1000, platform: 'note' },
        { id: '2', name: '生成AI活用で学び直しが加速する！...', price: 300, platform: 'brain' },
        { id: '3', name: '今日からできるAI活用術...', price: 500, platform: 'note' }, // 9 items mocked for display
        { id: '4', name: 'ChatGPT...', price: 1000, platform: 'tips' },
        { id: '5', name: 'すぐに使えるプロンプト付き！...', price: 1800, platform: 'brain' },
        { id: '6', name: '最強タッグ「ChatGPTxアフィリエ...', price: 1980, platform: 'tips' },
    ],
    marketMap: {
        points: [
            { id: 'p1', x: 20, y: 30, color: 'blue', label: 'note' },
            { id: 'p2', x: 40, y: 70, color: 'green', label: 'Others' },
            { id: 'p3', x: 80, y: 40, color: 'orange', label: 'Brain' },
            // more points
        ]
    },
    grokAnalysis: {
        buzzHooks: [
            '「ChatGPTで1日2時間浮いた！」',
            '「生成AI初心者が陥る罠3選」',
            '「これ入力するだけでプロ級出力」'
        ],
        topNeeds: [
            { text: 'プロンプトの書き方がわからない・効率化したい', stars: 5 },
            { text: 'どのツールから始めればいいか迷う', stars: 5 },
            { text: '出力結果を自分の業務にカスタマイズできない', stars: 5 },
            { text: '日本語入力時の精度が低い', stars: 4 }
        ],
        trends: {
            current: ['Claude 3.5 Sonnet活用', 'Gemini 2.0マルチモーダル', 'AIエージェント自動化'],
            future: ['Excel/Googleスプレッドシート特化AI', '教育・学習支援AI活用', '音声生成AI（日本語）'],
            oversaturated: ['ChatGPT基本プロンプト', 'Midjourney画像生成入門']
        }
    },
    differentiation: {
        title: '戦略設計・体系化',
        suitability: 'HIGH',
        description: '断片的ノウハウではなく、思考フレームと設計思想を提供'
    },
    conclusion: {
        overview: '生成AI活用術市場は初心者（L層）向けの低価格コンテンツが大量に存在するレッドオーシャンで、需要は高く成長中。一方で断片的ノウハウが多く、業務や教育現場に落とし込めない不満が顕在化している。',
        strategy: '初心者向け生成AI活用というレッドオーシャンに参入しつつ、ユーザーの建築家型思考（論理・構造・全体最適）を前面に出し、『なぜそう考えるか』『どう設計するか』を教える体系化・戦略設計型コンテンツとして差別化する。',
        quickWins: [
            'XでL層向け『思考→指示文に変換する型』の無料スレッドを連投',
            '教育・業務シーン別のAI活用フレーム図を画像投稿',
            'AI活用: 構成案生成'
        ],
        risks: [
            '抽象度が高くなりすぎL層に伝わらないリスク',
            '実践例不足による再現性への不信'
        ]
    }
};
