import React, {useState} from "react";
import Utilisateur from './Utilisateur'
import Button from "../Button";
import Connexion from "../Connexion";

const Utilisateurs = ({utilisateurs}) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Prenom</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Type d'utilisateur</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                                {utilisateurs.map((utilisateur) => (
                                    <Utilisateur key={utilisateur.id} utilisateur={utilisateur}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Utilisateurs;