import React, { useState } from "react";

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
    const serumCreatinineUmolL = serumCreatinineMgDl * 88.4;
    const calculatedEGFR =
      ((140 - age) * weight * constant) / (serumCreatinineUmolL * k);
    setEGFR(calculatedEGFR);
  };

  return (
    <div>
      <h1>Cockcroft-Gault eGFR Calculator</h1>
      <label>
        Age (years):
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Serum Creatinine (mg/dL):
        <input
          type="number"
          value={serumCreatinineMgDl}
          onChange={(e) => setSerumCreatinineMgDl(e.target.value)}
        />
      </label>
      <br />
      <label>
        Gender:
        <select
          value={isMale}
          onChange={(e) => setIsMale(e.target.value === "true")}
        >
          <option value={true}>Male</option>
          <option value={false}>Female</option>
        </select>
      </label>
      <br />
      <button onClick={calculate}>Calculate eGFR</button>
      <br />
      {eGFR !== 0 && <p>eGFR: {eGFR.toFixed(2)} mL/min</p>}
    </div>
  );
};

export default CockcroftGaultCalculator;
