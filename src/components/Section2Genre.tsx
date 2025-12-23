import React, { useState } from 'react';
import { RefreshCw, Play, Info, Check, Sparkles, Brain, Briefcase, HelpCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { mockSection2Result } from '../services/mockData';
import clsx from 'clsx';
import type { GenreCandidate } from '../types';

export default function Section2Genre({ onNext }: { onNext: () => void }) {
    const result = mockSection2Result;
    const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);

    const data = [
        {
            name: 'Health',
            value: result.harmScore.health,
            color: '#4ade80',
            description: '体、心、精神の全般的な状態。QOLやウェルビーイングに関わるビジネスの種を探します。'
        },
        {
            name: 'Ambition',
            value: result.harmScore.ambition,
            color: '#3b82f6',
            description: 'キャリア、夢、自己実現の欲求。成長志向や教育に関連するビジネス市場の適性を測ります。'
        },
        {
            name: 'Relation',
            value: result.harmScore.relation,
            color: '#ec4899',
            description: '家族、同僚、恋人、コミュニティとの繋がり。信頼関係の構築が鍵となるサービス領域を特定します。'
        },
        {
            name: 'Money',
            value: result.harmScore.money,
            color: '#f59e0b',
            description: '収入、資産、生活コスト、経済的自立。直接的な利益提供や節約、投資に関わる市場を分析します。'
        },
    ];

    return (
        <div className="space-y-8 animate-fade-in pb-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="bg-brand-50 text-brand-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase">Phase 2</span>
                        <span className="bg-brand-50 text-brand-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">ビジネスジャンル推定</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <span className="p-2 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl text-brand-500 shadow-inner">
                            <Brain className="w-6 h-6" />
                        </span>
                        あなたの強みを活かせるジャンルを特定
                    </h1>
                    <p className="text-sm text-slate-500">入力データに基づき、市場の悩み(HARM)とあなたの資質が最も交差する領域を抽出しました。</p>
                </div>
            </div>

            {/* Analysis Result Overview (HARM & Layer) */}
            <div className="grid md:grid-cols-12 gap-6 items-stretch">

                {/* HARM Score */}
                <div className="md:col-span-12 lg:col-span-12 bg-white/80 backdrop-blur-sm rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-white">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="relative w-64 h-64 flex-shrink-0 group">
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
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Analysis</span>
                                <span className="text-3xl font-bold text-brand-600 italic">HARM</span>
                            </div>
                            {/* Hover info for chart */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-lg text-[10px] font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                グラフにカーソルを合わせると詳細が表示されます
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-lg font-bold text-slate-800">HARM分析モデル</h2>
                                    <div className="relative group/help">
                                        <HelpCircle className="w-4 h-4 text-slate-300 cursor-help" />
                                        <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-slate-800 text-white text-[10px] rounded-xl opacity-0 group-hover/help:opacity-100 transition-opacity pointer-events-none z-20 leading-relaxed shadow-xl">
                                            HARM分析とは、人の普遍的な悩み（Health, Ambition, Relation, Money）を分析し、どの領域であなたの強みが「課題解決」として最も価値を発揮できるかを判定する手法です。
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                                    適合判定: <span className="text-brand-600">{result.harmScore.primary} (第1優先)</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-5">
                                {data.map((item) => (
                                    <div key={item.name} className="flex items-center justify-between group cursor-default relative">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                                                    {item.name}
                                                    <span className="text-[10px] text-slate-400 font-normal">
                                                        {item.name === 'Health' && '(健康)'}
                                                        {item.name === 'Ambition' && '(野心)'}
                                                        {item.name === 'Relation' && '(関係)'}
                                                        {item.name === 'Money' && '(お金)'}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 w-1/2">
                                            <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100/50">
                                                <div className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_-2px_rgba(0,0,0,0.1)]"
                                                    style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                                            </div>
                                            <span className="text-[10px] font-mono font-bold text-slate-400 w-12 text-right">{item.value}%</span>
                                        </div>

                                        {/* Row Tooltip on hover */}
                                        <div className="absolute left-0 top-full mt-1 px-3 py-2 bg-white border border-slate-100 shadow-xl rounded-lg text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-10 w-64 leading-relaxed">
                                            {item.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Layer Judgment */}
                <div className="md:col-span-12 bg-white/80 backdrop-blur-sm rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-white group">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-bold text-slate-800">マーケット・レイヤー判定</h2>
                        <div className="relative">
                            <HelpCircle className="w-4 h-4 text-slate-300 cursor-help" />
                            <div className="absolute right-0 bottom-full mb-2 w-64 p-3 bg-slate-800 text-white text-[10px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 leading-relaxed shadow-xl">
                                あなたの現状の実績、発信、活動量から「どの層のターゲット」に最も刺さるかを判定しました。L(入門層)、M(実践層)、H(専門層)に分類されます。
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <div className="px-6 py-2 bg-slate-900 text-white rounded-xl border border-slate-800 font-bold text-base shadow-lg shadow-slate-200 whitespace-nowrap">
                            {result.layer.level} / {result.layer.label}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                            <span className="bg-brand-50 text-brand-600 px-2 py-0.5 rounded text-[10px] font-bold mr-2">LOGIC</span>
                            「{manualDataForNow}」の分析結果から、{result.layer.monthlyIncomeEstimate}相当のマーケットにおいて、最も効率的に影響力を発揮できるとAIが推奨しています。
                        </p>
                    </div>
                </div>
            </div>

            {/* Candidates */}
            <div className="space-y-6 pt-4">
                <div className="flex items-end justify-between border-b border-slate-200 pb-4">
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">推奨サブジャンル 3選</h2>
                        <p className="text-xs text-slate-500 mt-1">
                            あなたの強みと、分析されたHARMスコアの交点にある「勝てる」ジャンルを抽出しました。
                        </p>
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

            {/* Other Non-Match Examples */}
            <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-500 mb-6 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    今回のあなたの資質には「不適合」と判断されたジャンル例
                </h3>
                <div className="flex flex-wrap gap-3">
                    {['FXトレード', '短期離職防止コンサル', '不動産仲介', '格安SIM販売', '占い・スピリチュアル', 'ダイエットサプリ販売'].map(genre => (
                        <div key={genre} className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-400 font-medium grayscale">
                            {genre}
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-slate-400 mt-4 leading-relaxed">
                    ※これらはあなたの現在の強み（資質）や追求したい価値観とは、HARMスコアの相関が低いと判断されたため除外されています。自分に合っていないものを知ることで、より確信を持って選択できます。
                </p>
            </div>

            {/* Information about next step */}
            {!selectedCandidateId && (
                <div className="flex items-center justify-center p-8 border-2 border-dashed border-brand-100 rounded-[32px] bg-brand-50/20">
                    <p className="text-sm text-brand-600 font-bold flex items-center gap-2">
                        <HelpCircle className="w-4 h-4" />
                        ジャンルを選択すると、その分野の深層リサーチ（Step 3）へ進めます
                    </p>
                </div>
            )}

            {/* Floating Action Menu */}
            {selectedCandidateId && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-4 bg-slate-900 text-white rounded-[24px] z-50 animate-fade-in shadow-2xl flex items-center gap-8 border border-white/10 ring-8 ring-black/5">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Selected Genre</span>
                        <span className="text-sm font-bold text-brand-400">
                            {result.candidates.find(c => c.id === selectedCandidateId)?.title}
                        </span>
                    </div>
                    <button
                        onClick={onNext}
                        className="bg-brand-500 hover:bg-brand-600 px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 group whitespace-nowrap"
                    >
                        競合分析を開始
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            )}
        </div>
    );
}

// Helper icons
const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const manualDataForNow = "自己分析スコア";

function GenreCard({ candidate, isSelected, onSelect }: { candidate: GenreCandidate, isSelected: boolean, onSelect: () => void }) {
    return (
        <div
            onClick={onSelect}
            className={clsx(
                "bg-white rounded-[28px] p-7 cursor-pointer transition-all duration-400 relative border-2 flex flex-col h-full group",
                isSelected
                    ? "border-brand-500 shadow-2xl shadow-brand-100 scale-[1.03] z-10"
                    : "border-transparent shadow-xl shadow-slate-100 hover:border-brand-200 hover:-translate-y-2"
            )}
        >
            <div className="flex justify-between items-start mb-5">
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    {candidate.category}
                </span>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-brand-50 rounded-lg">
                    <Sparkles className="w-3 h-3 text-brand-500" />
                    <span className="text-[10px] font-bold text-brand-600">{candidate.confidence}% Match</span>
                </div>
            </div>

            <div className="mb-5">
                <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-brand-600 transition-colors leading-tight">{candidate.title}</h3>
                <p className="text-[11px] text-slate-400 font-bold tracking-wide">{candidate.subtitle}</p>
            </div>

            <div className="flex-grow mb-6 relative">
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-4 pl-4 border-l-2 border-slate-100 group-hover:border-brand-200 transition-colors">
                    {candidate.description}
                </p>
                <div className="absolute bottom-0 right-0 p-1">
                    <Info className="w-3.5 h-3.5 text-slate-200 group-hover:text-brand-300 transition-colors" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-5 mb-8 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <MetricRow label="経歴適合" value={candidate.metrics.experience} />
                <MetricRow label="発信実績" value={candidate.metrics.achievement} />
                <MetricRow label="AI親和性" value={candidate.metrics.aiAffinity} highlight />
                <MetricRow label="市場需要" value={candidate.metrics.marketability} />
            </div>

            <button
                className={clsx(
                    "w-full py-4 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2",
                    isSelected
                        ? "bg-brand-500 text-white shadow-xl shadow-brand-200"
                        : "bg-slate-900 text-white hover:bg-black"
                )}
            >
                {isSelected ? <><Check className="w-4 h-4" /> 選択済み</> : "このジャンルを詳しく調査"}
            </button>
        </div>
    );
}

function MetricRow({ label, value, highlight }: { label: string, value: number, highlight?: boolean }) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">{label}</span>
            <div className="flex items-center gap-2">
                <span className={clsx("text-sm font-bold font-mono", highlight ? "text-brand-600" : "text-slate-700")}>{value}%</span>
                <div className="flex-1 h-1 bg-white rounded-full overflow-hidden">
                    <div className={clsx("h-full rounded-full transition-all duration-700", highlight ? "bg-brand-500" : "bg-slate-300")} style={{ width: `${value}%` }} />
                </div>
            </div>
        </div>
    );
}
