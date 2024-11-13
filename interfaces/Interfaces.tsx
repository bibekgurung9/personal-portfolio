export interface ProjectCardProps {
    id: number;
    title: string;
    techStack: string;
    features: string[];
    imgUrl: any;
    liveUrl?: string | null;
    githubUrl?: string| null; 
  }