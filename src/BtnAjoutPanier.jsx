import { Badge } from "@material-ui/core";
import { useState } from "react";
import "./BtnAjoutPanier.scss";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function BtnAjoutPanier(props) {
  const [texte, setTexte] = useState("Ajouter au panier");
  const [qte, setQte] = useState(0);

  return (
    <Badge badgeContent={qte} color="primary">
      <button
        onClick={() => {
          props.onClick();
          setTexte(<AddShoppingCartIcon/>);
          setQte(qte + 1);
        }}
        className={`BtnAjoutPanier ${qte > 0 && 'rouge'}`}
      >
        {texte}
      </button>
    </Badge>
  );
}
