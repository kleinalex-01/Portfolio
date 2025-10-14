import { motion } from 'framer-motion'
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiSass, 
  SiNodedotjs, 
  SiGit 
} from 'react-icons/si'

const AboutSection = () => {
  const stats = [
    { icon: "🚀", value: "2+", suffix: "+", label: "Év tapasztalat" },
    { icon: "💻", value: "10+", suffix: "+", label: "Projekt" },
    { icon: "🏆", value: "8+", suffix: "", label: "Technológia" },
  ];

  const skills = [
    { name: "JavaScript", level: 85, icon: SiJavascript, color: "#F7DF1E", description: "Modern JavaScript, ES6+, 2+ év tapasztalat" },
    { name: "TypeScript", level: 80, icon: SiTypescript, color: "#3178C6", description: "Type-safe development, interfaces, generics" },
    { name: "React", level: 90, icon: SiReact, color: "#61DAFB", description: "Hooks, Context API, modern React patterns" },
    { name: "HTML5", level: 95, icon: SiHtml5, color: "#E34F26", description: "Semantic HTML, accessibility best practices" },
    { name: "CSS3", level: 90, icon: SiCss3, color: "#1572B6", description: "Flexbox, Grid, animations, responsive design" },
    { name: "Sass", level: 85, icon: SiSass, color: "#CC6699", description: "SCSS, mixins, variables, 7-1 architecture" },
    { name: "Node.js", level: 80, icon: SiNodedotjs, color: "#339933", description: "Backend development, REST API-k" },
    { name: "Git", level: 85, icon: SiGit, color: "#F05032", description: "Version control, branching, collaboration" },
  ];

  return (
    <section className="section about-section">
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="about-container">
          {/* Introduction */}
          <motion.div 
            className="about-introduction"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>
              Frontend fejlesztő vagyok, aki szenvedélyesen foglalkozik a modern webtechnológiákkal. 
              2+ éve foglalkozom professzionálisan webfejlesztéssel, és ez idő alatt 10+ projektet 
              valósítottam meg különböző technológiák felhasználásával.
            </p>
            <p>
              Főként React, TypeScript és Sass használatával dolgozom, de nyitott vagyok az új 
              technológiák tanulására és alkalmazására. Hiszek abban, hogy a jó design és a 
              kiváló felhasználói élmény kéz a kézben jár.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="skills-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h3>�️ Technikai készségek</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  style={{ 
                    borderColor: `${skill.color}40`,
                    // @ts-expect-error - CSS custom property
                    '--skill-color': skill.color,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 + 0.7, duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="skill-header">
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#b0b0b0', marginBottom: '1rem' }}>
                    {skill.description}
                  </p>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      style={{ width: '0%' }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: index * 0.1 + 1.0, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>          {/* CTA Button */}
          <motion.div 
            className="cta-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <button
              className="cta-button"
              onClick={() => {
                const worksSection = document.querySelector('.works-section');
                worksSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projektjeim megtekintése
              <span className="cta-arrow">→</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
