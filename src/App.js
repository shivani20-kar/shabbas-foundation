import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./Common/Footer";
import Header from "./Common/Header";
import MomentGallery from "./pages/HomePage/AamcheKshanachitra";
import ShabbasKattaHero from "./pages/ShabbasKattaPage/ShabbasKattaHero";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MomentGallery/>}/>
        <Route path="/shabbas-katta" element={<ShabbasKattaHero />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
