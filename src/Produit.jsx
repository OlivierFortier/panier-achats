import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props) {

  const [panier, setPanier] = props.etatPanier;

  const {prix, id} = props;

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
      <img src={'images-produits/' + props.id + '.webp'} alt=""/>
      <div className="info">
        <p className="nom">{props.nom}</p>
        <p className="prix">{props.prix}</p>
      </div>
      <BtnAjoutPanier onClick={ajoutPanier} />
    </li>
  );
}