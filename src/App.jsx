import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MainShop from "./Pages/Shop/MainShop";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Detail from "./Pages/Shop/Detail";
import Map from "./Pages/Map/Map";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<MainShop />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/:id" element={<Detail />} />
        <Route exact path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
