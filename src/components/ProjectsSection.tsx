import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Medical Image Diagnosis AI',
    description: 'Deep learning system for automated detection of pneumonia and COVID-19 from chest X-rays with 96% accuracy. Deployed in clinical settings.',
    tags: ['PyTorch', 'CNN', 'Medical Imaging', 'Docker'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Intelligent Document OCR',
    description: 'End-to-end OCR pipeline for extracting structured data from invoices and receipts using transformer-based models.',
    tags: ['TensorFlow', 'Transformers', 'OCR', 'FastAPI'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Conversational AI Chatbot',
    description: 'Enterprise chatbot powered by LLMs with RAG architecture for context-aware responses and multi-language support.',
    tags: ['LangChain', 'OpenAI', 'Vector DB', 'Python'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Predictive Maintenance System',
    description: 'Time-series forecasting model for industrial equipment failure prediction, reducing downtime by 40%.',
    tags: ['LSTM', 'Scikit-learn', 'IoT', 'AWS'],
    github: '#',
    featured: false,
  },
  {
    title: 'Real-time Object Detection',
    description: 'YOLO-based detection system for autonomous vehicle applications with edge deployment optimization.',
    tags: ['YOLOv8', 'OpenCV', 'TensorRT', 'Edge AI'],
    github: '#',
    featured: false,
  },
  {
    title: 'Sentiment Analysis Dashboard',
    description: 'NLP-powered dashboard for real-time social media sentiment analysis and trend visualization.',
    tags: ['BERT', 'Streamlit', 'NLP', 'Visualization'],
    github: '#',
    demo: '#',
    featured: false,
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-display text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Real-world AI solutions that drive measurable business impact and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card-hover p-6 flex flex-col transition-all duration-500 ${
                project.featured ? 'lg:col-span-1' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Project Icon/Visual */}
              <div className="w-full h-32 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mb-6 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ArrowUpRight className="w-8 h-8 text-primary/50 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
              </div>

              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow font-body leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button variant="glass" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowUpRight className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
