import "./App.css";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
<<<<<<< HEAD
import MomentGallery from "./pages/HomePage/AamcheKshanachitra";

function App() {
  return (
    <div className="App">
      <Header/>
      <MomentGallery/>
=======
import { Routes, Route } from "react-router-dom";
import ShabbasKattaHero from "./pages/ShabbasKattaPage/ShabbasKattaHero";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/shabbas-katta" element={<ShabbasKattaHero />} />
      </Routes>

>>>>>>> 4c7f05fc6fdd77b1d1bb85ac24ffb32d0c9e59e2
      <Footer />
    </div>
  );
}
export default App;
