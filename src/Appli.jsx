import "./Appli.scss";
import { useEffect, useState } from "react";
import Entete from "./Entete.jsx";
import ListeProduits from "./ListeProduits";
import PiedDePage from "./PiedDePage";

export default function Appli() {
  const etatPanier = useState(() => {
    let panierDansLS = window.localStorage.getItem("panier");
    if (panierDansLS !== null) {
      return JSON.parse(panierDansLS);
    } else {
      return {};
    }
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
