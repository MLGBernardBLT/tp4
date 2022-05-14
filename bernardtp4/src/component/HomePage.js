import React, {useState} from "react";
import Utilisateurs from "./utilisateur/Utilisateurs";


const HomePage = (props) => {
    const [utilisateurs, setUtilisateurs] = useState(props.utilisateurs)

    React.useEffect(() => {
        setUtilisateurs(props.utilisateurs)
    }, [])
    return (
        <div>
            <h1>Veuillez vous loggez avec un compte :</h1>
            <Utilisateurs utilisateurs={utilisateurs} onClick={props.onClick}/>
        </div>
    )

}

export default HomePage;