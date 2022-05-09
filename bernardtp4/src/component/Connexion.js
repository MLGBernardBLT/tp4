import React from "react";
import Button from "./Button";



const Connexion = ({utilisateur}) => {
    return (
        <div>
            <h3>Bienvenue {utilisateur.prenom}, {utilisateur.nom}</h3>
        </div>
    );
}

export default Connexion;