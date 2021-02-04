import './PiedDePage.scss';

export default function PiedDePage() {
    const annee = new Date().getFullYear();
    return (
        <footer>
           &copy;{annee} - TIM - Tous droits réservés.
        </footer>
    )
}
