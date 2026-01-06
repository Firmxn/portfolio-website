/**
 * Interface untuk data proyek portfolio
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string; // Optional karena tidak semua project punya gambar
    images?: string[]; // Array gambar untuk preview di modal
    tags: string[];
    features?: string[]; // Fitur-fitur utama project
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
