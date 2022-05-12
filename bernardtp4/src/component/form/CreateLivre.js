import React, {useState} from "react";
import {Link} from "react-router-dom";

const CreateLivre = ({onAdd}) => {
    const [titre, setTitre] = useState('');
    const[auteur, setAuteur] = useState('');
    const[editeur, setEditeur] = useState('');
    const[anneePublication, setAnneePublication] = useState('');
    const[genre, setGenre] = useState('');
    const[nbrePage, setNbrePage] = useState(0);
    const[exemplaires, setExemplaires] = useState(0);
    const onSubmit = (e) => {
        e.preventDefault();

        onAdd(titre, auteur, editeur, anneePublication, genre, nbrePage, exemplaires)

        setTitre('');
        setAuteur('');
        setEditeur('');
        setAnneePublication('');
        setGenre('');
        setNbrePage(0);
        setExemplaires(0)
    }
    return (
        <div className="container">
            <Link to="/">Retour à l'accueil</Link>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="inputTitre">titre</label>
                    <input type="text" className="form-control" id="inputTitre" aria-describedby="titre"
                           placeholder="Entrer un titre" value={titre} onChange={(field) =>
                        setTitre(field.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAuteur">auteur</label>
                    <input type="text" className="form-control" id="inputAuteur" aria-describedby="auteur"
                           placeholder="Entrer un auteur" value={auteur} onChange={(field) =>
                        setAuteur(field.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEditeur">editeur</label>
                    <input type="text" className="form-control" id="inputEditeur" aria-describedby="editeur"
                           placeholder="Entrer un editeur" value={editeur} onChange={(field) =>
                        setEditeur(field.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAnneePublication">annee de publication</label>
                    <input type="text" className="form-control" id="inputAnneePublication"
                           aria-describedby="anneePublication"
                           placeholder="Entrer une annee de publication" value={anneePublication} onChange={(field) =>
                        setAnneePublication(field.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputGenre">genre</label>
                    <input type="text" className="form-control" id="inputGenre" aria-describedby="genre"
                           placeholder="Entrer un genre (ex : roman, livre, manga)" value={genre} onChange={(field) =>
                        setGenre(field.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputNbrePage">nombre de pages</label>
                    <input type="number" className="form-control" id="inputNbrePage" aria-describedby="nbrePage"
                           placeholder="Entrer le nombre de page" value={nbrePage} onChange={(field) =>
                                setNbrePage(field.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputExemplaires">exemplaires à ajouter</label>
                    <input type="number" className="form-control" id="inputExemplaires" aria-describedby="exemplaires"
                           placeholder="Entrer votre nombre d'exemplaire que vous voulez ajouté" value={exemplaires}
                           onChange={(field) =>
                               setExemplaires(field.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreateLivre;