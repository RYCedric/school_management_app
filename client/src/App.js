import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navigation />
        <main>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
