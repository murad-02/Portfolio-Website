import { Brain, Cpu, Database, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  {
    icon: Brain,
    title: 'Deep Learning',
    description: 'Neural networks, CNNs, Transformers',
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description: 'Object detection, segmentation, OCR',
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'Analytics, visualization, insights',
  },
  {
    icon: Sparkles,
    title: 'NLP',
    description: 'Text analysis, chatbots, LLMs',
  },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section 
      id="about" 
      className="section-padding relative"
      ref={ref}
    >
      <div className={`container-custom transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-primary font-display text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Turning Data Into
              <span className="gradient-text"> Intelligent Solutions</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed font-body">
              <p>
                I'm an AI/ML Engineer with expertise in designing and deploying production-grade machine learning systems. My work spans from research prototypes to scalable enterprise solutions.
              </p>
              <p>
                With a strong foundation in deep learning, computer vision, and natural language processing, I've successfully delivered projects for healthcare, fintech, and e-commerce industries.
              </p>
              <p>
                I'm passionate about bridging the gap between cutting-edge research and practical applications, ensuring AI solutions are not just innovative but also reliable and impactful.
              </p>
            </div>
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card-hover p-6 group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
