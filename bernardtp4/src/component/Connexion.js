import React from "react";
import {Link} from "react-router-dom";



const Connexion = ({utilisateur}) => {
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
                <Link color="blue" to="/createEmprunt">Faire un emprunt</Link>
            }
            {
                typeUtilisateur === "emprunteur" &&
                <Link to="/createRetour">Retourner un livre</Link>
            }


        </div>
    );
}

export default Connexion;