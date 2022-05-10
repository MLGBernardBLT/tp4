import React from "react";
import Button from "./Button";



const Connexion = ({utilisateur}) => {
    const typeUtilisateur = utilisateur.typeUtilisateur;
    const onClickAjoutUtilisateur = () => {
    }

    const onClickAjoutDocument = () => {
    }

    return (
        <div>
            <h3>Bienvenue {utilisateur.prenom}, {utilisateur.nom}</h3>
            {typeUtilisateur === "admin" &&
                <Button color="blue" text="Ajout Utilisateur" onClick={onClickAjoutUtilisateur}/>
            }
            {
                typeUtilisateur === "admin" &&
                <Button color="blue" text="Ajout document" onClick={onClickAjoutDocument} />
            }
            {   typeUtilisateur === "emprunteur" &&
                <Button color="blue" text="Faire emprunt" onClick={onClickAjoutUtilisateur}/>
            }
            {
                typeUtilisateur === "emprunteur" &&
                <Button color="blue" text="Retourner emprunt" onClick={onClickAjoutDocument} />
            }


        </div>
    );
}

export default Connexion;