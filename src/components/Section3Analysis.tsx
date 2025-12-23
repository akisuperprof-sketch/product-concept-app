import { Zap, Search, Activity, BarChart3, TrendingUp, Lightbulb, ArrowLeft, Check, Globe, Info, ChevronDown } from 'lucide-react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell, ReferenceArea } from 'recharts';
import { mockMarketAnalysis } from '../services/mockData';
import clsx from 'clsx';

interface Section3AnalysisProps {
    onBack?: () => void;
}

export default function Section3Analysis({ onBack }: Section3AnalysisProps) {
    const data = mockMarketAnalysis;

    return (
        <div className="space-y-8 animate-fade-in pb-24 max-w-5xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="bg-gradient-to-br from-brand-50 via-white to-brand-100 rounded-[40px] p-6 sm:p-10 border border-brand-100 relative overflow-hidden shadow-sm">
                <div className="absolute -top-10 -right-10 p-12 opacity-5">
                    <Globe className="w-64 h-64 text-brand-600" />
                </div>
                <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-sm">Step 3</span>
                        <span className="bg-brand-100 text-brand-700 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">市場戦略シミュレーション</span>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold text-slate-900 flex flex-col md:flex-row md:items-center gap-4">
                        <div className="hidden md:flex p-3 bg-white rounded-2xl shadow-sm text-brand-500 border border-brand-50">
                            <Activity className="w-8 h-8" />
                        </div>
                        選定ジャンルの深層リサーチ
                    </h1>
                    <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
                        最新の情報モデルに基づき、選択したビジネス領域の競合、価格設計、SNSトレンドを解析。<br className="hidden md:block" />
                        あなたが勝てるポジショニングをシミュレーションします。
                    </p>
                </div>
            </div>

            {/* Analysis Progress Steps */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                    { id: 1, text: '競合リサーチ', status: 'done' },
                    { id: 2, text: '価格帯マッピング', status: 'done' },
                    { id: 3, text: '市場空白地帯の特定', status: 'done' },
                    { id: 4, text: 'SNSトレンド解析', status: 'done' },
                    { id: 5, text: '戦略レポート生成', status: 'current' },
                ].map((step) => (
                    <div key={step.id} className={clsx(
                        "p-3 sm:p-4 rounded-2xl border transition-all text-[10px] sm:text-xs font-bold flex flex-col gap-2",
                        step.status === 'done' ? "bg-brand-50 border-brand-200 text-brand-700" : "bg-white border-slate-100 text-slate-400"
                    )}>
                        <div className="flex items-center justify-between">
                            <span className="text-[8px] uppercase tracking-widest opacity-60">Step 0{step.id}</span>
                            {step.status === 'done' && <Check className="w-2.5 h-2.5" />}
                        </div>
                        {step.text}
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Side: Market Stats */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-slate-200/40 border border-white">
                        <div className="flex items-center gap-3 mb-8 text-brand-600">
                            <Search className="w-5 h-5" />
                            <h3 className="font-bold text-slate-800">リサーチ概要</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-end pb-4 border-b border-slate-50">
                                <span className="text-sm font-medium text-slate-400">特定された競合数</span>
                                <span className="text-2xl font-bold text-slate-800">{data.competitorCount} <span className="text-xs">件</span></span>
                            </div>
                            <div className="flex justify-between items-end pb-4 border-b border-slate-50">
                                <span className="text-sm font-medium text-slate-400">市場価格レンジ</span>
                                <span className="text-xl font-bold text-slate-800">¥{data.priceRange.min}k〜{data.priceRange.max}k</span>
                            </div>
                            <div className="space-y-3 pt-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">展開プラットフォーム</span>
                                <div className="flex flex-wrap gap-2">
                                    {data.majorPlatforms.map(p => (
                                        <span key={p} className="px-2.5 py-1 bg-slate-50 text-slate-500 rounded-lg text-[9px] font-bold border border-slate-100 uppercase tracking-tight">{p}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[32px] p-8 shadow-2xl text-white relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Zap className="w-24 h-24 text-brand-400" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4 font-bold text-brand-400 italic text-sm">
                                <Zap className="w-4 h-4 fill-current" />
                                STRATEGY HINT
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                                この市場は「低単価の教材型」と「高単価の個別サポート」の二極化が進んでいます。
                                <span className="text-brand-400 font-bold ml-1">中間領域の「伴走型コミュニティ」</span>に大きな機会があります。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main: Market Map */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-[40px] p-6 sm:p-8 shadow-xl shadow-slate-200/40 border border-white h-full flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl"><BarChart3 className="w-5 h-5" /></div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">市場ポジショニングマップ</h3>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 whitespace-nowrap">Price (k) vs Value Integration</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-100 w-fit">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-emerald-700 whitespace-nowrap">Blue Ocean Area</span>
                            </div>
                        </div>

                        {/* Analysis Map Help */}
                        <div className="bg-slate-50 p-4 rounded-2xl mb-6 text-[10px] text-slate-500 leading-relaxed flex gap-3">
                            <Info className="w-4 h-4 text-brand-400 flex-shrink-0" />
                            <div>
                                <span className="font-bold text-slate-700 block mb-1">マップの読み方</span>
                                右上の薄緑色のエリアは、価格が高めで提供価値（伴走度合い）も高い「空白地帯」です。
                                単なるノウハウ提供から一歩踏み出し、結果を保証する伴走型サービスが最も利益率の高いポジショニングとなります。
                            </div>
                        </div>

                        <div className="flex-grow min-h-[350px] relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                                    <XAxis
                                        type="number"
                                        dataKey="x"
                                        name="Price"
                                        domain={[0, 150]}
                                        tick={{ fontSize: 9, fill: '#94a3b8', fontWeight: 600 }}
                                        stroke="#f1f5f9"
                                    />
                                    <YAxis
                                        type="number"
                                        dataKey="y"
                                        name="Value"
                                        domain={[0, 100]}
                                        tick={{ fontSize: 9, fill: '#94a3b8', fontWeight: 600 }}
                                        stroke="#f1f5f9"
                                    />
                                    <ZAxis type="number" range={[100, 400]} />
                                    <Tooltip
                                        cursor={{ strokeDasharray: '3 3' }}
                                        content={({ active, payload }) => {
                                            if (active && payload && payload.length) {
                                                const p = payload[0].payload;
                                                return (
                                                    <div className="bg-slate-900 p-3 rounded-xl border border-white/10 shadow-2xl text-white">
                                                        <p className="text-[10px] font-bold mb-1">{p.label || '解析対象'}</p>
                                                        <p className="text-[9px] text-slate-400 italic">単価: ¥{p.x}k / 付加価値: {p.y}%</p>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        }}
                                    />
                                    <ReferenceArea x1={80} x2={145} y1={65} y2={95} fill="rgba(34, 197, 94, 0.08)" stroke="none" />
                                    <Scatter name="Market Data" data={data.marketMap.points}>
                                        {data.marketMap.points.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.x > 80 && entry.y > 60 ? '#22c55e' : entry.color} />
                                        ))}
                                    </Scatter>
                                </ScatterChart>
                            </ResponsiveContainer>

                            {/* Axis Labels */}
                            <div className="absolute top-[45%] -left-8 transform -rotate-90 text-[8px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <span className="opacity-40">単発配布</span>
                                <div className="w-12 h-px bg-slate-100" />
                                <span className="text-slate-500">伴走・定着サポート</span>
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <span className="opacity-40">低価格</span>
                                <div className="w-12 h-px bg-slate-100" />
                                <span className="text-slate-500">プレミアム価格 (¥k)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*SNS Insight (Grok X) */}
            <div className="bg-white rounded-[40px] p-6 sm:p-10 shadow-xl shadow-slate-200/40 border border-white">
                <div className="flex items-center gap-3 mb-10">
                    <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl"><TrendingUp className="w-5 h-5" /></div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-800">SNS需要インサイト (X/Grok解析)</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-orange-500 bg-orange-50 w-fit px-3 py-1 rounded-full uppercase">
                            Buzz Hooks
                        </div>
                        <div className="space-y-3">
                            {data.grokAnalysis.buzzHooks.map((h, i) => (
                                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100/50 text-[11px] text-slate-600 font-medium leading-relaxed leading-5">
                                    {h}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-brand-600 bg-brand-50 w-fit px-3 py-1 rounded-full uppercase">
                            Market Needs
                        </div>
                        <div className="space-y-4 pt-2">
                            {data.grokAnalysis.topNeeds.map((need, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-[11px] font-bold text-slate-700">
                                        <span>{need.text}</span>
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, j) => (
                                                <span key={j} className={clsx("text-[10px]", j < need.stars ? "text-brand-500" : "text-slate-100")}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-400/60 rounded-full" style={{ width: `${need.stars * 20}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 bg-emerald-50 w-fit px-3 py-1 rounded-full uppercase">
                            Trends
                        </div>
                        <div className="grid gap-3 pt-1">
                            {data.grokAnalysis.trends.current.concat(data.grokAnalysis.trends.future).slice(0, 4).map((t, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm text-[11px] group hover:border-brand-300 transition-colors">
                                    <span className="font-bold text-slate-700">{t}</span>
                                    <ChevronDown className="w-3 h-3 text-slate-200 group-hover:text-brand-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Strategic Conclusion */}
            <div className="bg-slate-900 rounded-[48px] p-8 sm:p-12 shadow-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] -z-0" />
                <div className="relative z-10 space-y-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-2">
                            <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-300">
                                市場攻略レポート・結論
                            </h2>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Simulation Conclusion</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 border border-white/20 p-2 rounded-2xl">
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest pl-3">Suitability</span>
                            <span className="px-5 py-2 bg-brand-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-500/20">High Match</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-bold text-brand-400 uppercase tracking-widest flex items-center gap-2">
                                <Lightbulb className="w-4 h-4" /> Recommended Position
                            </h4>
                            <p className="text-base sm:text-lg font-bold leading-relaxed text-brand-50">
                                {data.differentiation.title}モデルとしての参入
                            </p>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                                {data.differentiation.description}
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-bold text-brand-400 uppercase tracking-widest flex items-center gap-2">
                                <Check className="w-4 h-4" /> Action Plan
                            </h4>
                            <div className="grid gap-3">
                                {data.conclusion.quickWins.map((win, i) => (
                                    <div key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0 border border-brand-500/30">{i + 1}</div>
                                        <span className="text-[11px] text-slate-300 leading-relaxed font-medium uppercase">{win}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <button
                            onClick={onBack}
                            className="w-full md:w-auto px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-sm hover:bg-brand-50 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            分析をリセットしてやり直す
                        </button>
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest text-center px-4">
                            ※本レポートはAIによる独自のシミュレーション結果であり、投資の成果を保証するものではありません。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
