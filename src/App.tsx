
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./Components/Main";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Coding from "./Components/Coding";
import Photography from "./Components/Photography";
import Bodybuilding from "./Components/Bodybuilding";
import Cars from "./Components/Cars";
import ContactMe from "./Components/ContactMe";
import NotFound from "./Components/NotFound";
import './styles/main.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="coding" element={<Coding />} />
          <Route path="photography" element={<Photography />} />
          <Route path="bodybuilding" element={<Bodybuilding />} />
          <Route path="cars" element={<Cars />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
