import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import RowElement from "./RowElement";
import ScoreRowElement from "./ScoreRowElement";
import HasbledScoreRowElement from "./HasbledScoreRowElement";
import HasbledScoreRowCalculator from "./HasbledScoreRowCalculator";

const Chad2svasc = () => {
  const [score, setScore] = useState(0);
  //risk factors
  const [CongestiveHeartFailure, setCongestiveHeartFailure] = useState(0);
  const [Hypertension, setHypertension] = useState(0);
  const [ageMorethan75, setAgeMorethan75] = useState(0);
  const [ageBetween65And74, setAgeBetween65And74] = useState(0);
  const [diabetus, setDiabetus] = useState(0);
  const [stroke, setStroke] = useState(0);
  const [vascular, setVascular] = useState(0);
  const [Female, setFemale] = useState(0);
  //
  const [hasbledScore, setHasbledScore] = useState(0);
  // hasbled
  const [hasbledHypertension, setHasbledHypertension] = useState(0);
  const [abnormalLiver, setabnormalLiver] = useState(0);
  const [abnormalRenal, setabnormalRenal] = useState(0);
  const [bleeding, setbleeding] = useState(0);
  const [irn, setirn] = useState(0);
  const [drugs, setdrugs] = useState(0);
  const [alcohol, setalchohol] = useState(0);
  const [hasbledAgeOver65, sethasBledAgeOver65] = useState(0);

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

  useEffect(() => {
    if (ageBetween65And74 === 1) {
      setAgeMorethan75(0);
    }
  }, [ageBetween65And74]);

  useEffect(() => {
    if (ageMorethan75 === 2) {
      setAgeBetween65And74(0);
    }
  }, [ageMorethan75]);

  useEffect(() => {
    setHasbledScore(
      hasbledHypertension +
        abnormalLiver +
        abnormalRenal +
        stroke +
        bleeding +
        irn +
        hasbledAgeOver65 +
        drugs +
        alcohol
    );
  }, [
    hasbledHypertension,
    abnormalLiver,
    abnormalRenal,
    stroke,
    bleeding,
    irn,
    hasbledAgeOver65,
    drugs,
    alcohol,
  ]);
  useEffect(() => {
    if (
      ageMorethan75 == 2 ||
      ageBetween65And74 == 1 ||
      ageMorethan75 == 0 ||
      ageBetween65And74 == 0
    ) {
      sethasBledAgeOver65((hasbledAgeOver65) =>
        hasbledAgeOver65 === 1 ? 0 : 1
      );
    }
  }, [ageMorethan75, ageBetween65And74]);
  return (
    <div>
      <Header />
      <h2>Chad2svasc</h2>
      <div className="chadContainer">
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
        <div className="chadScoreContainer">
          <table>
            <thead>
              <tr>
                <th>CHA2DS2VASc SCORE</th>
                <th>PATIENTS (n=7329)</th>
                <th>ADJUSTED STROKE RATE (% year)</th>
              </tr>
            </thead>
            <tbody>
              <ScoreRowElement
                tableScore={0}
                patients={1}
                strokeProc={0}
                score={score}
              />
              <ScoreRowElement
                tableScore={1}
                patients={422}
                strokeProc={1.3}
                score={score}
              />
              <ScoreRowElement
                tableScore={2}
                patients={1230}
                strokeProc={2.2}
                score={score}
              />
              <ScoreRowElement
                tableScore={3}
                patients={1730}
                strokeProc={3.2}
                score={score}
              />
              <ScoreRowElement
                tableScore={4}
                patients={1718}
                strokeProc={4.0}
                score={score}
              />
              <ScoreRowElement
                tableScore={5}
                patients={1159}
                strokeProc={6.7}
                score={score}
              />
              <ScoreRowElement
                tableScore={6}
                patients={679}
                strokeProc={9.8}
                score={score}
              />
              <ScoreRowElement
                tableScore={7}
                patients={294}
                strokeProc={9.6}
                score={score}
              />
              <ScoreRowElement
                tableScore={8}
                patients={82}
                strokeProc={6.7}
                score={score}
              />
              <ScoreRowElement
                tableScore={9}
                patients={14}
                strokeProc={15.2}
                score={score}
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className="hasbledContainer">
        <div className="hasbled">
          <table>
            <thead>
              <tr>
                <th>RISK FACTORS</th>
                <th>Points awarded</th>
              </tr>
            </thead>
            <tbody>
              <RowElement
                riskFactor={"Hypertension"}
                score={1}
                controller={setHasbledHypertension}
                currentState={hasbledHypertension}
              />
              <RowElement
                riskFactor="Abnormal liver function"
                score={1}
                controller={setabnormalLiver}
                currentState={abnormalLiver}
              />

              <RowElement
                riskFactor="Abnormal renal function"
                score={1}
                controller={setabnormalRenal}
                currentState={abnormalRenal}
              />

              <RowElement
                riskFactor="Stroke"
                score={1}
                controller={setStroke}
                currentState={stroke}
              />

              <RowElement
                riskFactor="Bleeding"
                score={1}
                controller={setbleeding}
                currentState={bleeding}
              />

              <RowElement
                riskFactor="Labile INRs"
                score={1}
                controller={setirn}
                currentState={irn}
              />

              <RowElement
                riskFactor="Elderly (Age >65)"
                score={1}
                controller={sethasBledAgeOver65}
                currentState={hasbledAgeOver65}
              />

              <RowElement
                riskFactor="Drugs"
                score={1}
                controller={setdrugs}
                currentState={drugs}
              />

              <RowElement
                riskFactor="Alcohol"
                score={1}
                controller={setalchohol}
                currentState={alcohol}
              />
              <tr>
                <td>score</td>
                <td>{hasbledScore}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="hasbledScore">
          <table>
            <thead>
              <tr>
                <th>HAS BLED SCORE</th>
                <th>Number of PATIENTS</th>
                <th>Number of Bleeding</th>
                <th>BLEEDS PER 100 PATIENT YEARS</th>
              </tr>
            </thead>
            <tbody>
              <HasbledScoreRowElement
                hasbledScore={0}
                NumberOfPatients={798}
                numberOfBleeding={9}
                bleedsPer100={1.13}
                score={hasbledScore}
              />

              <HasbledScoreRowElement
                hasbledScore={1}
                NumberOfPatients={1286}
                numberOfBleeding={13}
                bleedsPer100={1.02}
                score={hasbledScore}
              />

              <HasbledScoreRowElement
                hasbledScore={2}
                NumberOfPatients={744}
                numberOfBleeding={14}
                bleedsPer100={1.88}
                score={hasbledScore}
              />

              <HasbledScoreRowElement
                hasbledScore={3}
                NumberOfPatients={187}
                numberOfBleeding={7}
                bleedsPer100={3.74}
                score={hasbledScore}
              />

              <HasbledScoreRowElement
                hasbledScore={4}
                NumberOfPatients={46}
                numberOfBleeding={4}
                bleedsPer100={8.7}
                score={hasbledScore}
              />

              <HasbledScoreRowElement
                hasbledScore={5}
                NumberOfPatients={8}
                numberOfBleeding={1}
                bleedsPer100={12.5}
                score={hasbledScore}
              />

              <HasbledScoreRowElement
                hasbledScore={6}
                NumberOfPatients={2}
                numberOfBleeding={0}
                bleedsPer100={0}
                score={hasbledScore}
              />

              <HasbledScoreRowElement
                hasbledScore={7}
                NumberOfPatients={0}
                numberOfBleeding={0}
                bleedsPer100={0}
                score={hasbledScore}
              />

              <HasbledScoreRowElement
                hasbledScore={8}
                NumberOfPatients={0}
                numberOfBleeding={0}
                bleedsPer100={0}
                score={hasbledScore}
              />

              <HasbledScoreRowElement
                hasbledScore={9}
                NumberOfPatients={0}
                numberOfBleeding={0}
                bleedsPer100={0}
                score={hasbledScore}
              />
              <HasbledScoreRowCalculator score={hasbledScore} />
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chad2svasc;
