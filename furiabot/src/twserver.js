const axios = require('axios');

const clientId = 'jlt46fpgyalgae36llgsmd15x254fp';
const accessToken = 'bizqjynl8k64irumlfpnj4c0lbll0a'; 

async function checkLive() {
  try {
    const response = await axios.get('https://api.twitch.tv/helix/streams', {
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${accessToken}`
      },
      params: {
        user_login: 'furia'
      }
    });

    if (response.data.data.length > 0) {
      console.log('A FURIA está ao vivo agora!');
    } else {
      console.log('A FURIA não está ao vivo.');
    }
  } catch (err) {
    console.error('Erro ao consultar live:', err.response.data);
  }
}

checkLive();
