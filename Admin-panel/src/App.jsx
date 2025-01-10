import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importar los componentes de las páginas
import Dashboard from './screens/Dashboard';  // Asegúrate de que el componente exista
import SearchInfluencer from './screens/SearchInfluencer';
import Home from './screens/Home';
import Navbar from './components/Navbar';

import NotFound from './screens/NotFound';  // Asegúrate de que el componente exista
import Services from './screens/Services';  // Asegúrate de que este componente exista
import Contact from './screens/Contact';  // Asegúrate de que este componente exista

const App = () => {
  return (
    <Router> {/* Este es el contenedor que debe envolver toda la app */}
      {/* Navbar debería ir fuera de Routes para que se muestre en todas las rutas */}

      <Routes>
        <Route path="/" element={<SearchInfluencer />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/search" element={<Services />} /> {/* Crear un componente Services */}
        <Route path="/contact" element={<Contact />} />   {/* Crear un componente Contact */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
