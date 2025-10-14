import "./styles/main.scss";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AboutWorksDivider from "./components/AboutWorksDivider";
import WorksSection from "./components/WorksSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="App">
      <HeroSection />

      <AboutSection />

      <AboutWorksDivider />

      <WorksSection />

      <ContactSection />
    </div>
  );
}

export default App;
