import React from "react";

function ScoreRowElement({ tableScore, patients, strokeProc, score }) {
  return (
    <tr className={tableScore == score ? "score-active" : ""}>
      <td>{tableScore}</td>
      <td>{patients}</td>
      <td>{strokeProc}%</td>
    </tr>
  );
}

export default ScoreRowElement;
