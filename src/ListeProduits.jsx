import './ListeProduits.scss';
import Produit from "./Produit";
import tabProduits from './data/produits.json';
import fbAppli from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEWV0JTpiNCamY6BciAfQzNZfKSLvklAY",
  authDomain: "pvt-h21-olivier.firebaseapp.com",
  projectId: "pvt-h21-olivier",
  storageBucket: "pvt-h21-olivier.appspot.com",
  messagingSenderId: "705844162303",
  appId: "1:705844162303:web:f92863b5cc0e360a61a6ca"
};

export default function ListeProduits({etatPanier}) {

  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>
        
        {tabProduits.map(prd => 
         <Produit etatPanier={etatPanier} key={prd.id} nom={prd.nom} prix={prd.prix} id={prd.id} />
        )}
      </ul>
    </div>
  );
}