import "./Appli.scss";
import { useEffect, useState } from "react";
import Entete from "./Entete.jsx";
import ListeProduits from "./ListeProduits";
import PiedDePage from "./PiedDePage";

export default function Appli() {
  const etatPanier = useState(() => {
    return JSON.parse(window?.localStorage?.getItem("panier")) || {};
  });

  const [panier] = etatPanier;

  useEffect(() => {
    window.localStorage.setItem("panier", JSON.stringify(panier));
  }, [panier]);

  return (
    <div className="Appli">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        <ListeProduits etatPanier={etatPanier} />
      </section>
      <PiedDePage />
    </div>
  );
}
