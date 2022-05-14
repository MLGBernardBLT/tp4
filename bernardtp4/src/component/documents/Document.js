import React, {useState} from "react";
import Button from "../Button";
import { useNavigate } from 'react-router-dom';

const Document = (props) => {
    const [document, setDocument] = useState(props.document)
    const [utilisateur, setUtilisateur] = useState(props.utilisateur)
    React.useEffect(() => {
        setUtilisateur(props.utilisateur)
        setDocument(props.document)
    }, [props.utilisateur, props.document])

    const navigate = useNavigate();
    const typeDocument = document.typeDocument;
    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(utilisateur)
        //  navigate("/emprunts", {from: "App"})
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
            <td>{document.exemplaires}</td>
            <td>
                {window.location.pathname === "/documents" && <Button color="blue" text="Emprunter le !"
                                                                  onClick={onSubmit} />
                }
            </td>
            <td>
                {window.location.pathname === "/emprunts" && <Button color="red" text="retourner le !"
                                                                    onClick={onSubmit} />
                }
            </td>
        </tr>
    )
}

export default Document;