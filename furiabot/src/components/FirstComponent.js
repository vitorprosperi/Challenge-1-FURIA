import panther from '../panther.png';
import './FirstComponent.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* Logo no canto superior esquerdo */}
        <div className="logo-container">
          <a href='#home'>
          <img src={panther} alt="Pantera" className="logo" />
          </a>
        </div>

        {/* Links centralizados */}
        <div className="nav-links">
          <a 
            href="https://github.com/vitorprosperi" 
            className="nav-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            AUTOR
            <div className="hover-line"></div>
          </a>
          <a 
            href="https://www.furia.gg/" 
            className="nav-link" 
            target="_blank" 
            rel="noopener noreferrer">
            PRODUTOS 
            <div className="hover-line"></div>
          </a>
          <a 
            href="https://www.linkedin.com/in/vitor-soares-prosperi-402a9b246/" 
            className="nav-link" 
            target="_blank" 
            rel="noopener noreferrer">
            CONTATO
            <div className="hover-line"></div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;