import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Prices from "./pages/Prices";
import News from "./pages/News";
import Analytics from "./pages/Analytics";
import Salon from "./pages/Salon";
import Transport from "./pages/Transport";
import SeatAds from "./pages/SeatAds";
import Banners from "./pages/Banners";
import Patents from "./pages/Patents";
import Ceiling from "./pages/Ceiling";
import Doors from "./pages/Doors";
import Gallery from "./pages/Gallery";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas/" element={<About />} />
            <Route path="/kontakty/" element={<Contacts />} />
            <Route path="/nashi-tseny/" element={<Prices />} />
            <Route path="/novosti/" element={<News />} />
            <Route path="/reklamnaya-analitika/" element={<Analytics />} />
            <Route path="/reklama-v-salone/" element={<Salon />} />
            <Route path="/reklama-na-transporte/" element={<Transport />} />
            <Route path="/reklama-na-podgolovnikah-i-na-spinkah-sidenij/" element={<SeatAds />} />
            <Route path="/bannernye-rastyazhki/" element={<Banners />} />
            <Route path="/patenty/" element={<Patents />} />
            <Route path="/reklama-na-potolkah/" element={<Ceiling />} />
            <Route path="/naklejki-na-dveryah/" element={<Doors />} />
            <Route path="/fotogalereya-nashi-raboty/" element={<Gallery />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
export default App;