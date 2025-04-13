
import { useState } from 'react';
import { Github, Linkedin, Mail, Send, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-roshani-purple/5 to-roshani-pink/10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
              Get In Touch
            </h1>
            <p className="text-xl text-foreground/80">
              Let's connect and discuss how we can collaborate
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <h2 className="text-2xl font-bold mb-4">Send Me a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or want to work together? Drop me a message, and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg border-roshani-gray"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg border-roshani-gray"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-lg border-roshani-gray resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-2/5">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-roshani-purple/10 flex items-center justify-center text-roshani-purple mr-5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-roshani-purple transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-roshani-pink/10 flex items-center justify-center text-roshani-pink mr-5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      New Delhi,INDIA
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-roshani-purple/10 flex items-center justify-center text-roshani-purple mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Connect</h3>
                    <div className="flex space-x-4 mt-3">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/80 hover:bg-roshani-purple hover:text-white transition-all"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/80 hover:bg-roshani-purple hover:text-white transition-all"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href="mailto:contact@example.com" 
                        className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/80 hover:bg-roshani-purple hover:text-white transition-all"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Note */}
              <div className="mt-12 bg-roshani-gray/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">A Personal Note</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently seeking internship opportunities in AI research and development. 
                  If you're looking for a passionate and dedicated AI enthusiast to join your team, 
                  I'd love to hear from you!
                </p>
                <p className="text-muted-foreground">
                  Also open to collaboration on interesting AI projects, especially in the fields 
                  of natural language processing and computer vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Illustration Section */}
      <section className="py-20 bg-roshani-gray/10">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden h-64 md:h-96 bg-white shadow-sm flex items-center justify-center">
            <div className="text-center px-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-roshani-purple/10 flex items-center justify-center text-roshani-purple mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Located in New Delhi,INDIA</h3>
              <p className="text-muted-foreground">
                The heart of technology and innovation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
