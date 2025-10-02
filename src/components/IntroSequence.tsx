import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface IntroSequenceProps {
  onComplete: () => void;
}

export const IntroSequence = ({ onComplete }: IntroSequenceProps) => {
  const [step, setStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Step 1: "Welcome to Hedger AI" - show at 0s, hide at 2s
    timers.push(setTimeout(() => setStep(1), 100));
    timers.push(setTimeout(() => setStep(2), 2000));

    // Step 2: "We found a way to make money…" - show at 2s, hide at 4.5s
    timers.push(setTimeout(() => setStep(3), 4500));

    // Step 3: "How?" - show at 4.5s, hide at 6s
    timers.push(setTimeout(() => setStep(4), 6000));

    // Step 4: "AI Sports Betting & Arbitrage" - show at 6s, fade out at 8s
    timers.push(setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 1000);
    }, 8000));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 500);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-1000 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Skip Button */}
      <Button
        variant="ghost"
        onClick={handleSkip}
        className="fixed bottom-8 right-8 text-muted-foreground hover:text-foreground transition-colors"
      >
        SKIP
      </Button>

      {/* Text Sequence */}
      <div className="text-center px-4">
        {/* Step 1: Welcome to Hedger AI */}
        <h1
          className={`text-5xl md:text-7xl font-black tracking-tight transition-opacity duration-1000 ${
            step === 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Hedger AI
          </span>
        </h1>

        {/* Step 2: We found a way to make money… */}
        <h2
          className={`text-4xl md:text-6xl font-bold tracking-tight transition-opacity duration-1000 absolute inset-0 flex items-center justify-center px-4 ${
            step === 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          We found a{" "}
          <span className="text-primary ml-3">smarter way</span>
          <span className="ml-3">to make money…</span>
        </h2>

        {/* Step 3: How? */}
        <h2
          className={`text-6xl md:text-8xl font-black tracking-tight transition-opacity duration-1000 absolute inset-0 flex items-center justify-center ${
            step === 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          How?
        </h2>

        {/* Step 4: AI Sports Betting & Arbitrage */}
        <h2
          className={`text-5xl md:text-7xl font-black tracking-tight transition-all duration-1000 absolute inset-0 flex items-center justify-center px-4 ${
            step === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            AI Sports Betting & Arbitrage
          </span>
        </h2>
      </div>

      {/* Loading indicator at top */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2">
        <span className="text-sm text-muted-foreground tracking-widest">LOADING</span>
      </div>
    </div>
  );
};
