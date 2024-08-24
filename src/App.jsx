import "./App.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Register from "./Components/Auth/Register";
import Add from "./Components/Sidebar/Add";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Add />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </Router>
      <Register />
      {/*  <Add/> */}
    </>
  );
}

export default App;
