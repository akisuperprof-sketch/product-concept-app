import { Loader2 } from 'lucide-react';

interface LoadingScreenProps {
    text: string;
    subtext?: string;
    progress?: number;
}

export default function LoadingScreen({ text, subtext, progress }: LoadingScreenProps) {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-50">
            <div className="relative mb-8">
                <Loader2 className="w-16 h-16 text-brand-500 animate-spin" />
                <div className="absolute top-0 right-0 -mr-2 -mt-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#38BDF8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 whitespace-pre-line text-center animate-pulse">{text}</h2>
            {subtext && (
                <p className="mt-4 text-slate-500 text-center max-w-md">{subtext}</p>
            )}
            {progress !== undefined && (
                <div className="w-full max-w-sm mt-8">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>進捗状況</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-brand-500 transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Session ID simulation */}
            <div className="mt-12 px-4 py-1.5 bg-slate-100 rounded-full text-xs text-slate-500 font-mono">
                session: 0946bc1a
            </div>
        </div>
    );
}
