import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navigation />
        <main>
          <header>Find Something ...</header>
          <div>
            <Routes>
              <Route path="/" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
