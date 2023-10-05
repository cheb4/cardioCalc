import React, { useState } from "react";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const CockcroftGaultCalculator = () => {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [serumCreatinineMgDl, setSerumCreatinineMgDl] = useState(0);
  const [isMale, setIsMale] = useState(true);
  const [eGFR, setEGFR] = useState(0);

  const calculate = () => {
    const constant = isMale ? 1 : 0.85;
    const k = isMale ? 1.23 : 1.04;
    // Convert serum creatinine from mg/dL to µmol/L
    // const serumCreatinineUmolL = serumCreatinineMgDl * 88.4;
    const calculatedEGFR =
      ((140 - age) * weight * constant) / serumCreatinineMgDl;
    setEGFR(calculatedEGFR);
  };

  return (
    <div>
      <Header />
      <h1>Kreatinino klirensas</h1>
      <div className="formContainer">
        <label className="cockroft-age">
          Amžius (metais):
          <input
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              calculate();
            }}
          />
        </label>
        <br />
        <label className="cockroft-weight">
          Svoris (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              calculate();
            }}
          />
        </label>
        <br />
        <label className="cockroft-serum">
          Kreatinas (µmol/l):
          <input
            type="number"
            value={serumCreatinineMgDl}
            onChange={(e) => {
              setSerumCreatinineMgDl(e.target.value);
              calculate();
            }}
          />
        </label>
        <br />
        <label>
          Lytis:
          <select
            className="creatine-select"
            value={isMale}
            onChange={(e) => {
              setIsMale(e.target.value === "true");
              calculate();
            }}
          >
            <option value={true}>Vyriška</option>
            <option value={false}>Moteriška</option>
          </select>
        </label>
        <br />
        <button onClick={calculate}>Calculate eGFR</button>
        <br />
        <p>
          eGFR: {eGFR.toFixed(2)} mL/min{" "}
          <button
            onClick={() => {
              navigator.clipboard.writeText(eGFR.toFixed(2));
            }}
          >
            kopijuoti
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(eGFR.toFixed(2) + " mL/min");
            }}
          >
            kopijuoti su mL/min
          </button>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CockcroftGaultCalculator;
