import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ContactParallaxBackground from "./ContactParallaxBackground";
import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaClock, 
  FaCheckCircle,
  FaUser,
  FaEnvelope,
  FaCommentDots
} from "react-icons/fa";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  _gotcha?: string; // Honeypot field for spam protection
}

// Sanitize input to prevent XSS attacks
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove dangerous HTML characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .trim();
};

// Common email typos and suggestions
const suggestEmailDomain = (email: string): string | null => {
  const parts = email.split('@');
  if (parts.length !== 2) return null;
  
  const domain = parts[1].toLowerCase();
  const commonTypos: Record<string, string> = {
    'gmai.com': 'gmail.com',
    'gmial.com': 'gmail.com',
    'gamil.com': 'gmail.com',
    'yahooo.com': 'yahoo.com',
    'yaho.com': 'yahoo.com',
    'hotmial.com': 'hotmail.com',
    'outlok.com': 'outlook.com',
  };
  
  return commonTypos[domain] || null;
};

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    _gotcha: '' // Honeypot field for spam bots
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);

  // Success status is now handled by toast, no need for auto-hide
  // useEffect removed for toast implementation

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'A név megadása kötelező';
        if (value.trim().length < 2) return 'A név legalább 2 karakter hosszú legyen';
        if (value.trim().length > 50) return 'A név maximum 50 karakter hosszú lehet';
        return undefined;
      
      case 'email':
        if (!value.trim()) return 'Az e-mail cím megadása kötelező';
        if (!emailRegex.test(value)) return 'Érvénytelen e-mail cím formátum';
        return undefined;
      
      case 'message':
        if (!value.trim()) return 'Az üzenet megadása kötelező';
        if (value.trim().length < 10) return 'Az üzenet legalább 10 karakter hosszú legyen';
        if (value.trim().length > 1000) return 'Az üzenet maximum 1000 karakter hosszú lehet';
        return undefined;
      
      default:
        return undefined;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Ignore honeypot field
    if (name === '_gotcha') {
      setFormData(prev => ({ ...prev, [name]: value }));
      return;
    }
    
    // Sanitize input
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    
    // Check for email suggestions
    if (name === 'email' && sanitizedValue.includes('@')) {
      const suggestion = suggestEmailDomain(sanitizedValue);
      setEmailSuggestion(suggestion);
    } else if (name === 'email') {
      setEmailSuggestion(null);
    }
    
    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, sanitizedValue);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Ignore honeypot field
    if (name === '_gotcha') return;
    
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    (['name', 'email', 'message'] as const).forEach((key) => {
      const error = validateField(key, formData[key] || '');
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot - if filled, it's likely spam
    if (formData._gotcha) {
      console.log('Spam detected');
      return;
    }
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xpznqkgj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Új üzenet a portfólióról'
        })
      });

      if (response.ok) {
        // Show success toast
        toast.success('Köszönöm! Az üzeneted sikeresen elküldve. Hamarosan válaszolok!', {
          duration: 5000,
          icon: '✉️',
          position: 'bottom-right',
          style: {
            background: '#10b981',
            color: '#fff',
            fontWeight: 500,
            borderRadius: '12px',
            padding: '16px',
          },
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
        setErrors({});
        setTouched({});
        setEmailSuggestion(null);
        setSubmitStatus('success');
      } else {
        toast.error('Hiba történt az üzenet küldése során. Kérlek, próbáld újra később.', {
          duration: 5000,
          icon: '⚠️',
          position: 'bottom-right',
          style: {
            background: '#ef4444',
            color: '#fff',
            fontWeight: 500,
            borderRadius: '12px',
            padding: '16px',
          },
        });
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Hiba történt az üzenet küldése során. Kérlek, próbáld újra később.', {
        duration: 5000,
        icon: '⚠️',
        position: 'bottom-right',
        style: {
          background: '#ef4444',
          color: '#fff',
          fontWeight: 500,
          borderRadius: '12px',
          padding: '16px',
        },
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStatus = (fieldName: 'name' | 'email' | 'message'): 'error' | 'success' | 'default' => {
    if (!touched[fieldName]) return 'default';
    if (errors[fieldName]) return 'error';
    if (formData[fieldName]?.trim()) return 'success';
    return 'default';
  };

  // Check if form has any validation errors
  const hasErrors = Object.values(errors).some(error => error !== undefined && error !== '');
  
  // Check if all required fields are filled
  const allFieldsFilled = formData.name.trim() && formData.email.trim() && formData.message.trim();
  
  // Disable submit button if there are errors OR if not all fields are filled
  const isSubmitDisabled = isSubmitting || hasErrors || !allFieldsFilled;
  
  // Calculate form progress
  const filledFieldsCount = [formData.name, formData.email, formData.message].filter(v => v.trim()).length;
  const totalFields = 3;
  const formProgress = (filledFieldsCount / totalFields) * 100;
  
  // Character counter status
  const getCharCountStatus = (length: number, max: number): 'default' | 'warning' | 'danger' => {
    const percentage = (length / max) * 100;
    if (percentage >= 95) return 'danger';
    if (percentage >= 85) return 'warning';
    return 'default';
  };

  return (
    <section className="section contact-section" ref={elementRef}>
      <ContactParallaxBackground scrollTargetRef={elementRef} />
      <Toaster />
      <div className={`section-content ${isVisible ? 'animate' : ''}`}>
        <div className="contact-container">
          
          {/* Header */}
          <div className="contact-header">
            <h2 className="contact-title">Keress bátran!</h2>
            <p className="contact-subtitle">
              Ha tetszett, amit láttál, vagy kérdésed van, ne habozz írni egy üzenetet!
            </p>
            
            {/* Progress Indicator */}
            <motion.div 
              className="form-progress"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="progress-info">
                <span className="progress-text">{filledFieldsCount}/{totalFields} mező kitöltve</span>
                <span className="progress-percentage">{Math.round(formProgress)}%</span>
              </div>
              <div className="progress-bar-container">
                <motion.div 
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${formProgress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>

          <div className="contact-content">
            
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                
                {/* Name Field */}
                <div className={`form-field ${getFieldStatus('name')}`}>
                  <div className="input-wrapper">
                    <FaUser className="field-icon" aria-hidden="true" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input with-icon"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    <label htmlFor="name" className="floating-label">
                      Név <span className="required">*</span>
                    </label>
                  </div>
                  <AnimatePresence mode="wait">
                    {errors.name && touched.name && (
                      <motion.span
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="form-error"
                        id="name-error"
                        role="alert"
                      >
                        {errors.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email Field */}
                <div className={`form-field ${getFieldStatus('email')}`}>
                  <div className="input-wrapper">
                    <FaEnvelope className="field-icon" aria-hidden="true" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input with-icon"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error email-suggestion" : undefined}
                    />
                    <label htmlFor="email" className="floating-label">
                      E-mail <span className="required">*</span>
                    </label>
                  </div>
                  
                  {/* Email suggestion */}
                  <AnimatePresence mode="wait">
                    {emailSuggestion && !errors.email && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="email-suggestion"
                        id="email-suggestion"
                      >
                        Úgy gondoltad: <button
                          type="button"
                          className="suggestion-btn"
                          onClick={() => {
                            const parts = formData.email.split('@');
                            const correctedEmail = `${parts[0]}@${emailSuggestion}`;
                            setFormData(prev => ({ ...prev, email: correctedEmail }));
                            setEmailSuggestion(null);
                          }}
                        >
                          {formData.email.split('@')[0]}@{emailSuggestion}
                        </button>?
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <AnimatePresence mode="wait">
                    {errors.email && touched.email && (
                      <motion.span
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="form-error"
                        id="email-error"
                        role="alert"
                      >
                        {errors.email}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message Field */}
                <div className={`form-field ${getFieldStatus('message')}`}>
                  <div className="input-wrapper">
                    <FaCommentDots className="field-icon textarea-icon" aria-hidden="true" />
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea with-icon"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      rows={5}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : "char-counter"}
                    />
                    <label htmlFor="message" className="floating-label">
                      Üzenet <span className="required">*</span>
                    </label>
                  </div>
                  <motion.span 
                    className={`char-count ${getCharCountStatus(formData.message.length, 1000)}`}
                    id="char-counter"
                    animate={{
                      scale: formData.message.length > 850 ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {formData.message.length} / 1000
                  </motion.span>
                  <AnimatePresence mode="wait">
                    {errors.message && touched.message && (
                      <motion.span
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="form-error"
                        id="message-error"
                        role="alert"
                      >
                        {errors.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Honeypot field - hidden from users, for spam protection */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'loading' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
                  disabled={isSubmitDisabled}
                  aria-busy={isSubmitting}
                  whileHover={!isSubmitDisabled ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitDisabled ? { scale: 0.98 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  {isSubmitting ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="btn-content"
                    >
                      <span className="spinner" aria-hidden="true"></span>
                      Küldés folyamatban...
                    </motion.span>
                  ) : submitStatus === 'success' ? (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="btn-content"
                    >
                      <FaCheckCircle /> Elküldve!
                    </motion.span>
                  ) : (
                    <span className="btn-content">Üzenet küldése</span>
                  )}
                </motion.button>

              </form>
            </div>

            {/* Social Links Sidebar */}
            <div className="contact-social">
              <h3 className="social-title">Kövess</h3>
              <p className="social-subtitle">Találj meg a közösségi médián</p>
              
              <div className="social-links">
                
                {/* GitHub */}
                <motion.a 
                  href="https://github.com/kleinalex-01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link github"
                  aria-label="GitHub profil megnyitása új ablakban"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaGithub size={24} aria-hidden="true" />
                  <span className="social-name">GitHub</span>
                  <span className="social-tooltip">Nézd meg GitHub projektjeimet</span>
                </motion.a>

                {/* LinkedIn */}
                <motion.a 
                  href="https://linkedin.com/in/klein-alex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="LinkedIn profil megnyitása új ablakban"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLinkedin size={24} aria-hidden="true" />
                  <span className="social-name">LinkedIn</span>
                  <span className="social-tooltip">Kapcsolódj velem LinkedInen</span>
                </motion.a>

                {/* Facebook */}
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  aria-label="Facebook profil megnyitása új ablakban"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaFacebook size={24} aria-hidden="true" />
                  <span className="social-name">Facebook</span>
                  <span className="social-tooltip">Kövess Facebookon</span>
                </motion.a>

                {/* Instagram */}
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label="Instagram profil megnyitása új ablakban"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaInstagram size={24} aria-hidden="true" />
                  <span className="social-name">Instagram</span>
                  <span className="social-tooltip">Nézd meg Instagramomat</span>
                </motion.a>

              </div>

              {/* Quick Contact Info */}
              <div className="quick-info">
                <div className="info-item">
                  <FaClock size={20} aria-hidden="true" />
                  <span>Általában 24 órán belül válaszolok</span>
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