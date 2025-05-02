import './App.css';
import FirstComponent from './components/FirstComponent';
import Chatfur from './components/chatfur';
import {useState} from 'react';
function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const abrirChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      <FirstComponent />
      {/* Botão para abrir/fechar o chat */}
      <button className="chat-toggle-button" onClick={abrirChat}>
        💬
      </button>
      {/* Exibe o Chatfur apenas se isChatOpen for true */}
      {isChatOpen && <Chatfur />}
    </div>
  );
}

export default App;
