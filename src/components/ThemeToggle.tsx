import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8 rounded-full bg-muted animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-16 h-8 rounded-full bg-gradient-to-r from-muted to-muted/80 p-1 transition-all duration-500 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] border border-border/50 hover:border-primary/30 group"
      aria-label="Toggle theme"
    >
      {/* Track background effects */}
      <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10" />
        {/* Stars for dark mode */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-foreground/40 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
          />
        ))}
      </div>

      {/* Sliding knob */}
      <div
        className={`relative z-10 w-6 h-6 rounded-full bg-gradient-to-br shadow-lg transition-all duration-500 ease-out flex items-center justify-center ${
          isDark 
            ? 'translate-x-8 from-slate-700 to-slate-800 shadow-[0_0_15px_hsl(var(--primary)/0.5)]' 
            : 'translate-x-0 from-amber-300 to-orange-400 shadow-[0_0_15px_hsl(40_100%_50%/0.6)]'
        }`}
      >
        {isDark ? (
          <Moon size={14} className="text-primary" />
        ) : (
          <Sun size={14} className="text-amber-900" />
        )}
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/5 to-accent/5" />
    </button>
  );
}
