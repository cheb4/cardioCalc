import React from "react";
import Box from "./Box";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <h1>it is first page</h1>

      <Box linkTo="/calculator/chad2svasc" name="Chad2svasc" />
      <Box linkTo="/calculator/cockcroft" name="cockcroft" />
      <Box linkTo="/" name="home" />
      <Footer />
    </div>
  );
}

export default Home;
