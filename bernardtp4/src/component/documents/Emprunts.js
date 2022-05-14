import React, {useState} from "react";

const Emprunts = (props) => {
    const[utilisateur, setUtilisateur] = useState(props.utilisateur)
    const [emprunts, setEmprunts] = useState(
        [
            {
                id: 1,
                idDocument: 1,
                dateEmprunt: "2022-05-12",
                dateRetourMax: "2022-06-02",
                emprunteurId: 2
            }
        ]
    )
    return (
        <div className="container">
            <p>{utilisateur.prenom} {utilisateur.nom}</p>
        </div>
    )
}

export default Emprunts