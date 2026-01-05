/**
 * Interface untuk data proyek portfolio
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
}

/**
 * Interface untuk data pengalaman kerja
 */
export interface Experience {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string;
    technologies: string[];
}

/**
 * Interface untuk data social media
 */
export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
}
