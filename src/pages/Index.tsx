import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Code,
  Database,
  Smartphone,
  Server,
  Globe,
  User,
  Briefcase,
  FolderOpen,
  MessageSquare
} from 'lucide-react';
import SkillBar from '@/components/SkillBar';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    toast({
      title: "Resume Download",
      description: "Resume download functionality would be implemented here.",
    });
  };

  const skills = [
    { name: 'Flutter & Dart', percentage: 95 },
    { name: 'Node.js & Express', percentage: 90 },
    { name: 'Firebase & Firestore', percentage: 88 },
    { name: 'JavaScript & TypeScript', percentage: 85 },
    { name: 'REST API Development', percentage: 92 },
    { name: 'MongoDB', percentage: 80 },
    { name: 'Git & GitHub', percentage: 90 },
    { name: 'React & React Native', percentage: 75 },
  ];

  const projects = [
    {
      title: 'QAIDER App',
      description: 'A comprehensive full-stack mobile application with real-time features and scalable architecture.',
      technologies: ['Flutter', 'Node.js', 'Firebase Functions', 'Firestore', 'Firebase Auth'],
      features: [
        'Complete backend built with Node.js and Firebase Functions',
        'Real-time data synchronization using Firestore',
        'Push notifications and authentication system',
        'Scalable cloud architecture for high performance'
      ],
      githubUrl: 'https://github.com/zeeshan318',
    },
    {
      title: 'Resulto App',
      description: 'A specialized result display application that processes and presents PDF-based student data efficiently.',
      technologies: ['Flutter', 'Firebase', 'PDF Processing', 'Dart'],
      features: [
        'PDF data extraction and processing',
        'Student result display system',
        'Clean and intuitive user interface',
        'Firebase backend integration'
      ],
      githubUrl: 'https://github.com/zeeshan318',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient">
              Zeeshan Khan
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: 'home', label: 'Home', icon: User },
                { id: 'about', label: 'About', icon: User },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'projects', label: 'Projects', icon: FolderOpen },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'contact', label: 'Contact', icon: MessageSquare },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient animate-glow">Zeeshan Khan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Full Stack Flutter & Node.js Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                📍 Lahore, Pakistan
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Passionate about creating exceptional mobile experiences with 1+ years of expertise 
                in Flutter development and full-stack solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-in-up">
              <Button
                onClick={handleResumeDownload}
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-elegant"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-muted-foreground animate-bounce-in">
              <a
                href="mailto:zeeshanniazi161@gmail.com"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href="tel:0304-9071273"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Phone</span>
              </a>
              <a
                href="https://linkedin.com/in/zeeshan-niazi-7434771aa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/zeeshan318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-skill-gradient mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card-gradient border-border/50 p-8 shadow-card animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    BS Computer Science Graduate
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A dedicated Flutter developer with over 1 year of experience in designing and developing 
                    cross-platform mobile applications and full-stack development using Flutter, Dart, Firebase, 
                    and Node.js. Currently working at Cyber Advance Solutions, where I focus on creating 
                    high-performance mobile apps and scalable backend solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in developing both frontend and backend of mobile applications, 
                    including the QAIDER App using Firebase Functions and Node.js. My passion lies in 
                    creating seamless user experiences and robust, scalable architectures.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Lahore, Pakistan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Mobile Development Expert</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Server className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Backend Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Database Design</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-skill-gradient mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card-gradient border-border/50 p-8 shadow-card animate-slide-in-left">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Flutter Developer</h3>
                      <p className="text-primary font-medium">Cyber Advance Solutions</p>
                    </div>
                    <div className="text-muted-foreground">
                      <p>Feb 2024 – Present</p>
                      <p>Lahore, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Developed high-performance mobile apps using Flutter framework
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Created REST APIs and serverless functions with Node.js and Firebase Functions
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Managed real-time features using Firebase Realtime DB and Firestore
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Integrated push notifications, authentication, and cloud storage solutions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-skill-gradient mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className={index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-skill-gradient mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card-gradient border-border/50 p-6 shadow-card animate-slide-in-left">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-primary" />
                  Programming & Frameworks
                </h3>
                <div className="space-y-1">
                  {skills.slice(0, 4).map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      percentage={skill.percentage}
                      delay={index * 200}
                    />
                  ))}
                </div>
              </Card>
              
              <Card className="bg-card-gradient border-border/50 p-6 shadow-card animate-slide-in-right">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-primary" />
                  Backend & Tools
                </h3>
                <div className="space-y-1">
                  {skills.slice(4).map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      percentage={skill.percentage}
                      delay={(index + 4) * 200}
                    />
                  ))}
                </div>
              </Card>
            </div>
            
            <div className="mt-8 animate-bounce-in">
              <Card className="bg-card-gradient border-border/50 p-6 shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Flutter', 'Dart', 'Node.js', 'Express.js', 'Firebase', 'MongoDB',
                    'REST APIs', 'Git', 'GitHub', 'Postman', 'Android Studio', 'VS Code',
                    'Figma', 'Canva', 'JWT', 'Firebase Auth', 'Firestore', 'Realtime DB'
                  ].map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-skill-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="animate-slide-in-left">
                <Card className="bg-card-gradient border-border/50 p-8 shadow-card h-full">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Email</p>
                        <a
                          href="mailto:zeeshanniazi161@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          zeeshanniazi161@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Phone</p>
                        <a
                          href="tel:0304-9071273"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          0304-9071273
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Location</p>
                        <p className="text-muted-foreground">Lahore, Pakistan</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <h4 className="text-lg font-medium text-foreground mb-4">
                      Follow Me
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://linkedin.com/in/zeeshan-niazi-7434771aa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-primary" />
                      </a>
                      <a
                        href="https://github.com/zeeshan318"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="animate-slide-in-right">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Zeeshan Khan. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
