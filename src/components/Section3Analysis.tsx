import React, { useState } from 'react';
import { RefreshCw, ExternalLink, ChevronDown, ChevronUp, Zap, Search, Activity, BarChart3, TrendingUp, AlertTriangle, Lightbulb, GraduationCap, ArrowLeft, Home } from 'lucide-react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell, ReferenceArea, ReferenceLine } from 'recharts';
import { mockMarketAnalysis } from '../services/mockData';
import clsx from 'clsx';

export default function Section3Analysis() {
    const data = mockMarketAnalysis;
    const [isCompetitorListOpen, setIsCompetitorListOpen] = useState(true);

    return (
        <div className="space-y-8 animate-fade-in pb-24">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-50 to-indigo-50 rounded-[32px] p-8 border border-brand-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Search className="w-32 h-32 text-brand-600" />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-brand-500/10 text-brand-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase">Section 3</span>
                        <span className="bg-brand-500/10 text-brand-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">競合分析</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
                        <Search className="w-8 h-8 text-brand-500" />
                        AI Deep Research + X分析で市場を掴む
                    </h1>
                    <p className="text-sm text-slate-600 max-w-2xl">Section2で選択したジャンルを自動リサーチし、競合マップとポジショニング案を提示します。</p>
                </div>
                <div className="absolute top-8 right-8 hidden md:block">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur border border-slate-200 text-xs font-bold text-slate-600 hover:bg-white transition-colors shadow-sm">
                        <RefreshCw className="w-3.5 h-3.5" />
                        最新を取得
                    </button>
                </div>
            </div>

            {/* Learning Steps Accordion or Static Block */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                            <Lightbulb className="w-4 h-4 text-cyan-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">プロはこうやって競合分析する</h3>
                        <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded">学習</span>
                    </div>
                    <div className="text-xs font-bold text-slate-400 flex items-center gap-1 cursor-pointer hover:text-brand-500">
                        詳しく見る <ChevronDown className="w-3 h-3" />
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-2">
                    {[
                        { id: 1, text: '競合を集める' },
                        { id: 2, text: '分類して分析する' },
                        { id: 3, text: '需要のある領域を見つける' },
                        { id: 4, text: 'SNSで需要を確認する' },
                        { id: 5, text: 'ポジショニング案を作る' },
                    ].map((step, idx) => (
                        <div key={step.id} className={clsx("p-3 rounded-xl border text-xs font-medium flex flex-col gap-1", idx <= 4 ? "bg-green-50 border-green-200 text-green-800" : "bg-slate-50 border-slate-100 text-slate-400")}>
                            <div className="flex items-center gap-1 opacity-70 mb-1">
                                <div className="w-3 h-3 rounded-full border border-current flex items-center justify-center text-[8px]">✓</div>
                                <span className="uppercase tracking-wider text-[8px]">STEP {step.id}</span>
                            </div>
                            {step.text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Research Summary Cards */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Deep Research */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="p-2 bg-green-50 text-green-600 rounded-lg"><Search className="w-4 h-4" /></span>
                        <h3 className="font-bold text-slate-800">Deep Research</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            競合 <span className="font-bold text-slate-900">{data.competitorCount}件</span> 発見
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            価格帯: <span className="font-bold text-slate-900">¥{data.priceRange.min} ～ ¥{data.priceRange.max}</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            主要PF: <span className="font-bold text-slate-900">{data.majorPlatforms.join(', ')}</span>
                        </li>
                    </ul>
                </div>

                {/* Grok X Analysis */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="p-2 bg-slate-100 text-slate-600 rounded-lg"><Activity className="w-4 h-4" /></span>
                        <h3 className="font-bold text-slate-800">Grok X分析</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            バズ投稿 <span className="font-bold text-slate-900">3件</span> 分析
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            需要キーワード <span className="font-bold text-slate-900">4件</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            トレンド <span className="font-bold text-slate-900">4件</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Competitor List (Collapsible) */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setIsCompetitorListOpen(!isCompetitorListOpen)}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                            <BarChart3 className="w-4 h-4" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-sm">競合商品一覧（{data.competitorCount}件）</h3>
                            <p className="text-xs text-slate-400">発見した競合の詳細情報</p>
                        </div>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                        {isCompetitorListOpen ? '閉じる' : '展開する'}
                        {isCompetitorListOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                </div>

                {isCompetitorListOpen && (
                    <div className="grid gap-3 mt-6">
                        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin">
                            {data.competitors.map((comp) => (
                                <div key={comp.id} className="min-w-[200px] p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-200 transition-colors">
                                    <div className="font-bold text-xs text-slate-700 line-clamp-2 mb-2 h-8">{comp.name}</div>
                                    <div className="flex items-center justify-between text-xs text-slate-500">
                                        <span className="font-mono">¥{comp.price.toLocaleString()}</span>
                                        <span className="px-1.5 py-0.5 bg-white border rounded text-[10px] uppercase">{comp.platform}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="min-w-[100px] flex items-center justify-center p-4 bg-slate-50/50 rounded-xl border border-dashed border-slate-200 text-xs text-slate-400">
                                +{data.competitorCount - data.competitors.length}件
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Analysis Framework & Market Demand */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-8">
                {/* Framework Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-50 text-indigo-500 rounded-lg"><BarChart3 className="w-5 h-5" /></div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800">分析フレームワーク</h3>
                        <p className="text-xs text-slate-400">競合データからの分析結果</p>
                    </div>
                </div>

                {/* Price Analysis */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <span className="text-slate-400 font-normal">①</span> 価格帯分析
                    </div>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                                <span>低価格(~¥10K):</span>
                                <span className="flex items-center gap-2">7件 (78%) <span className="bg-red-500 text-white px-1.5 rounded-full text-[10px]">飽和</span></span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[78%] rounded-full" />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                                <span>中価格(¥10K-30K):</span>
                                <span className="flex items-center gap-2">1件 (11%) <span className="bg-slate-100 text-slate-500 px-1.5 rounded-full text-[10px]">参入余地あり</span></span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-[11%] rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-slate-100" />

                {/* Demand Analysis (Intensity & Verification) */}
                <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-4">
                        <AlertTriangle className="w-4 h-4 text-orange-400" /> 需要市場分析
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold text-slate-600 flex items-center gap-2"><BarChart3 className="w-3 h-3" /> 競争激化エリア</span>
                                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">HIGH</span>
                            </div>
                            <ul className="space-y-1 text-xs text-slate-500 list-disc list-inside">
                                <li>ChatGPT副業全般</li>
                                <li>初心者向けAI活用術</li>
                            </ul>
                            <div className="text-[10px] text-slate-400 mt-2 text-right">推定競合数: かなり多い</div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold text-slate-600 flex items-center gap-2">市場検証レベル</span>
                                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">HIGH</span>
                            </div>
                            <ul className="space-y-1 text-xs text-slate-500 list-none">
                                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-brand-500" /> 有料noteが複数存在</li>
                                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-brand-500" /> 初心者向け訴求が多い</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Differentiation Opportunity */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-50 text-cyan-500 rounded-lg"><Zap className="w-5 h-5" /></div>
                    <h3 className="text-lg font-bold text-slate-800">差別化機会</h3>
                </div>
                <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-slate-800 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-400" />
                            戦略設計・体系化
                        </h4>
                        <span className="text-[10px] font-bold text-green-700 bg-green-200/50 px-2 py-1 rounded">適合度 HIGH</span>
                    </div>
                    <p className="text-xs text-slate-600 mb-3">断片的ノウハウではなく、思考フレームと設計思想を提供</p>
                    <div className="flex gap-2 text-[10px] text-slate-500">
                        <span className="px-2 py-1 bg-white rounded border border-green-200">・教育者向け生成AI設計論</span>
                        <span className="px-2 py-1 bg-white rounded border border-green-200">・専門職x生成AI活用戦略</span>
                    </div>
                </div>
            </div>

            {/* Market Map (Scatter Plot) */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-500 rounded-lg"><Activity className="w-5 h-5" /></div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800">市場機会マップ</h3>
                        <p className="text-xs text-slate-400">L層向け市場で「プロンプト集」ではなく「思考と構造」を教えられる提供者が少ない点</p>
                    </div>
                </div>

                <div className="h-[300px] w-full bg-slate-50/50 rounded-2xl border border-slate-100 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
                            <XAxis type="number" dataKey="x" name="Price" unit="k" domain={[0, 150]} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                            <YAxis type="number" dataKey="y" name="Value" domain={[0, 100]} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                            <ZAxis type="number" range={[100, 300]} />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            {/* Blue Ocean Area Highlight */}
                            <ReferenceArea x1={80} x2={150} y1={60} y2={100} fill="rgba(16, 185, 129, 0.1)" stroke="none" />

                            <Scatter name="Competitors" data={data.marketMap.points} fill="#8884d8">
                                {data.marketMap.points.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Scatter>
                        </ScatterChart>
                    </ResponsiveContainer>
                    <div className="absolute top-2 right-2 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">
                        Blue Ocean Area
                    </div>

                    {/* Axis Labels Overlay */}
                    <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xs text-slate-400 font-bold">価格</div>
                    <div className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 -rotate-90 text-xs text-slate-400 font-bold">商品形式</div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-6 px-4">
                    <span>ebook</span>
                    <span>video_course</span>
                    <span>consulting</span>
                    <span>community</span>
                </div>
            </div>

            {/* Grok X Analysis Details */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-sky-50 text-sky-500 rounded-lg"><TrendingUp className="w-5 h-5" /></div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800">Grok X分析結果</h3>
                        <p className="text-xs text-slate-400">SNSから抽出したインサイト</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Buzz Hooks */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/80">
                        <h4 className="flex items-center gap-2 text-xs font-bold text-orange-500 mb-3">
                            <Zap className="w-3 h-3 fill-current" /> バズ傾向
                        </h4>
                        <p className="text-[10px] text-slate-400 mb-2">効果的なフック</p>
                        <ul className="space-y-2 mb-4">
                            {data.grokAnalysis.buzzHooks.map((h, i) => (
                                <li key={i} className="text-xs text-slate-700 font-medium pl-2 border-l-2 border-orange-200">{h}</li>
                            ))}
                        </ul>
                        <p className="text-[10px] text-slate-400 mb-1">投稿タイミング</p>
                        <p className="text-xs text-slate-600">平日19-21時、土曜10-12時</p>
                    </div>

                    {/* User Needs */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/80">
                        <h4 className="flex items-center gap-2 text-xs font-bold text-indigo-500 mb-3">
                            <Activity className="w-3 h-3" /> 需要・悩みトップ5
                        </h4>
                        <ul className="space-y-3">
                            {data.grokAnalysis.topNeeds.map((need, i) => (
                                <li key={i}>
                                    <div className="flex justify-between items-center text-xs text-slate-700 mb-0.5">
                                        <span className="line-clamp-1">{need.text}</span>
                                        <div className="flex text-orange-400 text-[8px] space-x-0.5">
                                            {[...Array(need.stars)].map((_, j) => <span key={j}>★</span>)}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Trends */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/80">
                        <h4 className="flex items-center gap-2 text-xs font-bold text-green-500 mb-3">
                            <TrendingUp className="w-3 h-3" /> トレンド
                        </h4>
                        <div className="space-y-3">
                            <div>
                                <p className="text-[10px] text-slate-400 mb-1">現在のトレンド</p>
                                <div className="flex flex-wrap gap-1">
                                    {data.grokAnalysis.trends.current.map(t => <span key={t} className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] border border-green-200">{t}</span>)}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 mb-1">今後伸びそう</p>
                                <div className="flex flex-wrap gap-1">
                                    {data.grokAnalysis.trends.future.map(t => <span key={t} className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] border border-blue-200">{t}</span>)}
                                </div>
                            </div>
                            <div>
                                <div className="px-2 py-1 bg-red-100 text-red-700 rounded text-[10px] border border-red-200 inline-block mt-2">
                                    過密領域: ChatGPT基本プロンプト
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conclusion & Learnings */}
            <div className="bg-gradient-to-br from-white to-brand-50 rounded-3xl p-8 shadow-lg shadow-brand-100/50 border border-brand-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-brand-500 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">今回の競合分析で学んだこと</h3>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200">振り返り</span>
                </div>
                <div className="grid gap-3">
                    {[
                        '1. 競合を9件以上集めると傾向が見える',
                        '2. 2軸（価格xサポート）で分類すると差別化の余地が見える',
                        '3. 差別化軸の仮説をSNSで需要確認',
                        '4. 需要市場x差別化軸x自分の強み = 最適なポジション'
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                            <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] flex-shrink-0">
                                <Check className="w-3 h-3" />
                            </div>
                            {item}
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-center gap-3 text-yellow-800 text-xs font-bold">
                    <Lightbulb className="w-4 h-4" />
                    この方法を覚えておけば、他のジャンルでも同じように競合分析ができます！
                </div>
            </div>

            {/* Navigation Footer */}
            <div className="fixed bottom-0 left-0 right-0 py-4 px-4 bg-white/80 backdrop-blur-md border-t border-slate-200 z-40">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold hover:bg-slate-200 transition-colors">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Section2へ戻る
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-500 text-xs font-bold hover:bg-slate-50 transition-colors">
                        <Home className="w-3.5 h-3.5" />
                        入力へ戻る
                    </button>
                </div>
            </div>
        </div>
    );
}
