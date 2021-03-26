import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Learn1 from "./pages/Learn1";
import Learn2 from "./pages/Learn2";
import Prepare from "./pages/Prepare";
import Create from "./pages/Create";
import Test from "./pages/Test";
import Learn3 from "./pages/Learn3";
import Fin from "./pages/Fin";

import InfoExhibit from "./pages/InfoExhibit";
import InfoLab from "./pages/InfoLab";
import AR from "./pages/AR";
import GameDance from "./pages/GameDance";
import GameVirus from "./pages/GameVirus";

function App() {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/learn1" component={Learn1} />
      <Route path="/learn2" component={Learn2} />
      <Route path="/prepare" component={Prepare} />
      <Route path="/create" component={Create} />
      <Route path="/test" component={Test} />
      <Route path="/learn3" component={Learn3} />
      <Route path="/fin" component={Fin} />
      <Route path="/exhibit" component={InfoExhibit} />
      <Route path="/lab" component={InfoLab} />
      <Route path="/ar" component={AR} />
      <Route path="/dance" component={GameDance} />
      <Route path="/virus" component={GameVirus} />
    </Router>
  );
}

export default App;
