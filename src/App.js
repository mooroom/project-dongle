import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Learn from "./pages/Learn";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/learn/:num" component={Learn} />
    </Router>
  );
}

export default App;
