// ...imports remain the same

import { Progress } from "@/components/ui/progress";
import { Download, Workflow } from "lucide-react";

const SkillsPage = () => {
  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'Generative AI', level: 90},
    { name: 'Machine Learning', level: 80 },
    { name: 'Web Development', level: 65 },
  ];

  const tools = [
    { name: 'TensorFlow', image: null },
    { name: 'PyTorch', image: null },
    { name: 'Scikit-learn', image: null },
    { name: 'Jupyter', image: null },
    { name: 'Pandas', image: null },
    { name: 'NumPy', image: null },
    { name: 'Matplotlib', image: null },
    { name: 'Git', image: null },
    { name: 'VS Code', image: null },
    { name: 'Google Colab', image: null },
    { name: 'Streamlit', image: null },
    { name: 'Flask', image: null },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-roshani-purple/5 to-roshani-pink/10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
              Skills & Resume
            </h1>
            <p className="text-xl text-foreground/80">
              My technical expertise, certifications, and learning journey
            </p>
            <a
              href="/resume.pdf"
              download
              className="btn-primary mt-8 inline-flex items-center gap-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Skills */}
            <div className="lg:w-full">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Workflow className="text-roshani-purple" size={24} />
                  <span>Technical Skills</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  My technical expertise spans across various areas of AI, machine learning, and programming.
                </p>

                <div className="space-y-6">
                  {technicalSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-roshani-gray"
                        indicatorClassName="bg-gradient-to-r from-roshani-purple to-roshani-pink"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Platforms */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-roshani-purple" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15-15-5 5-5-8-4 4-4"/></svg>
                  <span>Tools & Platforms</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Software, frameworks, and platforms I regularly work with.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {tools.map((tool) => (
                    <div key={tool.name} className="border border-roshani-gray/50 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:border-roshani-purple/50 hover:bg-roshani-gray/10 transition-all">
                      <div className="h-10 w-10 rounded-full bg-roshani-purple/10 flex items-center justify-center mb-3">
                        <span className="text-roshani-purple font-medium text-sm">{tool.name.substring(0, 1)}</span>
                      </div>
                      <span className="text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="section-padding bg-roshani-gray/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              My Learning Philosophy
            </h2>
            <p className="text-muted-foreground">
              I believe in continuous learning and pushing the boundaries of what I know.
              Here are some principles that guide my learning journey:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card">
              <div className="h-12 w-12 rounded-full bg-roshani-purple/10 flex items-center justify-center mb-6 text-roshani-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/><path d="M7.9 7.9 16 16"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Learn by Doing</h3>
              <p className="text-muted-foreground">
                I believe in practical application of knowledge. I learn best by working on real projects and solving actual problems.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div className="h-12 w-12 rounded-full bg-roshani-pink/10 flex items-center justify-center mb-6 text-roshani-pink">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Open Source Collaboration</h3>
              <p className="text-muted-foreground">
                Contributing to open source projects helps me learn from others, improve my coding skills, and give back to the community.
              </p>
            </div>

            
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-roshani-purple/20 to-roshani-pink/20 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to view my full qualifications?</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Download my resume to get a comprehensive overview of my skills, experience, education, and achievements.
                </p>
              </div>
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary flex items-center gap-2"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
