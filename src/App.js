import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chad2svasc from "./calculators/Chad2svasc/Chad2svasc";
import CockcroftGaultCalculator from "./calculators/Cockcroft-Gault/Cockcroft-Gault";
import Home from "./first/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator/chad2svasc" element={<Chad2svasc />} />
        <Route
          path="/calculator/cockcroft"
          element={<CockcroftGaultCalculator />}
        />
      </Routes>
    </Router>
  );
}

export default App;
