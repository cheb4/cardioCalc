import React from "react";

function HasbledScoreRowElement({
  hasbledScore,
  NumberOfPatients,
  numberOfBleeding,
  bleedsPer100,
  score,
}) {
  return (
    <tr className={hasbledScore == score ? "score-active" : ""}>
      <td>{hasbledScore}</td>
      <td>{NumberOfPatients}</td>
      <td>{numberOfBleeding}</td>
      <td>{bleedsPer100}</td>
    </tr>
  );
}

export default HasbledScoreRowElement;
