import { ArrowRight, Lightbulb, Target, Cpu } from 'lucide-react';

interface LandingPageProps {
    onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <div className="min-h-screen bg-transparent">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-50/30 rounded-full blur-3xl -z-10" />

                <div className="animate-fade-in max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-100 shadow-sm mb-8">
                        <Cpu className="w-4 h-4 text-brand-500" />
                        <span className="text-sm font-medium text-brand-600 tracking-wide">AIビジネスリサーチ戦略シュミレーター</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                        あなたのキャリアから<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-indigo-600 to-violet-600">
                            最適なビジネス領域
                        </span>を発掘
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        自己分析の結果をAIが多角的に解析。<br />
                        あなたに最適なビジネス展開の提案から、競合リサーチまで、戦略立案のすべてをサポートします。
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={onStart}
                            className="group relative px-10 py-5 bg-brand-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-200 hover:bg-brand-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                        >
                            今すぐ始める
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-sm text-slate-400">所要時間：約10〜20分</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">このツールでできること</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all group">
                        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors">
                            <Lightbulb className="w-7 h-7 text-brand-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4">HARM多角分析</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Health(健康)・Ambition(野心)・Relation(人間関係)・Money(お金)の4軸で、あなたの資質を可視化。独自の相関アルゴリズムにより、最も価値を発揮できるビジネス領域を特定します。
                        </p>
                    </div>

                    <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all group">
                        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                            <Target className="w-7 h-7 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4">高度な競合・市場調査</h3>
                        <p className="text-slate-600 leading-relaxed">
                            最新のAIが深層Webリサーチを実行。選択したジャンルの主要プラットフォーム（note, Brain, Tips等）における競合を特定し、勝率の高いボジショニングを提案します。
                        </p>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">ご利用の流れ</h2>

                <div className="space-y-12">
                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-brand-100">1</div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">分析データの入力</h3>
                            <p className="text-slate-600">既存の分析シート（JSON）を貼り付けるか、専用フォームから基本情報を入力してください。</p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-brand-50">2</div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">ビジネスジャンルの選択</h3>
                            <p className="text-slate-600">AIが提案する複数の有望なビジネス領域から、あなたの興味や適性に合うものを選択します。</p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-400 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-brand-50/50">3</div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">戦略レポートの生成</h3>
                            <p className="text-slate-600">選択した領域について、競合分析、価格設計、トレンド予測を含む詳細な戦略マップを自動生成します。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Safety Disclaimer */}
            <footer className="py-12 px-6 text-center border-t border-slate-200/50 bg-white/30">
                <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    ※本サービスはAIによるシミュレーションを提供することを目的としており、特定のビジネスの成功を保証するものではありません。法務・税務に関する具体的な判断は専門家にご相談ください。
                </p>
            </footer>
        </div>
    );
};

export default LandingPage;
