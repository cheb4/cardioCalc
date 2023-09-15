import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import RowElement from "./RowElement";

const Chad2svasc = () => {
  const [score, setScore] = useState(0);
  //
  const [CongestiveHeartFailure, setCongestiveHeartFailure] = useState(0);
  const [Hypertension, setHypertension] = useState(0);
  const [ageMorethan75, setAgeMorethan75] = useState(0);
  const [ageBetween65And74, setAgeBetween65And74] = useState(0);
  const [diabetus, setDiabetus] = useState(0);
  const [stroke, setStroke] = useState(0);
  const [vascular, setVascular] = useState(0);
  const [Female, setFemale] = useState(0);

  useEffect(() => {
    setScore(
      CongestiveHeartFailure +
        Hypertension +
        ageMorethan75 +
        ageBetween65And74 +
        diabetus +
        stroke +
        vascular +
        Female
    );
  }, [
    CongestiveHeartFailure,
    Hypertension,
    ageMorethan75,
    ageBetween65And74,
    diabetus,
    stroke,
    vascular,
    Female,
  ]);

  return (
    <div>
      <Header />
      <div className="chadContainer">
        <h2>Chad2svasc</h2>
        <div className="chad-risk-factors">
          <table className="chad-risk-table">
            <thead>
              <tr>
                <th>RISK FACTORS</th>
                <th>SCORE</th>
              </tr>
            </thead>
            <tbody>
              <RowElement
                riskFactor={"Congestive heart failure"}
                score={1}
                controller={setCongestiveHeartFailure}
                currentState={CongestiveHeartFailure}
              />
              <RowElement
                riskFactor={"Hypertension"}
                score={1}
                controller={setHypertension}
                currentState={Hypertension}
              />
              <RowElement
                riskFactor={"Age ≥ 75"}
                score={2}
                controller={setAgeMorethan75}
                currentState={ageMorethan75}
              />
              <RowElement
                riskFactor={"Age 65-74"}
                score={1}
                controller={setAgeBetween65And74}
                currentState={ageBetween65And74}
              />
              <RowElement
                riskFactor={"Diabetes mellitus"}
                score={1}
                controller={setDiabetus}
                currentState={diabetus}
              />
              <RowElement
                riskFactor={"Stroke/TIA/thrombo-embolism"}
                score={2}
                controller={setStroke}
                currentState={stroke}
              />
              <RowElement
                riskFactor={"Vascular disease"}
                score={1}
                controller={setVascular}
                currentState={vascular}
              />
              <RowElement
                riskFactor={"Sex Female"}
                score={1}
                controller={setFemale}
                currentState={Female}
              />

              <tr>
                <td>Score</td>
                <td>{score}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chad2svasc;
