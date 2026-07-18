import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Common/Footer";
import Header from "./Common/Header";
import MomentGallery from "./pages/HomePage/AamcheKshanachitra";
import ShabbasKattaHero from "./pages/ShabbasKattaPage/ShabbasKattaHero";
import ShikshakKatta from "./pages/ShabbasKattaPage/ShikshakKatta";
import ExamInfoSection from "./pages/HomePage/ExamInfo";
import ExamRegistrationSection from "./pages/HomePage/ExamRegistrationSection";

import MomentGallery from "./pages/HomePage/AamcheKshanachitra";
import ShabbasKattaHero from "./pages/ShabbasKattaPage/ShabbasKattaHero";

import ShikshakKatta from "./pages/ShabbasKattaPage/ShikshakKatta";
import VidhyarthiAnubhav from "./pages/ShabbasKattaPage/VidhyarthiAnubhav";
import PrernadayiVideo from "./pages/ShabbasKattaPage/PrernadayiVideo";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={
          <><MomentGallery/>
          <ExamInfoSection/>
          <ExamRegistrationSection/>
          </>}/>
        <Route path="/" element={<MomentGallery />} />

        <Route
          path="/shabbas-katta"
          element={
            <>
              <ShabbasKattaHero />
              <ShikshakKatta />
              <VidhyarthiAnubhav />
              <PrernadayiVideo />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
