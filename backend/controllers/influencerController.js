const { getTweetsByUsername } = require('../services/twitterService');
const Influencer = require('../models/influencerModel');

exports.fetchTweets = async (req, res) => {
  const { username } = req.params;
  console.log(`Buscando tweets para el influencer: ${username}`); // Log para verificar que el nombre de usuario es correcto
  try {
    const tweets = await getTweetsByUsername(username);
    console.log(`Tweets obtenidos: ${tweets.length} tweets encontrados`); // Log de los tweets obtenidos
    const influencer = new Influencer(username, tweets);
    res.json({ username: influencer.username, healthClaims: influencer.healthClaims });
  } catch (error) {
    console.error(`Error al obtener los tweets de @${username}: ${error.message}`); // Log del error
    res.status(500).json({ error: 'Error al obtener los tweets. Verifica el nombre de usuario.' });
  }
};
