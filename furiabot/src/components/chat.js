import React, { useState, useEffect } from 'react';
import mensagens from './message.json'; // ajuste o caminho conforme a estrutura do seu projeto
import './chat.css';

const nomes = ['FURIOSO', 'Pantera', 'Viton', 'Vprosperi', 'Admir', 'Adir', 'Gui', 'Gi', 'Rodrigo', 'Mari', 'Squick', 'Fallen', 'Yuurih', 'Kscerato', 'Yekindar', 'Molodoy'];

function CustomChat() {
  const [messages, setMessages] = useState([]); // Armazena todas as mensagens exibidas no chat principal
  const [input, setInput] = useState(''); // Armazena o texto digitado no campo de entrada do chat principal
  const [selectedUser, setSelectedUser] = useState(null); // Armazena o nome do usuário selecionado
  const [showIndividualChat, setShowIndividualChat] = useState(false); // Controla a exibição do chat individual
  const [individualMessages, setIndividualMessages] = useState([]); // Armazena as mensagens do chat individual
  const [individualInput, setIndividualInput] = useState(''); // Armazena o texto digitado no campo de entrada do chat individual

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < mensagens.length) {
        const randomName = nomes[Math.floor(Math.random() * nomes.length)]; // Seleciona um nome aleatório
        setMessages((prev) => [...prev, { user: randomName, text: mensagens[index] }]); // Adiciona a mensagem do JSON
        index++;
      } else {
        clearInterval(interval); // Para o intervalo quando todas as mensagens forem exibidas
      }
    }, 4000); // Adiciona uma mensagem a cada 4 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []); // Nenhuma dependência necessária

  const handleSend = () => {
    if (!input.trim()) return; // Não envia mensagens vazias
    setMessages((prev) => [...prev, { user: 'Você', text: input }]); // Adiciona a mensagem do usuário ao chat principal
    setInput(''); // Limpa o campo de entrada
  };

  const handleIndividualSend = () => {
    if (!individualInput.trim()) return; // Não envia mensagens vazias
    setIndividualMessages((prev) => [...prev, { user: 'Você', text: individualInput }]); // Adiciona a mensagem ao chat individual
    setIndividualInput(''); // Limpa o campo de entrada do chat individual
  };

  const openIndividualChat = (user) => {
    setSelectedUser(user); // Define o usuário selecionado
    setShowIndividualChat(true); // Exibe o chat individual
    setIndividualMessages([]); // Reseta as mensagens do chat individual
  };

  const closeIndividualChat = () => {
    setShowIndividualChat(false); // Fecha o chat individual
    setSelectedUser(null); // Limpa o usuário selecionado
  };

  return (
    <div className="custom-chat">
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i}>
            <strong
              className="clickable-name"
              onClick={() => openIndividualChat(msg.user)} // Torna o nome clicável
            >
              {msg.user}:
            </strong>{' '}
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Atualiza o estado com o texto digitado
          placeholder="Digite sua mensagem..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>

      {/* Chat individual */}
      {showIndividualChat && (
        <div className="individual-chat-modal">
          <div className="individual-chat-header">
            <h3>Chat com {selectedUser}</h3>
            <button onClick={closeIndividualChat}>Fechar</button>
          </div>
          <div className="individual-chat-body">
            {individualMessages.map((msg, i) => (
              <div key={i}>
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="individual-chat-input">
            <input
              type="text"
              value={individualInput}
              onChange={(e) => setIndividualInput(e.target.value)} // Atualiza o estado com o texto digitado
              placeholder={`Digite sua mensagem para ${selectedUser}...`}
            />
            <button onClick={handleIndividualSend}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomChat;