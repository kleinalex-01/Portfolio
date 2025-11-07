import WorksParallaxBackground from "./WorksParallaxBackground";
import ProjectCardBackground from "./ProjectCardBackground";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from 'framer-motion';
import toast from "react-hot-toast";
import { 
  GiLipstick,
  GiMirrorMirror,
  GiComb,
  GiPerfumeBottle,
  GiFlowerEmblem,
  GiSofa,
  GiSewingMachine,
  GiOfficeChair,
  GiHanger,
  GiPillow,
  GiFangs,
  GiMagnifyingGlass,
  GiScissors,
  GiLips,
  GiNecklace,
  GiRing,
  GiEarrings,
  GiHighHeel,
  GiSewingString,
  GiWoodenChair,
  GiTable,
  GiBed
} from 'react-icons/gi';
import { 
  TbAirConditioning,
  TbSnowflake,
  TbTemperature,
  TbWind,
  TbHome,
  TbClock,
  TbSun,
  TbBolt,
  TbDroplet,
  TbWindmill,
  TbFlame
} from 'react-icons/tb';
import type { IconType } from "react-icons";

const WorksSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Handle project card clicks
  const handleProjectClick = (project: typeof projects[0], event: React.MouseEvent) => {
    event.preventDefault();
    
    if (project.id === 1) {
      // First card - redirect to actual website
      window.open(`https://${project.url}`, '_blank', 'noopener,noreferrer');
    } else {
      // Other cards - show development notification
      toast('🚧 Tervezés/Fejlesztés alatt - Hamarosan elérhető lesz!', {
        duration: 4000,
        style: {
          background: '#f3f4f6',
          color: '#374151',
          border: '1px solid #d1d5db',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '500',
        },
        icon: '⏳',
      });
    }
  };

  // Industry-specific icon sets
  const hvacIcons: IconType[] = [
    TbAirConditioning,
    TbSnowflake,
    TbTemperature,
    TbWind,
    TbHome,
    TbClock,
    TbSun,
    TbBolt,
    TbDroplet,
    TbWindmill,
    TbFlame,
    TbAirConditioning, // Duplicate
    TbSnowflake, // Duplicate
    TbTemperature, // Duplicate
    TbWind, // Duplicate
  ];

  const beautyIcons: IconType[] = [
    GiLipstick,
    GiMirrorMirror,
    GiScissors,
    GiComb,
    GiPerfumeBottle,
    GiFlowerEmblem,
    GiMagnifyingGlass,
    GiLips,
    GiNecklace,
    GiRing,
    GiEarrings,
    GiHighHeel,
    GiLipstick, // Duplicate
    GiScissors, // Duplicate
    GiComb, // Duplicate
  ];

  const upholsteryIcons: IconType[] = [
    GiSofa,
    GiSewingMachine,
    GiOfficeChair,
    GiHanger,
    GiPillow,
    GiFangs,
    GiSewingString,
    GiWoodenChair,
    GiTable,
    GiBed,
    GiSofa, // Duplicate
    GiSewingMachine, // Duplicate
    GiOfficeChair, // Duplicate
    GiHanger, // Duplicate
    GiPillow, // Duplicate
  ];

  // Placeholder project data - to be filled by user
  const projects = [
    {
      id: 1,
      name: "Csetényi Károly E.V.",
      url: "www.csetkagepeszet.hu",
      techStack: ["React", "TypeScript", "Sass"],
      description: "Klíma és Hőszivattyú rendszerek, illetve a vállalkozó bemutatása. A kliensem teljesen szabad kezet adott, csak a zöld/fehér színvilágot adta meg. A weboldal reszponzív, modern és könnyen kezelhető.",
      completionTime: "2 hét",
      icons: hvacIcons,
    },
    {
      id: 2,
      name: "Sörös Lilla Tamara E.V.",
      url: "#", // Placeholder URL
      techStack: ["React", "TypeScript", "Sass"],
      description: "Tihanyi központú és balatonparti vonzáskörű kozmetika és szépségszalon bemutatására, időpontfoglalásra szolgáló webalkalmazás. Jelenleg fejlesztés alatt.",
      completionTime: "Folyamatban",
      icons: beautyIcons,
    },
    {
      id: 3,
      name: "Rózsa Zsolt E.V.",
      url: "#", // Placeholder URL
      techStack: ["React", "Tailwind", "TypeScript"],
      description: "Veszprém megyei kárpitos kisvállalkozás bemutatására, hirdetésére szolgáló webapplikáció. Jelenleg tervezés alatt áll.",
      completionTime: "Tervezés alatt",
      icons: upholsteryIcons,
    }
  ];

  return (
    <section className="section works-section" ref={elementRef}>
      <WorksParallaxBackground scrollTargetRef={elementRef} />
      <div className={`section-content ${isVisible ? 'animate' : ''}`}>
        <motion.div
          className="works-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="works-header">
            <h2 className="works-title">
              <span className="title-line-1">Itt találod a kész</span>
              <span className="title-line-2"> és félkész munkáim</span>
            </h2>
          </div>

          {/* Responsive Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={project.id === 1 ? `https://${project.url}` : "#"} 
                  onClick={(event) => handleProjectClick(project, event)}
                  className="card-link"
                  style={{ cursor: 'pointer' }}
                >
                  <ProjectCardBackground icons={project.icons} iconCount={15} />
                  <div className="project-content">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech-stack">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-completion-time">
                      <span className="completion-label">Elkészülési idő:</span>
                      <span className="completion-value">{project.completionTime}</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;