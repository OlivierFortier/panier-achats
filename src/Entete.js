import './Entete.css';

export default function Entete() {
    return (
        <header className="Entete">
            <div className="logo">
                <ul className="navPrincipale">
                    <li>Produits</li>
                    <li>À propos de nous</li>
                    <li>Contactez-nous</li>
                </ul>
                <ul className="navUtilisateur">
                    <li>Panier d'achats</li>
                    <li>Mon compte</li>
                </ul>
            </div>
        </header>
    )
}
