import React, {useState} from "react";
import {render} from "react-dom";
import {Link} from "react-router-dom";

const CreateEmprunteur = ({onAdd}) => {
    const [prenom, setPrenom] = useState('');
    const[nom, setNom] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onAdd(nom, prenom)

        setNom('')
        setPrenom('')
    }
    return (
        <div className="container">
            <Link to="/">Retour à l'accueil</Link>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="inputNom">nom</label>
                    <input type="text" className="form-control" id="inputNom" aria-describedby="nom"
                           placeholder="Entrer un nom" value={nom} onChange={(field) =>
                            setNom(field.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPrenom">prenom</label>
                    <input type="text" className="form-control" id="inputPrenom" aria-describedby="prenom"
                           placeholder="Entrer un prenom" value={prenom} onChange={(field) =>
                            setPrenom(field.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreateEmprunteur;