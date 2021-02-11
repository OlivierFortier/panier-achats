import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

function Entete(props) {

  const [panier,setPanier] = props.etatPanier;

  const qteAccumuler = Object.values(panier).reduce((total,acc) => total + acc.qte, 0);

  return (
    <header className="Entete">
      <div className="logo">Magasin</div>
      <ul className="navPrincipale">
        <li>Produits</li>
        <li>À propos de nous</li>
        <li>Contactez-nous</li>
      </ul>
      <ul className="navUtilisateur">
        <li>
          <Badge badgeContent={qteAccumuler} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <div className="sommairePanier">
            lalala
          </div>
        </li>
        <li>Mon compte</li>
      </ul>
    </header>
  )
}

export default Entete;