import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Accueil from './Accueil/Accueil';
import Competences from './Competences/Competences';
import Contact from './Contact/Contact';
import Parcours from './Parcours/Parcours';
import Projets from './Projets/Projets';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Navigate to="/" replace />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
