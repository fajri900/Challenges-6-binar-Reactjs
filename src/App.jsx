//import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Navigation from "./components/Navbar";
import RentalCarsPage from "./pages/RentalCarsPage";
import Footer from "./components/footer";
import { CarProvider } from "./store/CarContext";

function App() {
  return (
    <>
      <CarProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cars" element={<RentalCarsPage />} />
          </Routes>
          <Footer />
        </Router>
      </CarProvider>
    </>
  );
}

export default App;
