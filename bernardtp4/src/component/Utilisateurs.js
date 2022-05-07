import React from "react";
import Utilisateur from './Utilisateur'

const Utilisateurs = ({utilisateurs}) => {
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Prenom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Type d'utilisateur</th>
                    </tr>
                    </thead>
                    <tbody>
            {utilisateurs.map((utilisateur) => (
                <Utilisateur key={utilisateur.id} utilisateur={utilisateur}/>
            ))}
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default Utilisateurs;