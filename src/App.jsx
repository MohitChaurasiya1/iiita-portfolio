import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Experience from "./Pages/Experience/Experience";
import Education from "./Pages/Education/Education";
import Research from "./Pages/Research/Research";
import Publications from "./Pages/Publications/Publications";
import Awards from "./Pages/Achivements&Activites/Achivements&Activites";
import Contact from "./Pages/Contact/Contact";
import AchivementsActivites from "./Pages/Achivements&Activites/Achivements&Activites";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/achievements" element={<AchivementsActivites />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;