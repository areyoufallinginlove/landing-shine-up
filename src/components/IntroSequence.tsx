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

    // Step 1: "Welcome to Hedger AI" - show at 0s, hide at 2.5s
    timers.push(setTimeout(() => setStep(1), 100));
    timers.push(setTimeout(() => setStep(2), 2500));

    // Step 2: "We found a way to make money…" - show at 2.5s, hide at 5s
    timers.push(setTimeout(() => setStep(3), 5000));

    // Step 3: "How?" - show at 5s, hide at 6.5s
    timers.push(setTimeout(() => setStep(4), 6500));

    // Step 4: "AI Sports Betting & Arbitrage" - show at 6.5s, fade out at 9s
    timers.push(setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 1000);
    }, 9000));

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
        className="fixed bottom-8 right-8 text-muted-foreground hover:text-foreground transition-colors z-10"
      >
        SKIP
      </Button>

      {/* Text Sequence */}
      <div className="relative w-full h-full flex items-center justify-center px-4">
        {/* Step 1: Welcome to Hedger AI */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${
            step === 1 
              ? 'opacity-100 translate-y-0' 
              : step === 0 
              ? 'opacity-0 translate-y-10' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-center">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Hedger AI
            </span>
          </h1>
        </div>

        {/* Step 2: We found a way to make money… */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${
            step === 2 
              ? 'opacity-100 translate-y-0' 
              : step < 2 
              ? 'opacity-0 translate-y-10' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center max-w-5xl">
            We found a way to make money…
          </h2>
        </div>

        {/* Step 3: How? */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${
            step === 3 
              ? 'opacity-100 scale-100 translate-y-0' 
              : step < 3 
              ? 'opacity-0 scale-95 translate-y-10' 
              : 'opacity-0 scale-95 -translate-y-10'
          }`}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
            How?
          </h2>
        </div>

        {/* Step 4: AI Sports Betting & Arbitrage */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${
            step === 4 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-90 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-center px-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              AI Sports Betting & Arbitrage
            </span>
          </h2>
        </div>
      </div>

      {/* Loading indicator at top */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2">
        <span className="text-sm text-muted-foreground tracking-widest">LOADING</span>
      </div>
    </div>
  );
};
