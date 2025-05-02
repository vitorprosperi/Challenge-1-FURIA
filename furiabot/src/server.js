const express = require('express');
const cors = require('cors');
const { HLTV } = require('hltv');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/furia', async (req, res) => {
    try {
      const data = await HLTV.getTeam({ id: 8297 }); // ID da FURIA
  
      // Exibe as chaves principais do objeto retornado
      console.log('Chaves do objeto retornado:', Object.keys(data));
  
      // Exibe um resumo do objeto retornado
      console.log('Resumo dos dados da FURIA:', {
        name: data.name,
        rank: data.rank,
        players: data.players ? data.players.map((player) => player.name) : 'Nenhum jogador encontrado',
        news: data.news || 'Nenhuma notícia encontrada',
      });
  
      // Filtra as notícias que mencionam "FURIA" no título
      const recentNews = data.news
        ? data.news.filter((news) => news.name.toLowerCase().includes('furia')).slice(0, 10)
        : []; // Pega as 10 notícias mais recentes que mencionam "FURIA"
      console.log('Últimas notícias da FURIA:', recentNews);
  
      // Retorna os dados filtrados para o frontend
      res.json({
        name: data.name,
        rank: data.rank,
        players: data.players ? data.players.map((player) => player.name) : [],
        recentNews, // Inclui as notícias filtradas
      });
    } catch (error) {
      console.error('Erro ao buscar dados da FURIA:', error); // Log do erro, se ocorrer
      res.status(500).json({ error: 'Erro ao buscar dados da FURIA' });
    }
  });

// Nova rota para buscar as últimas partidas da FURIA
app.get('/api/furia/matches', async (req, res) => {
    try {
      const matches = await HLTV.getMatches(); // Obtém todas as partidas
      console.log('Todas as partidas recebidas:', matches); // Loga todas as partidas recebidas
  
      if (!matches || matches.length === 0) {
        console.log('Nenhuma partida foi retornada pela API do HLTV.');
        return res.json({ message: 'Nenhuma partida encontrada.' });
      }
  
      // Filtra apenas as partidas da FURIA
      const furiaMatches = matches.filter(
        (match) => match.team1?.name === 'FURIA' || match.team2?.name === 'FURIA'
      );
  
      if (furiaMatches.length === 0) {
        console.log('Nenhuma partida da FURIA encontrada.');
        return res.json({ message: 'Nenhuma partida da FURIA encontrada.' });
      }
  
      // Formata as partidas para exibir apenas informações relevantes
      const formattedMatches = furiaMatches.map((match) => ({
        opponent: match.team1?.name === 'FURIA' ? match.team2?.name : match.team1?.name,
        date: match.date ? new Date(match.date).toLocaleDateString('pt-BR') : 'Data não disponível',
        event: match.event?.name || 'Evento não disponível',
        result: match.result || 'Resultado não disponível',
      }));
  
      console.log('Partidas da FURIA formatadas:', formattedMatches);
  
      res.json(formattedMatches); // Retorna as partidas formatadas
    } catch (error) {
      console.error('Erro ao buscar partidas da FURIA:', error);
      res.status(500).json({ error: 'Erro ao buscar partidas da FURIA' });
    }
  });

app.listen(PORT, () => {
  console.log(`Servidor HLTV rodando em http://localhost:${PORT}`);
});