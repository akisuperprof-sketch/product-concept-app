import { ArrowLeft, ChevronDown, Clipboard, Edit3 } from 'lucide-react';
import { useState } from 'react';

type InputMode = 'json' | 'manual';

export default function Section1Input({ onAnalyze }: { onAnalyze: (data: string) => void }) {
    const [mode, setMode] = useState<InputMode>('json');
    const [jsonText, setJsonText] = useState('');

    // Manual form states
    const [manualData, setManualData] = useState({
        characteristics: '',
        strengths: ['', '', ''],
        strengthDetails: '',
        highlights: '',
        values: '',
        behavior: '',
        harmFocus: '',
        gender: '',
        age: ''
    });

    const handleManualChange = (key: string, value: string | string[]) => {
        setManualData(prev => ({ ...prev, [key]: value }));
    };

    const handleAnalyzeClick = () => {
        if (mode === 'json') {
            onAnalyze(jsonText);
        } else {
            const combinedText = `
=== 手動入力データ ===
【基本属性】性別: ${manualData.gender}, 年齢: ${manualData.age}
【自身の人生の特徴】${manualData.characteristics}
【強み3選】
1. ${manualData.strengths[0]}
2. ${manualData.strengths[1]}
3. ${manualData.strengths[2]}
【強みの詳細】${manualData.strengthDetails}
【キャリアのハイライト】${manualData.highlights}
【大切にしている価値観】${manualData.values}
【行動パターン】${manualData.behavior}
【HARMの関心度（健康・野心・人間関係・お金）】${manualData.harmFocus}
            `.trim();
            onAnalyze(combinedText);
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in pb-12 px-4 sm:px-6">
            <button className="flex items-center text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium pl-1">
                <ArrowLeft className="w-4 h-4 mr-2" />
                トップに戻る
            </button>

            <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">分析データの入力</h1>
                <p className="text-slate-500 mt-2">あなたの過去の経験や価値観から、最適なビジネスを見つけ出します。</p>
            </div>

            {/* Mode Selector Tab */}
            <div className="flex p-1 bg-slate-100 rounded-2xl w-full max-w-md mx-auto md:mx-0">
                <button
                    onClick={() => setMode('json')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${mode === 'json' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                        }`}
                >
                    <Clipboard className="w-4 h-4" />
                    データ貼り付け
                </button>
                <button
                    onClick={() => setMode('manual')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${mode === 'manual' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                        }`}
                >
                    <Edit3 className="w-4 h-4" />
                    フォーム入力
                </button>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-brand-50 to-brand-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                <div className="relative z-10">
                    {mode === 'json' ? (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700">解析データ一括入力</label>
                                <textarea
                                    value={jsonText}
                                    onChange={(e) => setJsonText(e.target.value)}
                                    className="w-full h-80 p-6 rounded-2xl border border-slate-200 focus:border-brand-300 focus:ring-4 focus:ring-brand-50 transition-all resize-none text-slate-600 font-mono text-sm leading-relaxed"
                                    placeholder={`解析済みのリサーチデータをここに貼り付けてください...\n\n例：\n{\n  "characteristics": "挑戦を恐れないリーダー",\n  "strengths": ["論理的思考", "行動力"]\n}`}
                                />
                                <p className="text-xs text-slate-400 text-center">
                                    コピーした分析結果（テキスト形式）をそのまま貼り付けてください
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <h2 className="text-lg font-bold text-slate-800 border-l-4 border-brand-500 pl-3">自己分析シート</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">性別</label>
                                    <select
                                        value={manualData.gender}
                                        onChange={(e) => handleManualChange('gender', e.target.value)}
                                        className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-100 outline-none"
                                    >
                                        <option value="">選択してください</option>
                                        <option value="男性">男性</option>
                                        <option value="女性">女性</option>
                                        <option value="回答しない">回答しない</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">年齢</label>
                                    <input
                                        type="text"
                                        value={manualData.age}
                                        onChange={(e) => handleManualChange('age', e.target.value)}
                                        placeholder="例: 35歳"
                                        className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-100 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">自身の特徴</label>
                                <textarea
                                    value={manualData.characteristics}
                                    onChange={(e) => handleManualChange('characteristics', e.target.value)}
                                    placeholder="例: 未知の領域に飛び込む好奇心と、冷静な現状分析を両立できるタイプです。"
                                    className="w-full h-24 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-100 outline-none resize-none placeholder:opacity-50"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold text-slate-700">強み 3項目</label>
                                <div className="space-y-3">
                                    {manualData.strengths.map((s, i) => (
                                        <input
                                            key={i}
                                            value={s}
                                            onChange={(e) => {
                                                const newS = [...manualData.strengths];
                                                newS[i] = e.target.value;
                                                handleManualChange('strengths', newS);
                                            }}
                                            placeholder={`強み ${i + 1}（例: ${['迅速な決断力', '共感型コミュニケーション', 'データに基づく課題抽出'][i]}）`}
                                            className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-100 outline-none placeholder:opacity-50"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">大切にしている価値観</label>
                                <textarea
                                    value={manualData.values}
                                    onChange={(e) => handleManualChange('values', e.target.value)}
                                    placeholder="例: 「自由と責任」「誠実さ」「常に学習を続けること」を大切にしています。"
                                    className="w-full h-24 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-100 outline-none resize-none placeholder:opacity-50"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">HARM関心度（健康・野心・関係・お金）</label>
                                <textarea
                                    value={manualData.harmFocus}
                                    onChange={(e) => handleManualChange('harmFocus', e.target.value)}
                                    placeholder="例: 現在は「野心」と「お金」の比重が高く、将来の経済的安定と自己実現に強い関心があります。"
                                    className="w-full h-24 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-100 outline-none resize-none placeholder:opacity-50"
                                />
                            </div>
                        </div>
                    )}

                    <div className="mt-10 pt-8 border-t border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-bold text-slate-700">分析エンジンの設定</h3>
                            <span className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-[10px] font-bold font-mono">
                                GEMINI-2.0-FLASH
                            </span>
                        </div>
                        <button
                            onClick={handleAnalyzeClick}
                            disabled={mode === 'json' ? !jsonText : !manualData.characteristics}
                            className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 text-white font-bold text-lg py-5 rounded-2xl shadow-xl shadow-brand-100 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                        >
                            AIビジネスリサーチを開始
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
