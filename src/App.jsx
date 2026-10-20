import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Accueil from './Accueil/Accueil';
import Competences from './Competences/Competences';
import Contact from './Contact/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/accueil" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
