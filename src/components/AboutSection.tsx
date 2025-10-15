import { motion } from 'framer-motion'

const AboutSection = () => {
  const achievements = [
    { 
      icon: "🎯", 
      value: "1+", 
      label: "Elkészült projekt",
      description: "Webalkalmazások vállalkozásoknak"
    },
    { 
      icon: "⚡", 
      value: "2+", 
      label: "Év tapasztalat", 
      description: "Modern frontend technológiákban"
    },
    { 
      icon: "🚀", 
      value: "99%", 
      label: "Ügyfél elégedettség",
      description: "Időben, minőségben, költséghatékonyan"
    },
  ];

  const expertise = [
    {
      category: "Frontend Development",
      skills: ["React", "Axios", "TypeScript"],
      level: 85,
      description: "Modern React alkalmazások, megoldások"
    },
    {
      category: "UI/UX Design",
      skills: [ "Tailwind", "Sass", "Bootstrap"],
      level: 80,
      description: "Reszponzív design, felhasználóbarát, letisztult"
    },
    {
      category: "Backend Integration",
      skills: ["Node.js", "Express.js", "Next.js", "SQL"],
      level: 15,
      description: "Full-stack megoldások, API fejlesztés, AI integrálás"
    },
  ];

  const values = [
    {
      icon: "🎨",
      title: "Mobile-First Approach",
      description: "A maximális felhasználói élmény érdekében minden projektet mobil nézetben tervezek és fejlesztek első körben."
    },
    {
      icon: "⚡",
      title: "Gyors, Hatékony Fejlesztés",
      description: "Modern teknológiák és bevált módszertanok alkalmazásával gyorsan és hatékonyan szállítom a projekteket."
    },
    {
      icon: "🤝",
      title: "Együttműködés & Kommunikáció",
      description: "Átlátható folyamatok, rendszeres egyeztetések és proaktív problémamegoldás jellemzi a munkámat."
    },
  ];

  return (
    <section className="section about-section">
      <motion.div
        className="section-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="about-container">
          <motion.div 
            className="about-hero"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hero-content">
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                3+ éve tanulok webfejlesztést és a hozzá tartozó Front-end teknológiákat. Nemrég elkezdtem a Back-end oldalt is, hogy Full-stack programozóként egyedi és komplex web alkalmazásokat készíthessek. Célom, hogy modern, felhasználóbarát és letisztult appokat alkossak.
              </motion.p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            className="achievements-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3>Eredmények & Mérföldkövek</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="achievement-card"
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <div className="achievement-value">{achievement.value}</div>
                    <div className="achievement-label">{achievement.label}</div>
                    <div className="achievement-description">{achievement.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div 
            className="expertise-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3>Szakértelmem</h3>
            <div className="expertise-grid">
              {expertise.map((area, index) => (
                <motion.div
                  key={area.category}
                  className="expertise-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="expertise-header">
                    <h4>{area.category}</h4>
                    <div className="expertise-level">
                      <div className="level-bar">
                        <motion.div 
                          className="level-fill"
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${area.level}%` }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ delay: index * 0.15 + 0.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                      </div>
                      <span>{area.level}%</span>
                    </div>
                  </div>
                  
                  <div className="expertise-skills">
                    {area.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <p className="expertise-description">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div 
            className="values-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3>Megközelítésem & Értékeim</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="value-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
