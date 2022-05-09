import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from "./component/HomePage";
import PageNotFound from "./component/PageNotFound";
import Utilisateurs from "./component/Utilisateurs";
import 'bootstrap/dist/css/bootstrap.css'
import Connexion from "./component/Connexion";


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
                <Route path="/connexion" element={<Connexion />} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </Router>
     </div>
  );
}

export default App;
