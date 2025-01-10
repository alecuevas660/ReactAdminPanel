import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';  // Asegúrate de importar el Router
import SearchInfluecers from './screens/SearchInfluencer';
import Home from './screens/Home'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* Asegúrate de envolver el componente con Router */}
      <SearchInfluecers /> 
      <Home/>
    </Router>
  </React.StrictMode>
);

// SearchInfluencers main por mientras, posteriormente el panel del admin lo será
