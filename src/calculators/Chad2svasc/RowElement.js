import React from "react";

function RowElement({ riskFactor, score, controller, currentState }) {
  return (
    <tr
      className={currentState ? "risk-selected-active" : ""}
      onClick={() => (currentState ? controller(0) : controller(score))}
    >
      <td>{riskFactor}</td>
      <td>{score}</td>
    </tr>
  );
}

export default RowElement;
