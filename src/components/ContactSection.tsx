import { useState, useRef } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Replace these with your actual IDs from emailjs.com
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      toast({
        title: "Configuration Required",
        description: "Please configure EmailJS credentials in ContactSection.tsx",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-display text-sm font-semibold tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Have a project in mind? Let's discuss how AI can transform your ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card p-8">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:muradulislam.mi02@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      muradulislam.mi02@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Follow me</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/muradul-islam02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                  >
                    <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://github.com/murad-02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                  >
                    <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://www.facebook.com/murad.n30n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                  >
                    <Facebook size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`glass-card p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="from_name"
                    placeholder="John Doe"
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="from_email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
