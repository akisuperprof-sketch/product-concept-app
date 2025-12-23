import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, Check } from 'lucide-react';

export default function Section1Input({ onAnalyze }: { onAnalyze: () => void }) {
    const [text, setText] = useState('');

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <button className="flex items-center text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium pl-1">
                <ArrowLeft className="w-4 h-4 mr-2" />
                トップに戻る
            </button>

            <div>
                <h1 className="text-3xl font-bold text-slate-800">Section1の結果を入力</h1>
                <p className="text-slate-500 mt-2">自己分析ツール（Section1）で得られた結果（テキストまたはJSON）を貼り付けてください。</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden">
                {/* Background decorative elements matching image */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-brand-50 to-brand-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                <div className="relative z-10 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-slate-700">分析結果の入力</h2>
                        <p className="text-sm text-slate-500">Section1の「結果をコピー」ボタンでコピーした内容をそのまま貼り付けてください</p>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-slate-600">Section1の分析結果</label>
                            <div className="relative group">
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    className="w-full h-80 p-6 rounded-2xl border border-slate-200 focus:border-brand-300 focus:ring-4 focus:ring-brand-50 transition-all resize-none text-slate-600 font-mono text-sm leading-relaxed scrollbar-thin placeholder:text-slate-300"
                                    placeholder={`=== 自分史分析結果 ===\n\n【あなたの特徴】\n挑戦を恐れず、論理的な思考で問題を解決するリーダータイプ\n\n【強み】\n1. 論理的思考力\n2. リーダーシップ...`}
                                />
                                <div className="absolute right-2 top-2 bottom-2 w-1.5 bg-slate-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden pointer-events-none">
                                    <div className="w-full h-1/3 bg-brand-200 rounded-full mt-2" />
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 text-center pt-1">
                                Section1の結果画面で「結果をコピー」ボタンを押し、ここに貼り付けてください
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5 pt-8 border-t border-slate-100">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-slate-700 flex items-center gap-2">
                                MBTIタイプ（任意）
                            </h2>
                            <span className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide">
                                INTJ / medium
                            </span>
                        </div>
                        <p className="text-sm text-slate-500">設定すると分析結果がパーソナライズされます。わからなければ空欄でも構いません。</p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="group">
                                <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">MBTIタイプ</label>
                                <div className="relative">
                                    <select className="w-full p-3.5 pr-10 rounded-xl border border-slate-200 text-slate-700 font-medium appearance-none bg-white focus:ring-2 focus:ring-brand-100 focus:border-brand-400 cursor-pointer hover:border-brand-300 transition-colors">
                                        <option>INTJ / 建築家</option>
                                        <option>ENTP / 討論者</option>
                                    </select>
                                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-brand-400 transition-colors" />
                                </div>
                            </div>
                            <div className="group">
                                <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">確信度</label>
                                <div className="relative">
                                    <select className="w-full p-3.5 pr-10 rounded-xl border border-slate-200 text-slate-700 font-medium appearance-none bg-white focus:ring-2 focus:ring-brand-100 focus:border-brand-400 cursor-pointer hover:border-brand-300 transition-colors">
                                        <option>medium（そこそこ）</option>
                                        <option>high（確信が高い）</option>
                                        <option>low（あまり自信なし）</option>
                                    </select>
                                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-brand-400 transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* Dropdown menu simulation from screenshot 3 (INTJ description) */}
                        <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100/80 hover:border-brand-100 transition-colors">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="px-2.5 py-0.5 bg-white border border-slate-200 rounded-md text-xs text-slate-600 font-bold tracking-wide shadow-sm">INTJ</span>
                                <span className="font-bold text-slate-700 text-sm">建築家</span>
                            </div>
                            <p className="text-sm text-slate-500 pl-0.5">想像力が豊かで、戦略的な思考の持ち主</p>
                        </div>

                        <button className="text-brand-500 bg-brand-50 hover:bg-brand-100 py-2.5 px-5 rounded-lg text-sm font-bold transition-colors w-max">
                            MBTIがわからない場合はこちら
                        </button>
                    </div>
                </div>
            </div>

            <div className="sticky bottom-6 pt-4">
                <button
                    onClick={onAnalyze}
                    className="w-full bg-brand-400 hover:bg-brand-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-brand-200/50 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                    分析を開始
                </button>
            </div>
        </div>
    );
}
