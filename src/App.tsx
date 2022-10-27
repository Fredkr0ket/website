import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MonkeyWars from "./pages/MonkeyWars"
import JeffindaHood from "./pages/JeffindaHood"
import NekKletser from "./pages/NekKletser"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, } from 'react';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="monkeywars" element={<MonkeyWars />} />
          <Route path="jeffindahood" element={<JeffindaHood />} />
          <Route path="nekkletser" element={<NekKletser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
