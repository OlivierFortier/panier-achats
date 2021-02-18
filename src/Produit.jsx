import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit({prix, id, etatPanier, nom}) {

  const [panier, setPanier] = etatPanier;

  function ajoutPanier() {
    if(panier[id]) {
      panier[id].qte++;
    }
    else {
     panier[id] = {prix: prix, qte: 1};
    }
    setPanier({...panier});
  }

  return(
    <li className="Produit">
      <img src={'images-produits/' + id + '.webp'} alt=""/>
      <div className="info">
        <p className="nom">{nom}</p>
        <p className="prix">{prix}</p>
      </div>
      <BtnAjoutPanier onClick={ajoutPanier} />
    </li>
  );
}