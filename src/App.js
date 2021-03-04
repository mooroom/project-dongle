import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Learn1 from "./pages/Learn1";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/learn1" component={Learn1} />
    </Router>
  );
}

export default App;
