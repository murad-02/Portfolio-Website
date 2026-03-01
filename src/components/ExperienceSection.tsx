import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    type: 'work',
    title: 'ML Engineer',
    organization: 'Starting Career',
    period: '2025 - Present',
    description: 'Beginning professional journey in Machine Learning. Focused on building production-ready ML systems, computer vision applications, and NLP solutions.',
  },
  {
    type: 'education',
    title: 'B.Sc. in Computer Science & Engineering',
    organization: 'International University of Business Agriculture and Technology (IUBAT)',
    period: '2022 - 2026',
    description: 'Specializing in Artificial Intelligence and Machine Learning. Building strong foundations in algorithms, data structures, and deep learning architectures.',
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return GraduationCap;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-display text-sm font-semibold tracking-wider uppercase mb-4 block">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            My journey in AI and Machine Learning.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className={`absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} style={{ transformOrigin: 'top' }} />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = getIcon(exp.type);
                return (
                  <div
                    key={index}
                    className={`relative pl-16 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${200 + index * 150}ms` }}
                  >
                    {/* Icon */}
                    <div className={`absolute left-0 w-12 h-12 rounded-full glass-card flex items-center justify-center border-2 border-primary/30 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: `${300 + index * 150}ms` }}>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="glass-card p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-display font-semibold text-lg text-foreground">
                          {exp.title}
                        </h3>
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-primary/80 font-medium mb-3 font-display text-sm">
                        {exp.organization}
                      </p>
                      <p className="text-muted-foreground text-sm font-body leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
