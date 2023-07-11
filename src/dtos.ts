export interface Skill {
    icon: string;
    name: string;
}

export interface Project {
    title: string;
    description: string;
    link: string;
}

export interface Experience {
    enterprise: string;
    jobTitle: string;
    duration: string;
    details: string;
    enterpriseLogo ?: string;
}

export interface Contact {
    label: string;
    title: string;
    link: string;
}