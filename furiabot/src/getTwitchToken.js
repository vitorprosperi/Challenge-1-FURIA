const axios = require('axios');

const clientId = 'SUA_CLIENT_ID';
const clientSecret = 'SEU_CLIENT_SECRET';

async function getToken() {
  try {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
      params: {
        client_id: 'jlt46fpgyalgae36llgsmd15x254fp',
        client_secret: 'z6fc5zmj8o345d256t8hph8k6aqebj',
        grant_type: 'client_credentials'
      }
    });

    console.log('Access Token:', response.data.access_token);
  } catch (err) {
    console.error('Erro ao obter token:', err.response.data);
  }
}

getToken();
