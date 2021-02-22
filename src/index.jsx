import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Appli from "./Appli";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/https://OlivierFortier.github.io/panier-achats/">
      <Appli />
    </Router>
  </React.StrictMode>,
  document.getElementById("racine")
);
