import { useState, useEffect } from 'react';
import './chatfur.css';

function Chatfur() {
  const [loading, setLoading] = useState(true);
  const [teamData, setTeamData] = useState(null);
  const [matches, setMatches] = useState([]); // Estado para armazenar as partidas
  const [showNews, setShowNews] = useState(false); // Estado para controlar a exibição das notícias
  const [showMatches, setShowMatches] = useState(false); // Estado para controlar a exibição das partidas

  useEffect(() => {
    // Faz a requisição para a API
    fetch('http://localhost:3001/api/furia')
      .then((response) => response.json())
      .then((data) => {
        setTeamData(data); // Armazena os dados no estado
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
        setLoading(false);
      });
  }, []);

  const fetchMatches = () => {
    if (showMatches) {
      // Se as partidas já estão sendo exibidas, apenas oculta
      setShowMatches(false);
      return;
    }

    setLoading(true);
    fetch('http://localhost:3001/api/furia/matches')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMatches(data); // Armazena as partidas no estado
        } else {
          console.error('Resposta inesperada da API:', data);
          setMatches([]); // Define como um array vazio se a resposta não for um array
        }
        setShowMatches(true); // Exibe as partidas
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar partidas:', error);
        setLoading(false);
      });
  };

  const handleShowNews = () => {
    setShowNews(!showNews); // Alterna o estado de exibição das notícias
  };

  return (
    <div className="chatfur-container">
      <div className="chatfur-header">Chat FURIOSO</div>
      <div className="chatfur-body">
        {loading ? (
          <p>Carregando...</p>
        ) : teamData ? (
          <div>
            <button className="chat-option-button" onClick={handleShowNews}>
              {showNews ? 'Ocultar Notícias' : 'Últimas Notícias'}
            </button>
            {showNews && (
              <div>
                <h4>Últimas Notícias:</h4>
                <ul className="chatfur-news-list">
                  {teamData.recentNews.map((news, index) => (
                    <li key={index} className="chatfur-news-item">
                     <a
                      href={`https://www.hltv.org${news.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {news.name}
                    </a>
                </li>
            ))}
              </ul>
              </div>
            )}
            <button className="chat-option-button" onClick={fetchMatches}>
              {showMatches ? 'Ocultar Partidas' : 'Partidas Recentes'}
            </button>
            {showMatches && (
              <div>
                <h4>Últimas Partidas:</h4>
                {Array.isArray(matches) && matches.length > 0 ? (
                  <ul>
                    {matches.map((match, index) => (
                      <li key={index}>
                        <p>Adversário: {match.opponent}</p>
                        <p>Data: {match.date}</p>
                        <p>Evento: {match.event}</p>
                        <p>Resultado: {match.result}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nenhuma partida encontrada.</p>
                )}
              </div>
            )}
          </div>
        ) : (
          <p>Erro ao carregar os dados.</p>
        )}
      </div>
    </div>
  );
}

export default Chatfur;