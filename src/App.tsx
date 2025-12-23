import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Section1Input from './components/Section1Input';
import Section2Genre from './components/Section2Genre';
import Section3Analysis from './components/Section3Analysis';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleStartAnalysis = () => {
    setIsLoading(true);
    setLoadingText('AI分析中...');

    // Simulate Loading Process
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 5;
      if (progress > 100) progress = 100;
      setLoadingProgress(Math.floor(progress));

      if (progress >= 30 && progress < 60) {
        setLoadingText('HARM分類・サブジャンル推定・レイヤー判定を行っています。');
      } else if (progress >= 60) {
        setLoadingText('完了まで30秒~1分ほどお待ちください。');
      }

      if (progress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          setStep(2);
          window.scrollTo(0, 0); // Reset scroll
        }, 500);
      }
    }, 100);
  };

  const handleGenreSelected = () => {
    setIsLoading(true);
    setLoadingText('競合分析を実行中');
    // Simulate shorter loading for next step
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (showLanding) {
    return <LandingPage onStart={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen pb-20 font-sans">
      {isLoading && (
        <LoadingScreen
          text={loadingText}
          progress={loadingProgress}
          subtext={loadingText.includes('完了まで') ? undefined : 'HARM分類・サブジャンル推定・レイヤー判定を行っています。\n完了まで30秒~1分ほどお待ちください。'}
        />
      )}

      <main className="max-w-6xl mx-auto px-4 py-8">
        {step === 1 && !isLoading && <Section1Input onAnalyze={handleStartAnalysis} />}
        {step === 2 && !isLoading && <Section2Genre onNext={handleGenreSelected} />}
        {step === 3 && !isLoading && <Section3Analysis onBack={() => { setStep(1); window.scrollTo(0, 0); }} />}
      </main>
    </div>
  );
}

export default App;
