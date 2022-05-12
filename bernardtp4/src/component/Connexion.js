import React from "react";
import {Link} from "react-router-dom";



const Connexion = ({utilisateur, onClick}) => {
    const typeUtilisateur = utilisateur.typeUtilisateur;

    return (
        <div>
            <h3>Bienvenue {utilisateur.prenom}, {utilisateur.nom}</h3>
            {
                typeUtilisateur === "admin" &&
                <Link color="blue" to="/createEmprunteur">Ajout utilisateur</Link>
            }
            {
                typeUtilisateur === "admin" &&
                <Link color="blue" to="/createLivre">Ajout Livre</Link>
            }
            {
                typeUtilisateur === "admin" &&
                <Link color="blue" to="/createCD">Ajout CD</Link>
            }
            {
                typeUtilisateur === "admin" &&
                <Link color="blue" to="/createDVD">Ajout DVD</Link>
            }
            {
                typeUtilisateur === "emprunteur" &&
                <Link to="/getDocuments" onClick={() => onClick(utilisateur.id)}>Voir les documents disponibles</Link>
            }
            {
                typeUtilisateur === "emprunteur" &&
                <Link color="blue" to="/emprunts">Voir vos emprunts</Link>
            }
        </div>
    );
}

export default Connexion;