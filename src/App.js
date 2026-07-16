import "./App.css";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import { Routes, Route } from "react-router-dom";
import ShabbasKattaHero from "./pages/ShabbasKattaPage/ShabbasKattaHero";
import ShikshakKatta from "./pages/ShabbasKattaPage/ShikshakKatta";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/shabbas-katta"
          element={
            <>
              <ShabbasKattaHero />
              <ShikshakKatta />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
