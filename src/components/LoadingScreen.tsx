import { useState, useEffect } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Atom/Electron Animation */}
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        {/* Central nucleus - glowing core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-pulse shadow-[0_0_60px_hsl(var(--primary)),0_0_100px_hsl(var(--accent)/0.5)]" />
          <div className="absolute inset-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/50 blur-xl animate-pulse" />
        </div>

        {/* Orbit 1 - Horizontal ellipse */}
        <div 
          className="absolute inset-0 rounded-full border border-primary/30"
          style={{
            animation: 'spin 4s linear infinite',
            transform: 'rotateX(70deg)',
          }}
        >
          <div 
            className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_20px_hsl(var(--primary))]"
            style={{
              top: '50%',
              left: '-6px',
              transform: 'translateY(-50%)',
            }}
          />
        </div>

        {/* Orbit 2 - Tilted ellipse */}
        <div 
          className="absolute inset-0 rounded-full border border-accent/30"
          style={{
            animation: 'spin 3s linear infinite reverse',
            transform: 'rotateX(70deg) rotateY(60deg)',
          }}
        >
          <div 
            className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-accent to-primary shadow-[0_0_20px_hsl(var(--accent))]"
            style={{
              top: '50%',
              right: '-6px',
              transform: 'translateY(-50%)',
            }}
          />
        </div>

        {/* Orbit 3 - Another tilted ellipse */}
        <div 
          className="absolute inset-0 rounded-full border border-primary/20"
          style={{
            animation: 'spin 5s linear infinite',
            transform: 'rotateX(70deg) rotateY(-60deg)',
          }}
        >
          <div 
            className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_15px_hsl(var(--primary))]"
            style={{
              bottom: '50%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      </div>

      {/* Loading text */}
      <div className="mt-12 text-center">
        <h2 className="font-display text-lg md:text-xl tracking-wider text-foreground mb-4">
          <span className="gradient-text">INITIALIZING</span>
        </h2>
        
        {/* Progress bar */}
        <div className="w-48 md:w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-out rounded-full shadow-[0_0_10px_hsl(var(--primary))]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground font-mono">{progress}%</p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotateX(70deg) rotateZ(0deg); }
          to { transform: rotateX(70deg) rotateZ(360deg); }
        }
      `}</style>
    </div>
  );
}
