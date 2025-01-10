import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importar los componentes de las páginas
import SearchInfluencer from './screens/SearchInfluencer';
import Home from './screens/Home';
import Navbar from './components/Navbar';
 // Asegúrate de que este componente exista

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <Navbar />
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchInfluencer />} />
            </Routes>
          </main>
¿        </div>
  );
}

export default App;
