
import { useState } from 'react';
import { Github, ExternalLink, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Mock project data
const projects = [
  {
    id: 1,
    title: 'PromptMap',
    description: 'PromptMap project, which is an AI-powered tool designed to revolutionize image generation! 🎨✨',
    image: 'gradient-bg',
    techStack: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: 'https://github.com/Roshani1416/PromptMap',
    demo: null,
    category: 'AI'
  },
  {
    id: 2,
    title: 'VideoRag',
    description: 'an AI-powered Video Understanding & Question Answering System, which analyzes any uploaded video, generates captions for the entire content, and answers user queries based on the video using state-of-the-art AI models.',
    image: 'gradient-bg',
    techStack: ['Python','NLTK', 'Transformers', 'FastAPI'],
    github: 'https://github.com/Roshani1416/VideoRAG',
    demo: null,
    category: 'NLP'
  },
  
];

// Available categories for filtering
const categories = [
  'All', 
  'Computer Vision', 
  'NLP', 
  'Healthcare', 
  'Generative AI', 
  'Reinforcement Learning', 
  'Finance'
];

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on search query and selected category
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-roshani-purple/5 to-roshani-pink/10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
              My Projects
            </h1>
            <p className="text-xl text-foreground/80">
              Exploring the world of AI and ML through hands-on projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Filter Section */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-12">
            {/* Search Input */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search projects..." 
                className="pl-10 rounded-full border-roshani-gray"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`rounded-full cursor-pointer ${
                    selectedCategory === category 
                      ? 'bg-roshani-purple hover:bg-roshani-purple/90' 
                      : 'border-roshani-purple/50 text-foreground hover:bg-roshani-purple/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card group overflow-hidden hover:shadow-md transition-all duration-300">
                {/* Project Image/Gradient */}
                <div className="aspect-video bg-gradient-to-br from-roshani-purple/20 to-roshani-pink/20 rounded-lg mb-5 overflow-hidden group-hover:from-roshani-purple/30 group-hover:to-roshani-pink/30 transition-all">
                  <div className="w-full h-full flex items-center justify-center text-roshani-purple/50">
                    <span className="text-lg font-medium">Project Preview</span>
                  </div>
                </div>
                
                {/* Category Badge */}
                <Badge className="mb-3 bg-roshani-purple/10 text-roshani-purple hover:bg-roshani-purple/20 border-0">
                  {project.category}
                </Badge>
                
                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-roshani-purple transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs bg-roshani-gray px-2 py-1 rounded-full text-foreground/70">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex justify-between items-center mt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm flex items-center gap-1 text-foreground/70 hover:text-roshani-purple transition-colors"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  
                  {project.demo ? (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm flex items-center gap-1 text-foreground/70 hover:text-roshani-purple transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">Demo Coming Soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-roshani-gray/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Interested in Collaborating?
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to interesting collaborations and new project opportunities. 
              Let's create something amazing together!
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={18} />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
