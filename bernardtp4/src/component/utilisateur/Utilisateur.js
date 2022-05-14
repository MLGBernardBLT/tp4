import Button from "../Button";
import Connexion from "../Connexion"
import React, {useState} from "react";

const Utilisateur = (props) => {
    const [connexion, setConnexion] = useState(false);
    const [utilisateur, setUtilisateur] = useState(props.utilisateur)

    React.useEffect(() => {
        setUtilisateur(props.utilisateur)
    }, [props.utilisateur])
    const onClick2 = () => {
        setConnexion(!connexion);
    }

    return (
        <tr>
            <td>{utilisateur.prenom}</td>
            <td>{utilisateur.nom}</td>
            <td>{utilisateur.typeUtilisateur}</td>
            <td><Button color='green' text='connexion' onClick={onClick2}/></td>
            <td>{connexion === true && <Connexion utilisateur={utilisateur} onClick={props.onClick}/>}</td>
        </tr>
    )
}

export default Utilisateur;