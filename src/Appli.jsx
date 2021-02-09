import './Appli.scss';
import {useState} from 'react';
import Entete from './Entete.jsx';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';

export default function Appli() {
 
  const etatPanier = useState({});
  
  const panier = etatPanier[0];
  const setPanier = etatPanier[1];

  const [connexion, setConnexion] = useState(false); // Destructuring Arrays

  return (
    <div className="Appli">
      <Entete />
      <section className="contenuPrincipal">
        <ListeProduits />
      </section>
      <PiedDePage />
    </div>
  );
}