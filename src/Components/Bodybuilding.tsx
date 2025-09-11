import React, { useState, useEffect, useRef } from 'react';
import { FaDumbbell, FaTrophy, FaCalendar, FaQuoteLeft } from 'react-icons/fa';

const Bodybuilding: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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

  return (
    <div className="page bodybuilding-page">
      {/* Background Animation Elements */}
      <div className="muscle-particle"></div>
      <div className="muscle-particle"></div>
      <div className="muscle-particle"></div>
      <div className="muscle-particle"></div>
      <div className="muscle-particle"></div>
      {/* Section 1 - Introduction & Discipline */}
      <section
        ref={section1Ref}
        data-section="section-1"
        className={`bodybuilding-section section-1 ${visibleSections.has('section-1') ? 'animate-in' : ''}`}
      >
        <div className="section-content">
          <div className="discipline-section">
            <h1><FaDumbbell /> Bodybuilding Journey</h1>
            <div className="discipline-quote">
              <FaQuoteLeft className="quote-icon" />
              <blockquote>
                "A testedzés nem csak a testet formálja, hanem a jellemet is. A sport megtanított arra,
                hogy soha ne adjam fel, hogy minden kihívás leküzdhető kitartással és fegyelemmel.
                Minden egyes edzés, minden egyes verseny egy lépés a jobb önmagam felé."
              </blockquote>
            </div>
            <p>
              A bodybuilding számomra több mint sport - ez egy életstílus, amely fegyelmet,
              kitartást és önfegyelmet tanított meg. Minden egyes súlyemelés, minden egyes
              ismétlés egy győzelem önmagam felett.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - First Competition */}
      <section
        ref={section2Ref}
        data-section="section-2"
        className={`bodybuilding-section section-2 ${visibleSections.has('section-2') ? 'animate-in' : ''}`}
      >
        <div className="section-content">
          <div className="competition-section">
            <h2><FaTrophy /> Első Versenyem</h2>
            <div className="competition-card">
              <div className="competition-image">
                <img
                  src="/images/competition1.jpg"
                  alt="Első verseny - Klein Alex"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.svg';
                  }}
                />
              </div>
              <div className="competition-details">
                <div className="competition-header">
                  <h3>IFBB Junior Bajnokság</h3>
                  <div className="competition-date">
                    <FaCalendar />
                    <span>2024. április</span>
                  </div>
                </div>
                <p>
                  Az első versenyem hatalmas mérföldkő volt az életemben. Hónapok kemény
                  felkészülés után, szigorú diéta mellett, végre színpadra léphettem.
                  Ez a verseny nem csak a helyezésről szólt, hanem arról, hogy bizonyítsam
                  magamnak: bármit elérhetek, ha igazán akarom.
                </p>
                <div className="competition-stats">
                  <div className="stat">
                    <span className="stat-number">3.</span>
                    <span className="stat-label">Helyezés</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">85kg</span>
                    <span className="stat-label">Verseny Súly</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">6</span>
                    <span className="stat-label">Hónap Felkészülés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Journey & Future Goals */}
      <section
        ref={section3Ref}
        data-section="section-3"
        className={`bodybuilding-section section-3 ${visibleSections.has('section-3') ? 'animate-in' : ''}`}
      >
        <div className="section-content">
          <div className="journey-section">
            <h2>Az Út & Célok</h2>
            <div className="journey-content">
              <div className="journey-text">
                <h3>A Kezdetek</h3>
                <p>
                  2023-ban kezdtem el a komoly testedzést. Akkor még csak 17 éves voltam,
                  de már éreztem, hogy szükségem van valamire, ami kihívást jelent és
                  karaktert épít. A bodybuilding tökéletes választás volt.
                </p>

                <h3>A Tanulságok</h3>
                <p>
                  Ez a sport megtanított időmenedzsmentre, táplálkozástudományra,
                  és arra, hogyan kell hosszú távú célokat kitűzni és elérni.
                  Minden egyes edzés egy lehetőség a fejlődésre.
                </p>

                <h3>A Jövő</h3>
                <p>
                  A céljaim közé tartozik, hogy minél több versenyt teljesítsek,
                  és hogy inspirációt adjak másoknak is. Hiszem, hogy a kitartás
                  és a fegyelem bármilyen célt elérhetővé tesz.
                </p>
              </div>
              <div className="motivation-image">
                <img
                  src="/images/bodybuilding-motivation.jpg"
                  alt="Motiváció és kitartás"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.svg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bodybuilding;
