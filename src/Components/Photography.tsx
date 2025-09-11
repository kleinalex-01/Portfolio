import React, { useState, useEffect, useRef } from 'react';
import { FaImage, FaTools } from 'react-icons/fa';

// Sample photo data - replace with your actual photos
const photos = [
  { id: 2, src: '/images/landscape.jpg', title: 'Pula csónak - 2025', category: 'landscape' },
  { id: 4, src: '/images/landscape2.JPG', title: 'Brijuni Római Templom - 2025', category: 'landscape' },
  { id: 6, src: '/images/landscape3.jpg', title: 'Pula Kolosszeum - 2025', category: 'portrait' },
  { id: 8, src: '/images/landscape4.jpg', title: 'Sin Igor - 2025', category: 'landscape' },
  { id: 9, src: '/images/landscape5.JPG', title: 'Koralj - 2025', category: 'landscape' },
  { id: 10, src: '/images/landscape6.JPG', title: 'Brijuni Zátony - 2025', category: 'landscape' },
  { id: 11, src: '/images/landscape7.JPG', title: 'Pula Kolosszeum - 2025', category: 'portrait' },
  { id: 12, src: '/images/landscape8.jpg', title: 'Bécs Vásár - 2024', category: 'landscape' },
  { id: 13, src: '/images/landscape9.JPG', title: 'Bécs Ringlispíl - 2024', category: 'landscape' },
  { id: 14, src: '/images/landscape10.jpg', title: 'Bécs Kastély - 2024', category: 'landscape' },
  { id: 15, src: '/images/landscape11.JPG', title: 'Bécs Vásár - 2024', category: 'portrait' },
  { id: 16, src: '/images/portrait1.jpg', title: 'Viharban - 2025', category: 'portrait' },
  { id: 17, src: '/images/portrait2.jpg', title: 'Elázva - 2025', category: 'portrait' }
];

// Equipment data
const equipment = [
  { name: 'Canon EOS 800d', type: 'Camera Body', specs: '24.2MP Full-Frame, 4K Video, CMOS AF', image: '/images/canon-eos-800d.png' },
  { name: 'Canon EF-S 55-250mm f/4-5.6 IS STM', type: 'Lens', specs: 'Professional zoom lens', image: '/images/canon-ef-s-55-250.png' },
  { name: 'Canon EF-S 18-55mm f/3.5-5.6 IS II', type: 'Lens', specs: 'Portrait lens, stunning bokeh', image: '/images/canon-ef-s-18-55.png' },
];

const Photography: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Refs for sections
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px -50px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = [section1Ref.current, section2Ref.current, section3Ref.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    // Check initial visibility
    const checkInitialVisibility = () => {
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            const sectionId = section.getAttribute('data-section');
            if (sectionId) {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            }
          }
        }
      });
    };

    setTimeout(checkInitialVisibility, 100);

    return () => observer.disconnect();
  }, []);

  // Filter photos based on category
  const filteredPhotos = filter === 'all' ? photos : photos.filter(photo => photo.category === filter);

  // Lightbox functions
  const openLightbox = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="page photography-page">
      {/* Background Animation Elements */}
      <div className="camera-flash"></div>
      <div className="bright-flash"></div>
      <div className="film-grain"></div>
      <div className="light-particle"></div>
      <div className="light-particle"></div>
      <div className="light-particle"></div>
      <div className="light-particle"></div>
      <div className="light-particle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      {/* Section 1 - Photo Gallery */}
      <section
        ref={section1Ref}
        data-section="section-1"
        className={`photography-section section-1 ${visibleSections.has('section-1') ? 'animate-in' : ''}`}
      >
        <div className="section-content">

          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Összes
            </button>
            <button
              className={`filter-btn ${filter === 'portrait' ? 'active' : ''}`}
              onClick={() => setFilter('portrait')}
            >
              Portrék
            </button>
            <button
              className={`filter-btn ${filter === 'landscape' ? 'active' : ''}`}
              onClick={() => setFilter('landscape')}
            >
              Tájképek
            </button>
          </div>

          {/* Photo Grid */}
          <div className="photo-grid">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="photo-item"
                onClick={() => openLightbox(photo)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (photo.category === 'landscape') {
                      target.src = '/images/placeholder-landscape.svg';
                    } else {
                      target.src = '/images/placeholder.svg';
                    }
                  }}
                />
                <div className="photo-overlay">
                  <FaImage className="photo-icon" />
                  <h3>{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Description & Equipment */}
      <section
        ref={section2Ref}
        data-section="section-2"
        className={`photography-section section-2 ${visibleSections.has('section-2') ? 'animate-in' : ''}`}
      >
        <div className="section-content">
          <div className="description-section">
            <h2>Fényképészet</h2>
            <p>
              18 évesen kaptam meg az első fényképezőgépem, amit azóta is örömmel használok.
            </p>
            <p>
              Életem során egy állandó hobbivá nőtte ki magát, így minden fontos pillanatot meg tudok örökíteni az életemben.
            </p>
          </div>

          <div className="equipment-section">
            <h3><FaTools /> A Felszerelésem</h3>
            <div className="equipment-grid">
              {equipment.map((item, index) => (
                <div
                  key={index}
                  className="equipment-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="equipment-image">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="equipment-info">
                    <h4>{item.name}</h4>
                    <span className="equipment-type">{item.type}</span>
                    <p>{item.specs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Landscape Photo */}
      <section
        ref={section3Ref}
        data-section="section-3"
        className={`photography-section section-3 ${visibleSections.has('section-3') ? 'animate-in' : ''}`}
      >
        <div className="landscape-container">
          <img
            src="/images/footer-landscape.jpg"
            alt="Stunning Landscape"
            className="landscape-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/placeholder-landscape.svg'; // Fallback
            }}
          />
          <div className="landscape-watermark">
            Klein Alex - 2025
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.title} />
            <div className="lightbox-info">
              <h3>{selectedPhoto.title}</h3>
              <button className="close-btn" onClick={closeLightbox}>×</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;
