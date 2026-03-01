import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tools = [
  { name: 'Python', icon: '🐍' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'OpenCV', icon: '👁️' },
  { name: 'Hugging Face', icon: '🤗' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Git', icon: '📦' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'PostgreSQL', icon: '🐘' },
];

export function TechStackSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container-custom relative">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-display font-semibold text-lg text-muted-foreground">
            Tech Stack & Tools
          </h3>
        </div>

        {/* Scrolling Marquee Effect */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-6 animate-marquee">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 glass-card whitespace-nowrap hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-medium text-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
