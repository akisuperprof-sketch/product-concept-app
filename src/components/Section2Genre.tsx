import { useState } from 'react';
import { Info, Brain, HelpCircle, ChevronRight, Target, Zap, TrendingUp, Check, Sparkles } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { mockSection2Result } from '../services/mockData';
import clsx from 'clsx';

interface Section2GenreProps {
    onNext: (genre: string) => void;
}

export default function Section2Genre({ onNext }: Section2GenreProps) {
    const data = mockSection2Result;
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

    // HARMの円グラフ用データ
    const chartData = [
        { name: 'Health', value: data.harmScore.health },
        { name: 'Ambition', value: data.harmScore.ambition },
        { name: 'Relation', value: data.harmScore.relation },
        { name: 'Money', value: data.harmScore.money }
    ];

    const radarData = [
        { subject: 'Health', A: data.harmScore.health, B: 100, fullMark: 100, description: '日々の充実感と心身の状態。自分自身の「エネルギー」の源泉を分析します。' },
        { subject: 'Ambition', A: data.harmScore.ambition, B: 100, fullMark: 100, description: '将来の「なりたい姿」や達成したい目標。キャリアの加速可能性を示します。' },
        { subject: 'Relation', A: data.harmScore.relation, B: 100, fullMark: 100, description: '他者との繋がり、信頼関係、共感力。ビジネスにおける「ファン作り」の基礎力です。' },
        { subject: 'Money', A: data.harmScore.money, B: 100, fullMark: 100, description: '経済的利益と報酬への感度。ビジネスの「収益性」と「持続可能性」を支える軸です。' },
    ];

    return (
        <div className="space-y-8 animate-fade-in pb-24">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-[32px] p-8 border border-emerald-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Target className="w-32 h-32 text-emerald-600" />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase">Phase 2</span>
                        <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">資質マッピング</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                        あなたの資質と市場の交差点を見つける
                    </h1>
                    <p className="text-sm text-slate-600 max-w-2xl">
                        HARM分析モデルに基づき、あなたの人生の優先順位と潜在的な強みを掛け合わせた「勝てるジャンル」を選定しました。
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* HARM Score Radar/Pie Analysis */}
                <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-white space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <Brain className="w-5 h-5 text-emerald-500" />
                            HARMバランス解析
                        </h3>
                        <div className="group relative">
                            <HelpCircle className="w-4 h-4 text-slate-300 cursor-pointer hover:text-emerald-500 transition-colors" />
                            <div className="absolute right-0 bottom-full mb-2 w-64 p-3 bg-slate-900 text-white text-[10px] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-2xl">
                                <p className="font-bold mb-1">HARM分析モデルとは？</p>
                                人々の悩みの4大要素（Health, Ambition, Relation, Money）のどれにあなたの資質が強く紐付いているかを数値化。悩みの深い場所にビジネスの火種があります。
                            </div>
                        </div>
                    </div>

                    <div className="h-[280px] w-full flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                <PolarGrid stroke="#f1f5f9" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }} />
                                <Radar
                                    name="Your Assets"
                                    dataKey="A"
                                    stroke="#10b981"
                                    fill="#10b981"
                                    fillOpacity={0.4}
                                />
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            const p = payload[0].payload as any;
                                            return (
                                                <div className="bg-white p-3 rounded-xl shadow-xl border border-emerald-50 max-w-[200px]">
                                                    <p className="text-xs font-bold text-emerald-600 mb-1">{p.subject} Score: {p.A}</p>
                                                    <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{p.description}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {chartData.map((item, index) => (
                            <div key={item.name} className="flex flex-col p-3 rounded-2xl bg-slate-50 border border-slate-100 border-transparent hover:border-emerald-200 transition-all cursor-help group relative">
                                <span className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider">{item.name}</span>
                                <div className="flex items-end gap-1">
                                    <span className="text-xl font-bold text-slate-700 leading-none">{item.value}</span>
                                    <span className="text-[10px] text-slate-400 mb-0.5">pts</span>
                                </div>
                                <div className="h-1 bg-slate-200 rounded-full mt-2 overflow-hidden">
                                    <div
                                        className="h-full transition-all duration-1000"
                                        style={{ width: `${item.value}%`, backgroundColor: COLORS[index] }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Market Layer Judgment */}
                <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-white flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-emerald-500" />
                                マーケット・レイヤー判定
                            </h3>
                            <div className="group relative">
                                <HelpCircle className="w-4 h-4 text-slate-300 cursor-pointer hover:text-emerald-500 transition-colors" />
                                <div className="absolute right-0 bottom-full mb-2 w-64 p-3 bg-slate-900 text-white text-[10px] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                    <p className="font-bold mb-1">レイヤー判定（L/M/H）とは？</p>
                                    市場を「初心者の悩み解決(L)」「継続・中堅の効率化(M)」「専門・上級の戦略(H)」の3層に分類。あなたの資質が最も輝く戦場を判定します。
                                </div>
                            </div>
                        </div>

                        <div className="relative p-6 rounded-3xl bg-slate-900 text-white shadow-2xl mb-6">
                            <div className="absolute -top-3 -right-3 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center rotate-12 shadow-lg">
                                <span className="text-xl font-black">{data.layer.level}</span>
                            </div>
                            <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">{data.layer.label}</h4>
                            <p className="text-xl font-bold mb-4">{data.layer.monthlyIncomeEstimate} 規模の市場</p>
                            <p className="text-sm text-slate-300 leading-relaxed font-medium">
                                {data.layer.description}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                            <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                            <p className="text-xs text-emerald-700 font-bold leading-relaxed">
                                あなたの資質は、特に「{data.harmScore.primary}」と「{data.harmScore.secondary}」の掛け合わせにおいて、独自性を発揮しやすい傾向にあります。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Candidates Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-emerald-500" />
                        推奨ビジネスジャンル
                    </h2>
                    <p className="text-xs text-slate-400 font-bold uppercase">Select one to deep dive</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {data.candidates.map((c) => (
                        <div
                            key={c.id}
                            onClick={() => setSelectedId(c.id)}
                            className={clsx(
                                "group cursor-pointer rounded-[32px] p-8 border-2 transition-all duration-300 relative overflow-hidden",
                                selectedId === c.id
                                    ? "bg-emerald-600 border-emerald-600 text-white shadow-2xl shadow-emerald-200 transform scale-[1.02]"
                                    : "bg-white border-slate-100 text-slate-800 hover:border-emerald-300 hover:shadow-xl shadow-slate-200/50"
                            )}
                        >
                            {selectedId === c.id && (
                                <div className="absolute top-4 right-4 bg-white/20 p-1.5 rounded-full backdrop-blur-md">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                            )}
                            <div className={clsx("text-[10px] font-bold uppercase tracking-widest mb-4", selectedId === c.id ? "text-emerald-100" : "text-emerald-500")}>
                                {c.category}
                            </div>
                            <h3 className="text-xl font-bold mb-2 leading-tight">{c.title}</h3>
                            <p className={clsx("text-xs mb-6 font-medium", selectedId === c.id ? "text-emerald-50/80" : "text-slate-400")}>
                                {c.subtitle}
                            </p>

                            <div className="space-y-4 pt-6 border-t border-current opacity-20">
                                <div className="flex justify-between items-center text-[10px] font-bold">
                                    <div className="flex items-center gap-1.5">
                                        <Info className="w-3 h-3" />
                                        適性スコア
                                    </div>
                                    <span>{c.confidence}%</span>
                                </div>
                                <div className="h-1 bg-current opacity-20 rounded-full overflow-hidden">
                                    <div className="h-full bg-current opacity-80" style={{ width: `${c.confidence}%` }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Incompatible Genres Section */}
            <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-slate-200 text-slate-500 rounded-xl"><HelpCircle className="w-4 h-4" /></div>
                    <div>
                        <h3 className="text-sm font-bold text-slate-700">不適合と判定された領域（参考）</h3>
                        <p className="text-[10px] text-slate-400 font-medium">資質の無駄遣いを避けるためにAIが除外した候補</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 opacity-60">
                    {['YouTube切り抜き代行', 'データ入力自動化ツール', 'ロゴデザイン専門制作'].map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="mt-4 text-[10px] text-slate-400 leading-relaxed italic">
                    ※これらのジャンルは、あなたの持っている「情緒的共感力」や「戦略的思考」を活かしきれず、価格競争に巻き込まれるリスクが高いと判断されました。
                </p>
            </div>

            {/* Next Step Guidance (Floating Action) */}
            {selectedId && (
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce-in">
                    <button
                        onClick={() => onNext(data.candidates.find(c => c.id === selectedId)?.title || '')}
                        className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl flex items-center gap-3 hover:bg-slate-800 transition-all hover:pr-12 group"
                    >
                        選んだジャンルで市場戦略を練る
                        <ChevronRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <p className="text-center mt-3 text-[10px] font-bold text-slate-400 tracking-widest bg-white/80 backdrop-blur py-1 rounded-full border border-slate-100 uppercase">
                        Proceed to Step 3: Market Analysis
                    </p>
                </div>
            )}
        </div>
    );
}
