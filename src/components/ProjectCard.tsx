import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

const ProjectCard = ({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  features,
}: ProjectCardProps) => {
  return (
    <Card className="bg-card-gradient border-border/50 p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-muted-foreground text-sm flex items-start">
                <span className="text-primary mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-secondary/50 text-secondary-foreground border-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;