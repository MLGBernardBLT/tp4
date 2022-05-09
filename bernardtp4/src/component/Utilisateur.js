import Button from "./Button";
import Connexion from "./Connexion"
import {useState} from "react";

const Utilisateur = ({utilisateur}) => {
    const [connexion, setConnexion] = useState(false);
    const onClick = () => {
        setConnexion(!connexion);
    }
    return (
        <tr>
            <td>{utilisateur.prenom}</td>
            <td>{utilisateur.nom}</td>
            <td>{utilisateur.typeUtilisateur}</td>
            <td><Button color='green' text='connexion' onClick={onClick}/></td>
            <td>{connexion === true && <Connexion utilisateur={utilisateur}/>}</td>
        </tr>
    )
}

export default Utilisateur;