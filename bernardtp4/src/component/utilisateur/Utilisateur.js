import Button from "../Button";
import Connexion from "../Connexion"
import {useState} from "react";

const Utilisateur = ({utilisateur, onClick}) => {
    const [connexion, setConnexion] = useState(false);
    const onClick2 = () => {
        setConnexion(!connexion);
    }

    return (
        <tr>
            <td>{utilisateur.prenom}</td>
            <td>{utilisateur.nom}</td>
            <td>{utilisateur.typeUtilisateur}</td>
            <td><Button color='green' text='connexion' onClick={onClick2}/></td>
            <td>{connexion === true && <Connexion utilisateur={utilisateur} onClick={onClick}/>}</td>
        </tr>
    )
}

export default Utilisateur;