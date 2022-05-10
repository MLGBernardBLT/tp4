import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from "./component/HomePage";
import PageNotFound from "./component/PageNotFound";
import Utilisateurs from "./component/Utilisateurs";
import 'bootstrap/dist/css/bootstrap.css'
import Connexion from "./component/Connexion";
import CreateEmprunteur from "./component/CreateEmprunteur";
import CreateLivre from "./component/CreateLivre";
import CreateDVD from "./component/CreateDVD";
import CreateCD from "./component/CreateCD";
import CreateEmprunt from "./component/CreateEmprunt";
import CreateRetour from "./component/CreateRetour";


function App() {
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
  return (
    <div>
        <header className="container">
            <h1>Bibliothèque JavaTown</h1>
        </header>

        <Router>
            <Routes>
                <Route path="/" element={<HomePage utilisateurs={utilisateurs}/>} />
                <Route path="/createEmprunteur" element={<CreateEmprunteur />} />
                <Route path="/createLivre" element={<CreateLivre />} />
                <Route path="/createDVD" element={<CreateDVD />} />
                <Route path="/createCD" element={<CreateCD />} />
                <Route path="/createEmprunt" element={<CreateEmprunt />} />
                <Route path="/createRetour" element={<CreateRetour />} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </Router>
     </div>
  );
}

export default App;
