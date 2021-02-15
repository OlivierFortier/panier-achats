import './SommairePanier.scss';

export default function SommairePanier({panier , affichable}) {
    return (
        <div className={`SommairePanier ${!affichable && 'cacher'}`}>
            <span>Articles différents : </span>
            <span>Total # items : </span>
            <span>Sous-total : </span>
            <span>TPS : </span>
            <span>TVQ : </span>
            <span>Total : </span>
        </div>
    )
}
