import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashbaord/Dashboard";
import Questionnaire from "./components/Dashbaord/Questionnaire";
import NavBar from "./components/Navbar";
import AddPatientForm from "./components/Patient/Patient";
import MedicalCenter from "./components/MedicalCenter/Medical";
import Provider from "./components/Provider/Provider";
import Support from "./components/Support/Support";
import VisitNotes from "./components/VisitNotes";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/add-patient" element={<AddPatientForm />} />
            <Route path="/add-medical-center" element={<MedicalCenter />} />
            <Route path="/add-provider" element={<Provider />} />
            <Route path="/add-support" element={<Support />} />
            <Route path="/visit-notes" element={<VisitNotes />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
