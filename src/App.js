import "./App.css";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
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

      <Footer />
    </div>
  );
}
export default App;
