import React, {useState} from "react";
import Utilisateur from './Utilisateur'

const Utilisateurs = (props) => {
    const [utilisateurs, setUtilisateurs] = useState(props.utilisateurs)

    React.useEffect(() => {
        setUtilisateurs(props.utilisateurs)
    }, [])
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
                            </tr>
                            </thead>
                            <tbody>
                                {utilisateurs.map((utilisateur) => (
                                    <Utilisateur key={utilisateur.id} utilisateur={utilisateur} onClick={props.onClick}/>
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