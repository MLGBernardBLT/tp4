import React, {useState} from "react";
import Document from './Document'

const Documents = ({documents, utilisateur}) => {
    console.log(utilisateur)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>{utilisateur.prenom} {utilisateur.nom}</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Titre</th>
                                <th scope="col">Auteur</th>
                                <th scope="col">Editeur</th>
                                <th scope="col">Annee publication</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Type de documents</th>
                                <th scope="col">Nombre de pages</th>
                                <th scope="col">Nombre d'exemplaires</th>
                            </tr>
                            </thead>
                            <tbody>
                            {documents.map((document) => (
                                <Document key={document.id} document={document} utilisateur={utilisateur}/>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Documents;