import React, { useState, useEffect } from 'react';
import mensagens from './message.json'; // ajuste o caminho conforme a estrutura do seu projeto
import './chat.css';

const nomes = ['FURIA Bot', 'Pantera', 'Jogador1', 'Jogador2', 'Coach', 'Analista'];

function CustomChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < mensagens.length) {
        const randomName = nomes[Math.floor(Math.random() * nomes.length)]; // Seleciona um nome aleatório
        setMessages(prev => [...prev, { user: randomName, text: mensagens[index] }]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 4000); // a cada 4 segundos

    return () => clearInterval(interval);
  }, []); // Nenhuma dependência necessária

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { user: 'Você', text: input }]);
    setInput('');
  };

  return (
    <div className="custom-chat">
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i}><strong>{msg.user}:</strong> {msg.text}</div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default CustomChat;