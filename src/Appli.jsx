import './Appli.scss';
import Entete from './Entete.jsx';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';
import useLocalStorageState from './hooks/useLocalStorageState';

export default function Appli() {
  

  const etatPanier = useLocalStorageState({} , "panier");

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
