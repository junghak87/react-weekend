import "./App.css";
import Navigation from "./conponents/Navigation";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail/:movieId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
