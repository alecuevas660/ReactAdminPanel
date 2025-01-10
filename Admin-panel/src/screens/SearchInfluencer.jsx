import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const SearchInfluencers = () => {
  const [username, setUsername] = useState('');
  const [healthClaims, setHealthClaims] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    setErrorMessage('');
    try {
      const response = await fetch(`http://localhost:5000/api/influencer/${username}`);
      if (!response.ok) throw new Error('Error al obtener los tweets.');
      const data = await response.json();
      
      if (data.healthClaims.length === 0) {
        setErrorMessage('No se encontraron afirmaciones de salud en los tweets.');
      } else {
        setHealthClaims(data.healthClaims);
      }
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage(`Error al buscar los tweets: ${error.message}`);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Búsqueda de Influencer</h2>
        <div className="flex mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario de Twitter"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Buscar Tweets
          </button>
        </div>

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <h3 className="text-xl font-semibold mb-2">Afirmaciones de Salud Encontradas</h3>
        {healthClaims.length > 0 ? (
          <ul className="list-disc pl-5">
            {healthClaims.map((claim, index) => (
              <li key={index} className="mb-1">{claim}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No se encontraron afirmaciones de salud.</p>
        )}
      </div>
    </div>
  );
};

export default SearchInfluencers;

