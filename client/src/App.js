import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Navigation from "./components/Navigation";
import Students from "./pages/student/Students";
import Student from "./pages/student/Student";
import AdmissionForm from "./pages/student/AdmissionForm";
import Promotion from "./pages/student/Promotion";
import Teachers from "./pages/Teachers";
import Dashboard from "./pages/Dashboard";

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
              <Route path="/student/:id" element={<Student />} />
              <Route path="/student/admission" element={<AdmissionForm />} />
              <Route path="/student/promotion" element={<Promotion />} />
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
