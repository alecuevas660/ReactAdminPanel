import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [healthClaims, setHealthClaims] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/influencer/${username}`);
      if (!response.ok) throw new Error('Error al obtener los tweets.');
      const data = await response.json();
      setHealthClaims(data.healthClaims); // Afirmaciones de salud
    } catch (error) {
      console.error('Error:', error.message);
      alert(`Error al buscar los tweets: ${error.message}`); // Mostrar el mensaje completo
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

      <h3>Afirmaciones de Salud Encontradas</h3>
      <ul>
        {healthClaims.map((claim, index) => (
          <li key={index}>{claim}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
