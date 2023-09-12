import React from "react";
import Box from "./Box";

function Home() {
  return (
    <div>
      <h1>it is first page</h1>

      <Box linkTo="/calculator/chad2svasc" name="Chad2svasc" />
      <Box linkTo="/calculator/cockcroft" name="cockcroft" />
      <Box linkTo="/" name="home" />
    </div>
  );
}

export default Home;
