// Configuration file for portfolio data
export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  phone?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
}

export interface PortfolioConfig {
  contact: ContactInfo;
  projects: Project[];
  personalInfo: {
    name: string;
    title: string;
    bio: string;
    location?: string;
  };
  sections: {
    hero: {
      title: string;
      subtitle: string;
      ctaText: string;
    };
    about: {
      title: string;
      content: string[];
    };
    projects: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
    };
  };
}

export const portfolioConfig: PortfolioConfig = {
  contact: {
    email: 'alex@example.com',
    linkedin: 'https://linkedin.com/in/alex',
    github: 'https://github.com/alex',
    phone: '+36 XX XXX XXXX'
  },
  personalInfo: {
    name: 'Alex',
    title: 'Full Stack Developer',
    bio: 'Passionate developer creating innovative web experiences with modern technologies.',
    location: 'Hungary'
  },
  sections: {
    hero: {
      title: 'Hello, I\'m Alex',
      subtitle: 'Full Stack Developer crafting digital experiences',
      ctaText: 'View My Work'
    },
    about: {
      title: 'About Me',
      content: [
        'I\'m a passionate full-stack developer with expertise in modern web technologies.',
        'I love creating beautiful, functional, and user-friendly applications.',
        'When I\'m not coding, you can find me exploring new technologies or contributing to open source.'
      ]
    },
    projects: {
      title: 'My Projects',
      subtitle: 'A showcase of my recent work and experiments'
    },
    contact: {
      title: 'Let\'s Work Together',
      subtitle: 'Have a project in mind? I\'d love to hear about it.'
    }
  },
  projects: [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'WebSocket'],
      year: 2024,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/alex/ecommerce'
    },
    {
      id: 'project-2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      year: 2024,
      liveUrl: 'https://tasks.example.com',
      githubUrl: 'https://github.com/alex/tasks'
    },
    {
      id: 'project-3',
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.',
      technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Leaflet'],
      year: 2023,
      liveUrl: 'https://weather.example.com',
      githubUrl: 'https://github.com/alex/weather'
    },
    {
      id: 'project-4',
      title: 'Portfolio Website',
      description: 'A modern portfolio website with WebGL animations, smooth scrolling, and responsive design.',
      technologies: ['React', 'TypeScript', 'WebGL', 'SCSS', 'Vite'],
      year: 2023,
      liveUrl: 'https://alex.dev',
      githubUrl: 'https://github.com/alex/portfolio'
    }
  ]
};

export default portfolioConfig;
