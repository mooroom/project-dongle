import React from "react";
import Navbar from "../components/Navbar";
import Guide from "../components/Guide";

import { createGlobalStyle } from "styled-components";

const Body = createGlobalStyle`
  body {
    background-color: grey
  }
`;

function Learn1() {
  return (
    <>
      <Body />
      <Navbar />
      <Guide />
    </>
  );
}

export default Learn1;
