// Project configuration
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  tags: string[];
  status: 'in-progress' | 'design-phase' | 'completed';
  statusText: string;
  link?: string;
  isLive?: boolean;
}

export const projects: Project[] = [
  {
    id: 'healthy-skin',
    title: 'Healthy Skin Kozmetika',
    description: 'Komplett webalkalmazás reszponzív dizájnnal, teljes hozzáférhetőséggel és SEO optimalizálással.',
    image: '/src/assets/Photos/projects/healthy-skin.png',
    icon: 'FaCode',
    tags: ['Vite', 'React', 'TypeScript', 'SCSS'],
    status: 'in-progress',
    statusText: 'Folyamatban',
    link: 'https://healthy-skin-2.netlify.app',
    isLive: true
  },
  {
    id: 'csetenyi-klimaszerveles',
    title: 'Csetényi Gergő Klímaszerelés',
    description: 'Hirdetési weboldal reszponzív dizájnnal, teljes hozzáférhetőséggel és SEO optimalizálással.',
    image: 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Csetenyi+Gergő+Klima',
    icon: 'FaMobileAlt',
    tags: ['Vite', 'React', 'TypeScript', 'SCSS'],
    status: 'design-phase',
    statusText: 'Tervezés alatt',
    link: 'https://csetenyiklimaszerveles.hu', // Replace with actual URL when live
    isLive: false
  },
  {
    id: 'rozsa-karpitos',
    title: 'Rózsa Zsolt Kárpitos',
    description: 'Hirdetési weboldal reszponzív dizájnnal, teljes hozzáférhetőséggel és SEO optimalizálással.',
    image: 'https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Rozsa+Zsolt+Karpitos',
    icon: 'FaPalette',
    tags: ['Vite', 'React', 'TypeScript', 'SCSS'],
    status: 'design-phase',
    statusText: 'Tervezés alatt',
    link: 'https://rozsakarpitos.hu', // Replace with actual URL when live
    isLive: false
  }
];
