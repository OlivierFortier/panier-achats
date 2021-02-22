import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Appli from "./Appli";
import { BrowserRouter as Router } from "react-router-dom";

// eslint-disable-next-line no-restricted-globals
let baseName = (window.location.href.search(/github\.io/) !== -1) ? "/panier-achats" : "";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={baseName}>
      <Appli />
    </Router>
  </React.StrictMode>,
  document.getElementById("racine")
);
