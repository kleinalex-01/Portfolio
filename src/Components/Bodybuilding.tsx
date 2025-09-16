import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FaDumbbell, FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from 'react-icons/fa';

// Import bodybuilding images
import bb4 from '../assets/Photos/bodybuilding/bb4.jpg';
import bb5 from '../assets/Photos/bodybuilding/bb5.jpg';
import bb6 from '../assets/Photos/bodybuilding/bb6.jpg';
import bb7 from '../assets/Photos/bodybuilding/bb7.jpg';

const Bodybuilding: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Touch handlers for swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Gallery images data
  const galleryImages = [
    { src: bb4, alt: 'Verseny felkészülés 2024', caption: 'Competition Preparation 2024' },
    { src: bb5, alt: 'Scitec Muscle Beach 2024', caption: 'Scitec Muscle Beach 2024' },
    { src: bb6, alt: 'Verseny eredmény 2024', caption: 'Competition Results 2024' },
    { src: bb7, alt: 'Sikeres szereplés 2024', caption: 'Successful Performance 2024' }
  ];

  // Carousel functions
  const nextSlide = useCallback(() => {
    setCarouselIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevSlide = useCallback(() => {
    setCarouselIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  const goToSlide = useCallback((index: number) => {
    setCarouselIndex(index);
  }, []);

  // Gallery functions
  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!galleryOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          closeGallery();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [galleryOpen, nextImage, prevImage]);

  // Timeline scroll observer
  useEffect(() => {
    // Enhanced scroll observer with individual float-in animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    // Track which elements have been viewed
    const viewedElements = new Set<HTMLElement>();
    let totalItems = 0;

    const updateTimelineProgress = () => {
      const timelineLine = document.querySelector('.timeline-line') as HTMLElement;
      if (timelineLine && totalItems > 0) {
        const progress = (viewedElements.size / totalItems) * 100;
        timelineLine.style.setProperty('--progress', `${progress}%`);

        // Add active class to line when progress starts
        if (progress > 0) {
          timelineLine.classList.add('active');
        }
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const element = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          // Mark element as viewed
          viewedElements.add(element);

          // Add active class for enhanced styling
          element.classList.add('active');

          // Trigger individual float-in animation with delay
          setTimeout(() => {
            element.classList.add('float-in');

            // Also trigger image animations
            const images = element.querySelectorAll('.image-item');
            images.forEach((img, imgIndex) => {
              setTimeout(() => {
                img.classList.add('image-visible');
              }, imgIndex * 100);
            });
          }, index * 150);

          // Update timeline progress
          updateTimelineProgress();
        } else {
          // Only remove classes if element hasn't been viewed yet
          if (!viewedElements.has(element)) {
            element.classList.remove('active', 'float-in');
          }
          // If element has been viewed, keep it visible (don't remove classes)
        }
      });
    }, observerOptions);

    // Observe all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    totalItems = timelineItems.length;
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="page bodybuilding-page" ref={containerRef}>
      <div className="timeline-container">
        <h1 className="timeline-title">
          <FaDumbbell /> Testépítő utam
        </h1>

        <div className="timeline">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {/* 2015 - The Beginning */}
          <div className="timeline-item timeline-item-2015">
            <div className="timeline-marker">
              <div className="marker-circle"></div>
              <div className="marker-year">2015</div>
            </div>
            <div className="timeline-content">
              <h3>A Kezdet</h3>
              <p>
              15 évesen testvéremmel kezdtem el egy kültéri sportpályán edzeni. Magas, vékony és félénk voltam.
              </p>
              <p>
                A kezdeti nehézségek ellenére egyre kezdtem jobban élvezni a folyamatot. A folyamatos változás hatalmas motivációt adott az utam során.
              </p>
            </div>
          </div>

          {/* 2021 - Growth Period */}
          <div className="timeline-item timeline-item-2021">
            <div className="timeline-marker">
              <div className="marker-circle"></div>
              <div className="marker-year">2021</div>
            </div>
            <div className="timeline-content">
              <h3>Életmód</h3>
              <p>
                Ekkorra a testépítés már valami többé nőtte ki magát az életembe. Teljesen előtérbe helyeztem és eldöntöttem, hogy nem állok meg amíg egy versenyen nem indulok.
                A személyiségem fejlődésében is nagyon sokat segített, sokkal határozottabb, nyíltabb és beszédesebb lettem.
              </p>
              <p>
                A cél 2023 Scitec Muscle Beach volt.
              </p>
            </div>
          </div>

          {/* 2024 - Competition */}
          <div className="timeline-item timeline-item-2024">
            <div className="timeline-marker">
              <div className="marker-circle"></div>
              <div className="marker-year">2024</div>
            </div>
            <div className="timeline-content">
              <h3>A Verseny</h3>
              <div className="content-with-images">
                <div className="text-content">
                  <p>
                    2023-ban egy hátizom sérülés miatt nem tudtam indulni a versenyen, viszont ez nem állított meg abban, hogy jövőre még jobb formában álljak színpadra.
                  </p>
                  <p>
                    Egész évben keményen edzettem, odafigyeltem az étrendemre és aktívan gyógytornáztam, hogy minél jobb formámat tudjam megmutatni az 1 évvel későbbi 2024 Scitec Muscle Beach-en.
                  </p>
                  <p>
                    Nyár elején kezdtem egy 3 hónapos diétát, ami a csökkenő étel miatt az idő haladtával egyre nehezebbnek bizonyult. Minden erőforrásomat erre a versenyre fordítottam, meglett az eredménye.
                  </p>
                </div>
                <div className="image-gallery">
                  <div className="carousel-container">
                    <div
                      className="carousel-track"
                      style={{
                        transform: `translateX(-${carouselIndex * 100}%)`,
                        transition: 'transform 0.5s ease-in-out'
                      }}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      {galleryImages.map((image, index) => (
                        <div key={index} className="carousel-slide">
                          <div className="carousel-image-wrapper" onClick={() => openGallery(index)}>
                            <img src={image.src} alt={image.alt} />
                            <div className="image-overlay">
                              <FaExpand className="expand-icon" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      className="carousel-nav prev"
                      onClick={prevSlide}
                      aria-label="Previous image"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="carousel-nav next"
                      onClick={nextSlide}
                      aria-label="Next image"
                    >
                      <FaChevronRight />
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="carousel-indicators">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === carouselIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Image Counter */}
                  <div className="carousel-counter">
                    {carouselIndex + 1} / {galleryImages.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {galleryOpen && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeGallery}>
              <FaTimes />
            </button>

            <div className="gallery-main-image">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
              />
              <div className="image-caption">
                {galleryImages[currentImageIndex].caption}
              </div>
            </div>

            <button className="nav-button prev-button" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="nav-button next-button" onClick={nextImage}>
              <FaChevronRight />
            </button>

            <div className="gallery-thumbnails">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>

            <div className="gallery-counter">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bodybuilding;
