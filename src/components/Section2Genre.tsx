import { useState } from 'react';
import { RefreshCw, Play, Info, Check, Sparkles, Brain, Briefcase } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { mockSection2Result } from '../services/mockData';
import clsx from 'clsx';
import type { GenreCandidate } from '../types';

export default function Section2Genre({ onNext }: { onNext: () => void }) {
    const result = mockSection2Result;
    const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);

    const data = [
        { name: 'Health', value: result.harmScore.health, color: '#4ade80' },    // green-400
        { name: 'Ambition', value: result.harmScore.ambition, color: '#3b82f6' }, // blue-500
        { name: 'Relation', value: result.harmScore.relation, color: '#ec4899' }, // pink-500
        { name: 'Money', value: result.harmScore.money, color: '#f59e0b' },       // amber-500
    ];

    return (
        <div className="space-y-8 animate-fade-in pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="bg-brand-50 text-brand-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase">Section 2</span>
                        <span className="bg-brand-50 text-brand-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">ジャンル選定</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <span className="p-2 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl text-brand-500 shadow-inner">
                            <Brain className="w-6 h-6" />
                        </span>
                        あなたの強みを活かせるジャンルを特定
                    </h1>
                    <p className="text-sm text-slate-500">入力されたプロファイルをもとにHARM分類・サブジャンル推薦・レイヤー判定を行います。</p>
                    <div className="flex items-center gap-2 text-xs text-green-500 font-bold pt-1">
                        <Check className="w-3.5 h-3.5" />
                        完了 session: {result.sessionId}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 transition-colors shadow-sm active:scale-95 transform">
                        <RefreshCw className="w-3.5 h-3.5" />
                        再読み込み
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-500 text-white text-xs font-bold hover:bg-brand-600 transition-colors shadow-lg shadow-brand-200 active:scale-95 transform">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        再分析を開始
                    </button>
                </div>
            </div>

            {/* Analysis Result Overview (HARM & Layer) */}
            <div className="grid md:grid-cols-12 gap-6 items-stretch">

                {/* HARM Score */}
                <div className="md:col-span-12 lg:col-span-12 bg-white/80 backdrop-blur-sm rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden">

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="relative w-64 h-64 flex-shrink-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={2}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <div className="text-[10px] text-slate-500 font-medium">Primary優位度</div>
                                <div className="text-3xl font-bold text-slate-800">30%</div>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="flex justify-between items-start mb-6">
                                <h2 className="text-lg font-bold text-slate-800">HARMスコア</h2>
                                <div className="text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                                    Primary: <span className="text-brand-600 font-bold capitalize">{result.harmScore.primary}</span> / Secondary: <span className="text-brand-600 font-bold capitalize">{result.harmScore.secondary}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {data.map((item) => (
                                    <div key={item.name} className="flex items-center justify-between group cursor-default">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                            <span className="text-sm font-bold text-slate-700">{item.name}</span>
                                            <span className="text-xs text-slate-400">
                                                {item.name === 'Health' && '(健康)'}
                                                {item.name === 'Ambition' && '(キャリア・夢)'}
                                                {item.name === 'Relation' && '(人間関係)'}
                                                {item.name === 'Money' && '(お金)'}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 w-1/2">
                                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                                            </div>
                                            <span className="text-sm font-mono text-slate-500 w-12 text-right">{item.value} / 100</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Layer Judgment */}
                <div className="md:col-span-12 bg-white/80 backdrop-blur-sm rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-white">
                    <h2 className="text-lg font-bold text-slate-800 mb-2">レイヤー判定</h2>
                    <p className="text-xs text-slate-500 mb-6 flex items-center gap-2">
                        <Info className="w-3 h-3" />
                        行動・成長・価値提供・成果の4指標からL/M/H層を推定しています。
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <div className="px-6 py-2 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-bold text-lg shadow-sm whitespace-nowrap">
                            {result.layer.level}層 ({result.layer.label})
                        </div>
                        <div className="text-sm text-slate-500 leading-relaxed py-2 sm:py-0">
                            <span className="inline-block bg-brand-50 text-brand-600 px-2 py-0.5 rounded text-xs font-bold mr-2">RESULT</span>
                            合計スコア 3 / 16  ・  <span className="text-slate-700 font-bold border-b-2 border-brand-200">{result.layer.monthlyIncomeEstimate}相当の入門層に適合</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Candidates */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800">サブジャンル候補</h2>
                    <div className="text-xs text-slate-400">
                        Based on your strengths analysis
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {result.candidates.map((candidate) => (
                        <GenreCard
                            key={candidate.id}
                            candidate={candidate}
                            isSelected={selectedCandidateId === candidate.id}
                            onSelect={() => setSelectedCandidateId(candidate.id)}
                        />
                    ))}
                </div>
            </div>

            {/* Footer Action */}
            {selectedCandidateId && (
                <div className="fixed bottom-0 left-0 right-0 py-6 px-4 bg-white/90 backdrop-blur-xl border-t border-slate-200 z-40 animate-slide-up shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 animate-bounce-short">
                                <Check className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-800">
                                    {result.candidates.find(c => c.id === selectedCandidateId)?.title} を選択しました！
                                </div>
                                <div className="text-xs text-slate-500">次のステップでは、このジャンルの競合分析とポジショニング提案を行います。</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 bg-white hover:bg-slate-50 transition-colors">
                                このまま確認を続ける
                            </button>
                            <button
                                onClick={onNext}
                                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-brand-500 text-white text-sm font-bold shadow-lg shadow-brand-200 hover:bg-brand-600 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <Briefcase className="w-4 h-4" />
                                Section 3 で競合分析を開始
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function GenreCard({ candidate, isSelected, onSelect }: { candidate: GenreCandidate, isSelected: boolean, onSelect: () => void }) {
    return (
        <div
            onClick={onSelect}
            className={clsx(
                "bg-white rounded-[24px] p-6 cursor-pointer transition-all duration-300 relative border-2 flex flex-col h-full group",
                isSelected
                    ? "border-brand-500 shadow-xl shadow-brand-100 scale-[1.02] z-10"
                    : "border-transparent shadow-lg shadow-slate-100/50 hover:border-brand-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
            )}
        >
            <div className="flex justify-between items-start mb-4">
                <span className="bg-brand-50 text-brand-600 dark:bg-slate-100 dark:text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {candidate.category}
                </span>
                <div className="flex items-center gap-1.5 text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                    <span className="text-xs font-bold">{candidate.confidence}% 確信度</span>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-brand-600 transition-colors">{candidate.title}</h3>
                <p className="text-xs text-slate-400 font-medium">{candidate.subtitle}</p>
            </div>

            <div className="flex-grow mb-6">
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-4 relative pl-3 border-l-2 border-brand-100">
                    {candidate.description}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                <MetricRow label="経歴" value={candidate.metrics.experience} />
                <MetricRow label="実績" value={candidate.metrics.achievement} />
                <MetricRow label="AI親和性" value={candidate.metrics.aiAffinity} highlight />
                <MetricRow label="市場性" value={candidate.metrics.marketability} />
            </div>

            <button
                className={clsx(
                    "w-full py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2",
                    isSelected
                        ? "bg-brand-500 text-white shadow-lg shadow-brand-200"
                        : "bg-slate-50 text-slate-600 hover:bg-brand-50 hover:text-brand-600"
                )}
            >
                {isSelected ? <><Check className="w-4 h-4" /> 選択済み</> : "選択する"}
            </button>
        </div>
    );
}

function MetricRow({ label, value, highlight }: { label: string, value: number, highlight?: boolean }) {
    return (
        <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">{label}</span>
            <span className={clsx("font-bold font-mono", highlight ? "text-brand-600" : "text-slate-600")}>{value}%</span>
        </div>
    );
}
