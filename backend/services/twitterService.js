const { TwitterApi } = require('twitter-api-v2');

// Inicializa el cliente de Twitter con las credenciales de la API
const client = new TwitterApi({
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

// Función para obtener el ID de usuario a partir del nombre de usuario
async function getUserIdByUsername(username) {
  try {
    const user = await client.v2.userByUsername(username);
    console.log(`ID de @${username}: ${user.data.id}`);
    return user.data.id; // Devuelve el ID de usuario
  } catch (error) {
    console.error(`Error al obtener el ID de @${username}: ${error.message}`);
    throw new Error(error.message); // Lanza el error
  }
}

// Función para obtener los tweets utilizando el ID de usuario
async function getTweetsByUserId(userId) {
  try {
    // Obtiene los tweets usando el ID del usuario
    const response = await client.v2.userTimeline(userId, { max_results: 5 });
    console.log(`Recibidos ${response.data.length} tweets.`);
    return response.data; // Devuelve los tweets
  } catch (error) {
    console.error(`Error al obtener los tweets del usuario con ID ${userId}: ${error.message}`);
    throw new Error(error.message); // Lanza el error
  }
}

// Función principal para obtener tweets a partir del nombre de usuario
async function getTweetsByUsername(username) {
  try {
    const userId = await getUserIdByUsername(username);
    const response = await getTweetsByUserId(userId);
    console.log('Respuesta de Twitter:', response); // Verifica la respuesta
    const tweets = response.data;
    console.log('Tweets obtenidos:', tweets); // Verifica los tweets
    return tweets;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('No se pudieron obtener los tweets.');
  }
}



module.exports = { getTweetsByUsername }; // Exporta la función principal
