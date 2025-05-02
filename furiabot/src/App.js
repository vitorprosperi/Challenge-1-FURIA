import './App.css';
import FirstComponent from './components/FirstComponent';
import Chatfur from './components/chatfur';
import { useState } from 'react';
import TwitchPlayer from './components/twvideo';
import CustomChat from './components/chat';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const abrirChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      <FirstComponent />

      {/* Player da Twitch + Chat lado a lado */}
      <div className="twitch-chat-wrapper">
        <TwitchPlayer />
        <CustomChat />
      </div>

      {/* Botão de abrir outro chat (Chatfur) */}
      <button className="chat-toggle-button" onClick={abrirChat}>
        💬
      </button>

      {isChatOpen && <Chatfur />}
    </div>
  );
}

export default App;