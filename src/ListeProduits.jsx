import "./ListeProduits.scss";
import Produit from "./Produit";
import tabProduits from "./data/produits.json";
import fbAppli from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEWV0JTpiNCamY6BciAfQzNZfKSLvklAY",
  authDomain: "pvt-h21-olivier.firebaseapp.com",
  databaseURL: "https://pvt-h21-olivier-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-olivier",
  storageBucket: "pvt-h21-olivier.appspot.com",
  messagingSenderId: "705844162303",
  appId: "1:705844162303:web:f92863b5cc0e360a61a6ca",
};
//awdawdaw
if (!fbAppli.apps[0]) {
  fbAppli.initializeApp(firebaseConfig);
}

const bd = fbAppli.firestore();

// tabProduits.forEach(
//  (produit) => bd.collection("produits").add(produit)
// )

bd.collection("produits")
  .get()
  .then((reponse) => {
    reponse.forEach((produit) => {
      console.log(produit.data());
    });
  });

let observerProduits = bd
  .collection("produits")
  .onSnapshot((vue) =>
    vue.docChanges().forEach(changement => {
      if(changement.type === "added") {
        console.log(changement.doc.data());
      }
    })
  );

export default function ListeProduits({ etatPanier }) {
  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>
        {tabProduits.map((prd) => (
          <Produit
            etatPanier={etatPanier}
            key={prd.id}
            nom={prd.nom}
            prix={prd.prix}
            id={prd.id}
          />
        ))}
      </ul>
    </div>
  );
}
