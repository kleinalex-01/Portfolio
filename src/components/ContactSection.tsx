import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree for form handling
      const response = await fetch('https://formspree.io/f/xpznqkgj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Portfolio Contact Form'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+36305718139';
  };

  return (
    <section className="section contact-section" ref={elementRef}>
      <div className={`section-content ${isVisible ? 'animate' : ''}`}>
        <div className="contact-container">
          <div className="contact-intro">
            <h2 className="contact-title">Kapcsolat</h2>
            <p className="contact-subtitle">Ha tetszik bármi amit látsz, írj nekem!</p>
          </div>

          <div className="contact-content">
            <div className="contact-form-container">
              <h3>Küldj üzenetet</h3>

              {/* Form Progress */}
              <div className="form-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(Object.values(formData).filter(value => value.trim() !== '').length / Object.keys(formData).length) * 100}%` }}
                  ></div>
                </div>
                <span className="progress-text">
                  {Object.values(formData).filter(value => value.trim() !== '').length} / {Object.keys(formData).length} mező kitöltve
                </span>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Név</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="pl. Kovács János"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="pl. janos.kovacs@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Üzenet</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Írd le részletesen az üzenetedet... (projekt ötlet, együttműködési lehetőség, kérdés, stb.)"
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Küldés...' : 'Üzenet küldése'}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-status success">
                    ✓ Üzenet sikeresen elküldve! Hamarosan válaszolok.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-status error">
                    ✗ Hiba történt az üzenet küldésekor. Próbálja újra később.
                  </div>
                )}
              </form>
            </div>

            <div className="contact-info">
              <div className="contact-methods">
                <h3>Egyéb elérhetőségek</h3>

                <button
                  className="contact-phone-btn"
                  onClick={handlePhoneClick}
                  aria-label="Hívjon fel a 06 30 571 8139 számon"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>06 30 571 8139</span>
                </button>

                <div className="contact-email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>kleinalex215@gmail.com</span>
                </div>
              </div>

              <div className="contact-social">
                <h4>Követés</h4>
                <div className="social-links">
                  <a href="https://github.com/kleinalex-01" target="_blank" rel="noopener noreferrer" aria-label="GitHub profil">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/klein-alex" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profil">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;