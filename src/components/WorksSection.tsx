import WorksContactDivider from "./WorksContactDivider";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const WorksSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section works-section" ref={elementRef}>
      <div className={`section-content ${isVisible ? 'animate' : ''}`}>
        <h1>Works Section</h1>
      </div>
      <WorksContactDivider />
    </section>
  );
};

export default WorksSection;