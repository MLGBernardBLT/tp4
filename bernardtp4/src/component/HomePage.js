import React from "react";
import Utilisateurs from "./utilisateur/Utilisateurs";


const HomePage = ({utilisateurs}) => (
    <div>
        <h1>Veuillez vous loggez avec un compte :</h1>
        <Utilisateurs utilisateurs={utilisateurs}/>
    </div>
)

export default HomePage;