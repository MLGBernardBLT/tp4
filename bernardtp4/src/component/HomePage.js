import React from "react";
import Utilisateurs from "./utilisateur/Utilisateurs";


const HomePage = ({utilisateurs, onClick}) => (
    <div>
        <h1>Veuillez vous loggez avec un compte :</h1>
        <Utilisateurs utilisateurs={utilisateurs} onClick={onClick}/>
    </div>
)

export default HomePage;