/**
 * Clase modelo para representar a un Influencer.
 * Contiene datos básicos y afirmaciones de salud.
 */
class Influencer {
    constructor(username, tweets = []) {
      this.username = username;
      
      // Asegurarnos de que tweets es un array
      if (!Array.isArray(tweets)) {
        console.error('Error: Se esperaba un array de tweets.');
        this.tweets = [];
      } else {
        this.tweets = tweets;
      }
  
      this.healthClaims = this.extractHealthClaims(); // Procesa las afirmaciones de salud
    }
  
    /**
     * Simula la extracción de afirmaciones de salud desde los tweets.
     * En producción, se recomendaría usar una librería de NLP o lógica avanzada.
     * @returns {Array} - Lista de afirmaciones únicas.
     */
    extractHealthClaims() {
      const keywords = ['salud', 'nutrición', 'ejercicio', 'vitaminas']; // Palabras clave ejemplo
      
      // Filtramos y extraemos los tweets que contienen las palabras clave
      const claims = this.tweets
        .map((tweet) => {
          // Verificamos que cada tweet tenga la propiedad text
          if (tweet && tweet.text && typeof tweet.text === 'string') {
            return keywords.some((word) => tweet.text.includes(word)) ? tweet.text : null;
          }
          return null;
        })
        .filter(Boolean); // Filtrar valores no nulos
      
      return [...new Set(claims)]; // Eliminar duplicados
    }
  }
  
  module.exports = Influencer;
  