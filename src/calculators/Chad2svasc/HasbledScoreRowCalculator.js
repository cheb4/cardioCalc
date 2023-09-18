import React from "react";

function HasbledScoreRowCalculator({ score }) {
  let numberOfPatients;
  let numberOfBleeding;
  let bleedsPer100;
  switch (score) {
    case 0:
      numberOfPatients = 798;
      numberOfBleeding = 9;
      bleedsPer100 = 1.13;
      break;
    case 1:
      numberOfPatients = 2084;
      numberOfBleeding = 22;
      bleedsPer100 = 2.15;
      break;

    case 2:
      numberOfPatients = 2828;
      numberOfBleeding = 36;
      bleedsPer100 = 4.0299;
      break;

    case 3:
      numberOfPatients = 3015;
      numberOfBleeding = 43;
      bleedsPer100 = 7.77;
      break;

    case 4:
      numberOfPatients = 3061;
      numberOfBleeding = 47;
      bleedsPer100 = 16.47;
      break;

    case 5:
      numberOfPatients = 3069;
      numberOfBleeding = 48;
      bleedsPer100 = 28.97;
      break;

    case 6:
      numberOfPatients = 3071;
      numberOfBleeding = 48;
      bleedsPer100 = 28.97;
      break;

    case 7:
      numberOfPatients = 3071;
      numberOfBleeding = 48;
      bleedsPer100 = 28.97;
      break;

    case 8:
      numberOfPatients = 3071;
      numberOfBleeding = 48;
      bleedsPer100 = 28.97;
      break;

    case 9:
      numberOfPatients = 3071;
      numberOfBleeding = 48;
      bleedsPer100 = 28.97;
      break;

    default:
      break;
  }
  return (
    <tr>
      <td>Total {score}</td>
      <td>{numberOfPatients}</td>
      <td>{numberOfBleeding}</td>
      <td>{bleedsPer100}</td>
    </tr>
  );
}
export default HasbledScoreRowCalculator;
