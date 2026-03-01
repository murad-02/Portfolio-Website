import { Code, Brain, Eye, Cog, Database, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'SQL', 'JavaScript', 'C++'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'ML Frameworks',
    icon: Brain,
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost'],
    color: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'AI Domains',
    icon: Eye,
    skills: ['Computer Vision', 'NLP', 'Generative AI', 'Reinforcement Learning', 'Time Series'],
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    title: 'MLOps & DevOps',
    icon: Cog,
    skills: ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Linux'],
    color: 'from-sky-500 to-blue-500',
  },
  {
    title: 'Data Tools',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL Databases'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Deployment',
    icon: Rocket,
    skills: ['FastAPI', 'Flask', 'Streamlit', 'REST APIs', 'Cloud Services'],
    color: 'from-indigo-500 to-violet-500',
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400 pointer-events-none" />
      
      <div className="container-custom relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-display text-sm font-semibold tracking-wider uppercase mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            A comprehensive toolkit for building end-to-end AI solutions, from research to production.
          </p>
        </div>

        {/* Hexagonal Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative glass-card p-8 h-full transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] hover:-translate-y-2">
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display font-semibold text-xl text-foreground mb-5 flex items-center gap-3">
                    {category.title}
                  </h3>
                  
                  {/* Skills as flowing tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-muted/80 text-muted-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${category.color}`} />
                    <div className={`absolute top-4 right-8 w-1 h-1 rounded-full bg-gradient-to-br ${category.color}`} />
                    <div className={`absolute top-8 right-4 w-1 h-1 rounded-full bg-gradient-to-br ${category.color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom accent line */}
        <div className={`mt-16 flex justify-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
