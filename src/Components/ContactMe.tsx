import React, { useState, useEffect, useRef } from 'react';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState({
    header: false,
    form: false,
    info: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const id = target.dataset.section;
            if (id) {
              setIsVisible(prev => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email sending logic here
  };

  return (
    <div className="page contactme-page">
      <div className="particles-bg"></div>
      <div className="container">
        <div className="contact-content">
          <div 
            ref={headerRef}
            data-section="header"
            className={`contact-header ${isVisible.header ? 'animate-in' : ''}`}
          >
            <h1>Kapcsolat</h1>
            <p className="contact-subtitle">
              Ha tetszik ami látsz az oldalon, keress bátran.
            </p>
            <p className="contact-description">
              E-mailos, telefonos egyeztetéshez szükséges adatokat lent találod.
            </p>
          </div>

          <div 
            ref={formRef}
            data-section="form"
            className={`contact-form-section ${isVisible.form ? 'animate-in' : ''}`}
          >
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
                  placeholder="Az Ön neve"
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
                  placeholder="pelda@email.com"
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
                  placeholder="Írd ide az üzeneted..."
                  rows={5}
                />
              </div>

              <button type="submit" className="submit-btn">
                Üzenet küldése
              </button>
            </form>
          </div>

          <div 
            ref={infoRef}
            data-section="info"
            className={`contact-info ${isVisible.info ? 'animate-in' : ''}`}
          >
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h3>E-mail</h3>
                  <a href="mailto:kleinalex215@gmail.com">kleinalex215@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h3>Telefon</h3>
                  <a href="tel:+36305718139">06 30 571 8139</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
