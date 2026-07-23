import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Footer from "./Common/Footer";
import Header from "./Common/Header";

import MomentGallery from "./pages/HomePage/AamcheKshanachitra";
import ExamInfoSection from "./pages/HomePage/ExamInfo";
import ExamRegistrationSection from "./pages/HomePage/ExamRegistrationSection";

import ShabbasKattaHero from "./pages/ShabbasKattaPage/ShabbasKattaHero";
import ShikshakKatta from "./pages/ShabbasKattaPage/ShikshakKatta";
import VidhyarthiAnubhav from "./pages/ShabbasKattaPage/VidhyarthiAnubhav";
import PrernadayiVideo from "./pages/ShabbasKattaPage/PrernadayiVideo";
import SamparkSadha from "./pages/ShabbasKattaPage/SamparkSadha";
import ContactForm from "./pages/ShabbasKattaPage/ContactForm";
import AamchiOlakh from "./pages/AamchiOlakhPage/AamchiOlakh";
import AboutBenefits from "./pages/AamchiOlakhPage/AboutBenefits";
import AboutMissionVision from "./pages/AamchiOlakhPage/AboutMissionVision";
import AboutFAQ from "./pages/AamchiOlakhPage/AboutFAQ";
import AbhyaskramHero from "./pages/AbhyaskramPage/AbhyaskramHero";
import AbhyaskramCurriculum from "./pages/AbhyaskramPage/AbhyaskramCurriculum";
import AbhyaskramExamPattern from "./pages/AbhyaskramPage/AbhyaskramExamPattern";
import AbhyaskramQuestionTable from "./pages/AbhyaskramPage/AbhyaskramQuestionTable";
import AbhyaskramQuestionTable2 from "./pages/AbhyaskramPage/AbhyaskramQuestionTable2";
import AbhyaskramRules from "./pages/AbhyaskramPage/AbhyaskramRules";
import AbhyaskramExamDate from "./pages/AbhyaskramPage/AbhyaskramExamDate";
import AbhyaskramInterviewPreparation from "./pages/AbhyaskramPage/AbhyaskramInterviewPreparation";
import AbhyaskramScholarship from "./pages/AbhyaskramPage/AbhyaskramScholarship";
import AbhyaskramDistrictAward from "./pages/AbhyaskramPage/AbhyaskramDistrictAward";
import AbhyaskramMulakhat from "./pages/AbhyaskramPage/AbhyaskramMulakhat";
import AbhyaskramReferenceBooks from "./pages/AbhyaskramPage/AbhyaskramReferenceBooks";
import AbhyaskramMarquee from "./pages/AbhyaskramPage/AbhyaskramMarquee";
import AbhyaskramPoints from "./pages/AbhyaskramPage/AbhyaskramPoints";

/* Scroll to Top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <div className="App">
        <Header />

        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <MomentGallery />
                <ExamInfoSection />
                <ExamRegistrationSection />
              </>
            }
          />

          {/* Shabbas Katta */}
          <Route
            path="/shabbas-katta"
            element={
              <>
                <ShabbasKattaHero />
                <ShikshakKatta />
                <VidhyarthiAnubhav />
                <PrernadayiVideo />
                <SamparkSadha />
                <ContactForm />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <AamchiOlakh />
                <AboutBenefits />
                <AboutMissionVision />
                <AboutFAQ />
              </>
            }
          />

          <Route
            path="/courses"
            element={
              <>
                <AbhyaskramHero />
                <AbhyaskramExamPattern />
                <AbhyaskramQuestionTable />
                <AbhyaskramQuestionTable2 />
                <AbhyaskramRules />
                <AbhyaskramExamDate />
                <AbhyaskramInterviewPreparation />
                <AbhyaskramScholarship />
                <AbhyaskramMarquee />
                <AbhyaskramDistrictAward />
                <AbhyaskramMulakhat />
                <AbhyaskramReferenceBooks />
                <AbhyaskramPoints />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
