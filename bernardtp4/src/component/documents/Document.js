import React from "react";
import Button from "../Button";
import { useNavigate } from 'react-router-dom';

const Document = ({document, utilisateur}) => {
    const navigate = useNavigate();
    const typeDocument = document.typeDocument;
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(utilisateur)
        navigate("/", {from: "App"})
    }
    return (
        <tr>
            <td>{document.titre}</td>
            <td>{document.auteur}</td>
            <td>{document.editeur}</td>
            <td>{document.anneePublication}</td>
            <td>{document.genre}</td>
            <td>{document.typeDocument}</td>
            <td>{typeDocument === "livre" && document.nbrePage}</td>
            <td><Button color="blue" text="Emprunter le !" onClick={onSubmit} /> </td>
        </tr>
    )
}

export default Document;