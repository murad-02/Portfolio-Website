import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InteractiveBackground } from '@/components/InteractiveBackground';
import muradPhoto from '@/assets/murad-photo.png';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Interactive Particle Background */}
      <div className="absolute inset-0">
        <InteractiveBackground />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up opacity-0">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">
                Available for new opportunities
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0 animation-delay-200">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="gradient-text">Muradul Islam</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up opacity-0 animation-delay-200 font-display">
              AI & ML Engineer
            </h2>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up opacity-0 animation-delay-400 font-body">
              Engineering intelligent systems for real-world impact. Transforming complex data into actionable insights through cutting-edge AI solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-fade-up opacity-0 animation-delay-600">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="/Muradul_Islam_Resume.pdf" download="Muradul_Islam_Resume.pdf">
                  <Download className="mr-2" size={20} />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-up opacity-0 animation-delay-600">
              <a
                href="https://github.com/murad-02"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              >
                <Github size={20} className="text-muted-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/muradul-islam02/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              >
                <Linkedin size={20} className="text-muted-foreground" />
              </a>
              <a
                href="mailto:muradulislam.mi02@gmail.com"
                className="p-3 rounded-full glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              >
                <Mail size={20} className="text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-up opacity-0 animation-delay-200">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-110" />
              
              {/* Image container with glassmorphism border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 animate-gradient">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={muradPhoto}
                      alt="Muradul Islam - AI Engineer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -right-4 top-8 px-3 py-1.5 rounded-full glass-card text-xs font-medium animate-float">
                  🤖 AI/ML
                </div>
                <div className="absolute -left-4 bottom-16 px-3 py-1.5 rounded-full glass-card text-xs font-medium animate-float animation-delay-400">
                  🧠 Deep Learning
                </div>
                <div className="absolute right-8 -bottom-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium animate-float animation-delay-600">
                  📊 Data Science
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
