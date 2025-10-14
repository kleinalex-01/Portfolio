import { motion } from 'framer-motion'

const AboutSection = () => {
  const achievements = [
    { 
      icon: "🎯", 
      value: "50+", 
      label: "Elkészült projekt",
      description: "Webalkalmazások, e-kereskedelem, SaaS megoldások"
    },
    { 
      icon: "⚡", 
      value: "3+", 
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
      skills: ["React", "TypeScript", "Next.js"],
      level: 95,
      description: "Modern React alkalmazások, teljes ciklusú fejlesztés"
    },
    {
      category: "UI/UX Design",
      skills: ["Figma", "CSS3", "Sass"],
      level: 90,
      description: "Reszponzív dizájn, felhasználói élmény optimalizálás"
    },
    {
      category: "Backend Integration",
      skills: ["Node.js", "REST APIs", "GraphQL"],
      level: 85,
      description: "Full-stack megoldások, API fejlesztés"
    },
  ];

  const values = [
    {
      icon: "🎨",
      title: "Design-First Approach",
      description: "Minden projektet a felhasználói élménytől indítok. Hiszek abban, hogy a jó design nem luxus, hanem alapkövetelmény."
    },
    {
      icon: "⚡",
      title: "Gyors, Hatékony Fejlesztés",
      description: "Modern eszközökkel és metodológiákkal biztosítom, hogy a projektek határidőre és költséghatékonyan készüljenek el."
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="about-container">
          {/* Hero Introduction */}
          <motion.div 
            className="about-hero"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hero-content">
              <motion.h2 
                className="hero-greeting"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Üdvözöllek! 👋
              </motion.h2>
              
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Alex vagyok,
                <span className="hero-highlight">Frontend fejlesztő</span>
              </motion.h1>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Szenvedélyesen foglalkozom a modern webtechnológiákkal és abban hiszek, 
                hogy a kivételes felhasználói élmény megváltoztathatja a világot. 
                3+ éve segítek vállalkozásoknak és startupoknak megvalósítani 
                digitális vízióikat.
              </motion.p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            className="achievements-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3>Szakértelem Területek</h3>
            <div className="expertise-grid">
              {expertise.map((area, index) => (
                <motion.div
                  key={area.category}
                  className="expertise-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.2 + 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                          transition={{ delay: index * 0.2 + 1.0, duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                  transition={{ delay: index * 0.15 + 0.8, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
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
