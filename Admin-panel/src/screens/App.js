import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [healthClaims, setHealthClaims] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar los mensajes de error

  const handleSearch = async () => {
    setErrorMessage(''); // Limpiar mensaje de error anterior antes de buscar
    try {
      const response = await fetch(`http://localhost:5000/api/influencer/${username}`);
      if (!response.ok) throw new Error('Error al obtener los tweets.');
      const data = await response.json();
      
      if (data.healthClaims.length === 0) {
        setErrorMessage('No se encontraron afirmaciones de salud en los tweets.');
      } else {
        setHealthClaims(data.healthClaims); // Afirmaciones de salud
      }
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage(`Error al buscar los tweets: ${error.message}`); // Mostrar el error si ocurre
    }
  };

  return (
    <div>
      <h2>Búsqueda de Influencer</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nombre de usuario de Twitter"
      />
      <button onClick={handleSearch}>Buscar Tweets</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Mostrar mensaje de error si existe */}

      <h3>Afirmaciones de Salud Encontradas</h3>
      {healthClaims.length > 0 ? (
        <ul>
          {healthClaims.map((claim, index) => (
            <li key={index}>{claim}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron afirmaciones de salud.</p> // Mensaje si no hay afirmaciones
      )}
    </div>
  );
};

export default App;
