import './Produit.css';

export default function Produit({nom, prix, id}) {
    return (
        <li>
          <img src={`images-produits/${id}.webp`} alt="" />
          <div className="info">
            <p className="nom">{nom}</p>
            <p className="prix">{prix}</p>
          </div>
          <button>Ajouter au panier</button>
        </li>
    )
}
