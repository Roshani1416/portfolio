
import { Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="heading-gradient">Roshani</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-foreground/80">
                AI Explorer & ML Enthusiast
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8">
                A passionate college student on a journey to innovate and create with 
                artificial intelligence and machine learning technologies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  <span>View GitHub</span>
                </a>
                <Link to="/contact" className="btn-outline flex items-center justify-center gap-2">
                  <span>Get in Touch</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-roshani-purple/20 backdrop-blur-sm flex items-center justify-center mx-auto animate-float">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white/60 backdrop-blur-md border-4 border-white shadow-lg overflow-hidden">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gradient-to-br from-roshani-purple/20 to-roshani-pink/20 flex items-center justify-center text-roshani-purple">
                      <span className="text-2xl font-medium">R</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 -right-4 w-24 h-24 bg-roshani-pink/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 -left-4 w-32 h-32 bg-roshani-purple/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" className="flex flex-col items-center text-muted-foreground hover:text-foreground">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowRight size={20} className="transform rotate-90" />
          </a>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section id="features" className="section-padding bg-roshani-gray/10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="heading-gradient">Exploring AI Possibilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover my journey through the exciting world of artificial intelligence and machine learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card group">
              <div className="h-12 w-12 rounded-full bg-roshani-purple/10 flex items-center justify-center mb-6 text-roshani-purple group-hover:bg-roshani-purple group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z"/><path d="M22 12h-4v4h-4v4h8v-8Z"/><path d="M14 2v6M18 4v4"/><path d="M6 14H2v8h10v-4"/><path d="M14 2h8v10h-8V2Z"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
              <p className="text-muted-foreground">
                Exploring algorithms and statistical models to enable computer systems to learn from data.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="card group">
              <div className="h-12 w-12 rounded-full bg-roshani-pink/10 flex items-center justify-center mb-6 text-roshani-pink group-hover:bg-roshani-pink group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 8.5V4a4 4 0 1 1 8 0v4"/><path d="M11.5 8.5h4"/><path d="M8.5 12v-3.5"/><circle cx="7" cy="16" r="1"/><circle cx="17" cy="16" r="1"/><path d="M8 20v-4"/><path d="M16 16v4"/><path d="M9.5 15.5c.97.48 2.01.48 2.97 0"/><path d="M14.5 15.5c-.97.48-2.01.48-2.97 0"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Applications</h3>
              <p className="text-muted-foreground">
                Building practical applications using artificial intelligence to solve real-world problems.
              </p>
            </div>
            
            
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="outline" className="rounded-full">
                <span>View Projects</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-roshani-purple/5 to-roshani-pink/5"></div>
        <div className="container-custom relative z-10">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-roshani-gray/20">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect and Create Something Amazing</h2>
                <p className="text-muted-foreground max-w-2xl">
                  I'm always excited to collaborate on interesting projects or discuss opportunities in the AI/ML space.
                </p>
              </div>
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
