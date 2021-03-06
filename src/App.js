import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Learn1 from "./pages/Learn1";
import Learn2 from "./pages/Learn2";
import Prepare from "./pages/Prepare";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/learn1" component={Learn1} />
      <Route path="/learn2" component={Learn2} />
      <Route path="/prepare" component={Prepare} />
    </Router>
  );
}

export default App;
