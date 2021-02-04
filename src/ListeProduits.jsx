import "./ListeProduits.css";
import Produit from "./Produit";
import tabProduits from "./data/produits.json";

export default function ListeProduits() {
  return (
    <>
      <h2>Produits disponibles</h2>
      <ul className="ListeProduits">
        {tabProduits.map((produit) => (
          <Produit nom={produit.nom} prix={produit.prix} id={produit.id} />
        ))}
      </ul>
    </>
  );
}
