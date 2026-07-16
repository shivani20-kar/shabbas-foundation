import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./Common/Footer";
import Header from "./Common/Header";
<<<<<<< HEAD
import MomentGallery from "./pages/HomePage/AamcheKshanachitra";
import ShabbasKattaHero from "./pages/ShabbasKattaPage/ShabbasKattaHero";

=======
import { Routes, Route } from "react-router-dom";
import ShabbasKattaHero from "./pages/ShabbasKattaPage/ShabbasKattaHero";
import ShikshakKatta from "./pages/ShabbasKattaPage/ShikshakKatta";
>>>>>>> a7822a2f1bf7a0ca9ab24b736831c3d2018988a9
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<MomentGallery/>}/>
        <Route path="/shabbas-katta" element={<ShabbasKattaHero />} />
=======
        <Route
          path="/shabbas-katta"
          element={
            <>
              <ShabbasKattaHero />
              <ShikshakKatta />
            </>
          }
        />
>>>>>>> a7822a2f1bf7a0ca9ab24b736831c3d2018988a9
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
