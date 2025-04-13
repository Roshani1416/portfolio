
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-roshani-purple/5 to-roshani-pink/10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
              About Me
            </h1>
            <p className="text-xl text-foreground/80">
              My journey as an AI Explorer and ML Enthusiast
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Image Column */}
            <div className="lg:w-2/5">
              <div className="sticky top-28">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                    <div className="aspect-[3/4] bg-gradient-to-br from-roshani-purple/20 to-roshani-pink/20 flex items-center justify-center">
                      {/* Placeholder for profile image */}
                      <div className="w-24 h-24 rounded-full bg-roshani-purple/30 flex items-center justify-center text-roshani-purple text-3xl font-medium">
                        R
                      </div>
                    </div>
                  </div>
                  <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl bg-roshani-purple/10"></div>
                </div>

                {/* Quick Facts */}
                <div className="mt-10 space-y-4">
                  <h3 className="text-xl font-semibold">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-roshani-purple/10 flex items-center justify-center text-roshani-purple text-sm mr-3 mt-0.5">✓</span>
                      <span>Computer Science Student</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-roshani-purple/10 flex items-center justify-center text-roshani-purple text-sm mr-3 mt-0.5">✓</span>
                      <span>AI Researcher</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-roshani-purple/10 flex items-center justify-center text-roshani-purple text-sm mr-3 mt-0.5">✓</span>
                      <span>Python Enthusiast</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-roshani-purple/10 flex items-center justify-center text-roshani-purple text-sm mr-3 mt-0.5">✓</span>
                      <span>Data Science Competitor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-roshani-purple/10 flex items-center justify-center text-roshani-purple text-sm mr-3 mt-0.5">✓</span>
                      <span>Open Source Contributor</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2 w-full">
                    <Mail size={18} />
                    <span>Let's Connect</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-3/5">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">My Story</h2>
                <p className="mb-6">
                  Hello, I'm Roshani! I'm a passionate college student majoring in Computer Science with a focus on Artificial Intelligence and Machine Learning. My journey in the world of technology began when I was introduced to programming in high school, and I've been fascinated by the possibilities of AI ever since.
                </p>
                <p className="mb-6">
                  I believe that AI has the potential to solve some of the world's most pressing problems, from healthcare to climate change. My goal is to contribute to this field by developing innovative solutions that can make a positive impact on society.
                </p>
                <p className="mb-10">
                  When I'm not coding or working on AI projects, you can find me exploring the latest research papers, participating in hackathons, or sharing my knowledge with the community through blog posts and open-source contributions.
                </p>

                <h2 className="text-2xl font-bold mb-6">Learning Journey</h2>
                
                {/* Timeline */}
                <div className="relative border-l-2 border-roshani-purple/30 pl-8 pb-8 space-y-12">
                  {/* Timeline item 1 */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-roshani-purple flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">First Steps in Programming</h3>
                        <span className="text-sm text-muted-foreground">2024</span>
                      </div>
                      <p className="text-muted-foreground">
                        Learned Python and developed my first simple AI project—a personalised fitness chatbot.
                      </p>
                    </div>
                  </div>

                  {/* Timeline item 2 */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-roshani-purple flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">started learning about Generative AI</h3>
                        <span className="text-sm text-muted-foreground">2025(jan)</span>
                      </div>
                      <p className="text-muted-foreground">
                        started online courses in machine learning and deep learning fundamentals
                      </p>
                    </div>
                  </div>

                  {/* Timeline item 3 */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-roshani-purple flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold"> AI Hackathon</h3>
                        <span className="text-sm text-muted-foreground">2025(feb)</span>
                      </div>
                      <p className="text-muted-foreground">
                        Participated in my  hackathon, been in Top 15.
                      </p>
                    </div>
                  </div>

                  
                    
                  {/* Timeline item 5 */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-roshani-purple flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">Present & Future</h3>
                        <span className="text-sm text-muted-foreground">2025</span>
                      </div>
                      <p className="text-muted-foreground">
                        Currently exploring more about AIML and working on integrating multiple AI systems for smarter applications. Looking forward to opportunities in AI research and development.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">My Goals</h2>
                <p className="mb-6">
                  I'm working towards becoming a leading expert in the field of AI and ML, with a focus on developing ethical and responsible AI systems that can benefit humanity. Some of my specific goals include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-8">
                  <li>Contributing to cutting-edge research in generative AI models</li>
                  <li>Building AI solutions</li>
                  
                  <li>Bridging the gap between theoretical AI research and practical applications</li>
                </ul>
                
                <p>
                  I'm always open to collaboration and learning opportunities. If you're interested in working together or just want to chat about AI and ML, feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
