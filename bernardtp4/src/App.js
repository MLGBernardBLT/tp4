import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from "./component/HomePage";
import PageNotFound from "./component/PageNotFound";

function App() {
  return (
    <div>
        <header>
            <h1>Bibliothèque JavaTown</h1>
        </header>

        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </Router>

     </div>
  );
}

export default App;
