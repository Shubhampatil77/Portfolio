export interface  Education{
    institute: string;
    course: string;
    duration: string;
    score: string;    
}

export interface WorkExperinace{
    role: string;
    company: string;
    duration: string;
    description: string[];
}

export interface Skill{
    name: string;
    level: string;
    rating: string;
}
 
export interface Project{
    title: string;
    technologies: string;
    description: string[];
}
