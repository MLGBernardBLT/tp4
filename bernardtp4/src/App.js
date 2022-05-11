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
import CreateEmprunt from "./component/form/CreateEmprunt";
import CreateRetour from "./component/form/CreateRetour";
import Documents from "./component/documents/Documents";


function App() {
    const [id, setId] = useState(3)
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
                nbrePage: 255
            },
            {
                id : 2,
                typeDocument: 'cd',
                titre: 'Pokemon movie',
                auteur: 'Moi',
                editeur: 'Moi aussi',
                anneePublication: '2002-02-20',
                genre: 'film'
            }
        ]
    )

    const addUtilisateur = (nom, prenom) => {
        let temp = id;
        setId(++temp);
        setUtilisateurs([...utilisateurs, {
            'id' :id,
            'typeUtilisateur' : 'emprunteur',
            'nom' : nom,
            'prenom' : prenom
        }]);
    }

    const getUtilisateur = (id) => {
        utilisateurs.map((utilisateur) =>
            utilisateur.id === id && setUtilisateurTrouver(utilisateur)
        )
    }

  return (
    <div>
        <header className="container">
            <h1>Bibliothèque JavaTown</h1>
        </header>

        <Router>
            <Routes>
                <Route path="/" element={<HomePage utilisateurs={utilisateurs} onClick={getUtilisateur}/>} />
                <Route path="/createEmprunteur" element={<CreateEmprunteur onAdd={addUtilisateur} />} />
                <Route path="/createLivre" element={<CreateLivre />} />
                <Route path="/createDVD" element={<CreateDVD />} />
                <Route path="/createCD" element={<CreateCD />} />
                <Route path="/createEmprunt" element={<CreateEmprunt />} />
                <Route path="/createRetour" element={<CreateRetour />} />
                <Route path="/getDocuments" element={<Documents documents={documents} utilisateur={utilisateurTrouver}/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </Router>
     </div>
  );
}

export default App;
