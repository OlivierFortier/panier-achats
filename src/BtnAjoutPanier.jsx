import { Badge } from "@material-ui/core";
import { useState } from "react";
import "./BtnAjoutPanier.scss";


export default function BtnAjoutPanier({ onClick, qte, texte }) {
  return (
    <Badge badgeContent={qte} color="primary">
      <button
        onClick={onClick}
        className={`BtnAjoutPanier ${qte > 0 && "rouge"}`}
      >
        {texte}
      </button>
    </Badge>
  );
}
