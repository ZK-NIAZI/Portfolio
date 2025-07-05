import { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ skill, percentage, delay = 0 }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{skill}</span>
        <span className="text-muted-foreground text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-skill-gradient rounded-full transition-all duration-1000 ease-out ${
            isVisible ? '' : 'w-0'
          }`}
          style={{
            width: isVisible ? `${percentage}%` : '0%',
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;