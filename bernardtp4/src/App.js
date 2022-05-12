import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from "./component/HomePage";
import PageNotFound from "./component/PageNotFound";
import 'bootstrap/dist/css/bootstrap.css'
import CreateEmprunteur from "./component/form/CreateEmprunteur";
import CreateLivre from "./component/form/CreateLivre";
import CreateDVD from "./component/form/CreateDVD";
import CreateCD from "./component/form/CreateCD";
import Documents from "./component/documents/Documents";


function App() {
    const [idUtilisateur, setIdUtilisateur] = useState(3)
    const [utilisateurs, setUtilisateurs] = useState(
        [
            {
                id: 1,
                typeUtilisateur: 'admin',
                nom: 'Thomas Laforest',
                prenom: 'Bernard'
            },
            {
              id: 2,
              typeUtilisateur: 'emprunteur',
              nom: 'Monty',
              prenom: 'Lou'
            }
        ]
    )

    const [utilisateurTrouver, setUtilisateurTrouver] = useState(
        {
            id: 0,
            typeUtilisateur: '',
            nom: '',
            prenom: ''
        }
    )

    const [documents, setDocuments] = useState(
        [
            {
                id : 1,
                typeDocument: 'livre',
                titre: 'Pokemon la nouvelle aventure',
                auteur: 'Moi',
                editeur: 'Moi aussi',
                anneePublication: '2002-01-20',
                genre: 'roman',
                nbrePage: 255,
                exemplaires: 2
            },
            {
                id : 2,
                typeDocument: 'cd',
                titre: 'Pokemon movie',
                auteur: 'Moi',
                editeur: 'Moi aussi',
                anneePublication: '2002-02-20',
                genre: 'film',
                exemplaires: 1
            }
        ]
    )

    const [idDocument, setIdDocument] = useState(3)

    const addUtilisateur = (nom, prenom) => {
        let temp = idUtilisateur;
        setIdUtilisateur(++temp);
        setUtilisateurs([...utilisateurs, {
            'id' :idUtilisateur,
            'typeUtilisateur' : 'emprunteur',
            'nom' : nom,
            'prenom' : prenom
        }]);
    }

    const addLivre = (titre, auteur, editeur, anneePublication, genre, nbrePage, exemplaires) => {
        let temp = idDocument;
        console.log(documents)
        setIdDocument(++temp);

        let counter = 0;
        console.log(exemplaires)
        documents.map((document) =>
            document.titre === titre && document.auteur === auteur &&
                document.anneePublication === anneePublication && document.genre === genre &&
                document.nbrePage === nbrePage
            ? document.exemplaires = Number(document.exemplaires) + Number(exemplaires)
            : counter++
        )
        if(counter === documents.length){
            setDocuments([...documents, {
                'id': idDocument,
                'typeDocument': 'livre',
                'titre': titre,
                'auteur': auteur,
                'editeur': editeur,
                'anneePublication': anneePublication,
                'genre': genre,
                'nbrePage': nbrePage,
                'exemplaires': exemplaires
            }])
        }
    }

    const addCD = (titre, auteur, editeur, anneePublication, genre, exemplaires) => {
        let temp = idDocument;
        console.log(documents)
        setIdDocument(++temp);

        let counter = 0;
        documents.map((document) =>
            document.titre === titre && document.auteur === auteur &&
            document.anneePublication === anneePublication && document.genre === genre &&
            document.typeDocument === 'cd'
                ? document.exemplaires = Number(document.exemplaires) + Number(exemplaires)
                : counter++
        )
        if(counter === documents.length){
            setDocuments([...documents, {
                'id': idDocument,
                'typeDocument': 'cd',
                'titre': titre,
                'auteur': auteur,
                'editeur': editeur,
                'anneePublication': anneePublication,
                'genre': genre,
                'exemplaires': exemplaires
            }])
        }
    }

    const addDVD = (titre, auteur, editeur, anneePublication, genre, exemplaires) => {
        let temp = idDocument;
        console.log(documents)
        setIdDocument(++temp);

        let counter = 0;
        documents.map((document) =>
            document.titre === titre && document.auteur === auteur &&
            document.anneePublication === anneePublication && document.genre === genre &&
            document.typeDocument === 'dvd'
                ? document.exemplaires = Number(document.exemplaires) + Number(exemplaires)
                : counter++
        )
        if(counter === documents.length){
            setDocuments([...documents, {
                'id': idDocument,
                'typeDocument': 'dvd',
                'titre': titre,
                'auteur': auteur,
                'editeur': editeur,
                'anneePublication': anneePublication,
                'genre': genre,
                'exemplaires': exemplaires
            }])
        }
    }

    const getUtilisateur = (id) => {
        utilisateurs.map((utilisateur) =>
            utilisateur.id === id && setUtilisateurTrouver(utilisateur)
        )
    }

  return (
    <div>
        <header className="container">
            <h1 className="text-center">Bibliothèque JavaTown</h1>
        </header>

        <Router>
            <Routes>
                <Route path="/" element={<HomePage utilisateurs={utilisateurs} onClick={getUtilisateur}/>} />
                <Route path="/createEmprunteur" element={<CreateEmprunteur onAdd={addUtilisateur} />} />
                <Route path="/createLivre" element={<CreateLivre onAdd={addLivre}/>} />
                <Route path="/createDVD" element={<CreateDVD onAdd={addDVD}/>} />
                <Route path="/createCD" element={<CreateCD onAdd={addCD}/>} />
                <Route path="/getDocuments" element={<Documents documents={documents} utilisateur={utilisateurTrouver}/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </Router>
     </div>
  );
}

export default App;
