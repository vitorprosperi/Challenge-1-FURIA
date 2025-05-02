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
          <a href="#quem-somos" className="nav-link">
            Quem Somos Nós
            <div className="hover-line"></div>
          </a>
          <a href="#produtos" className="nav-link">
            Produtos
            <div className="hover-line"></div>
          </a>
          <a href="#contato" className="nav-link">
            Contato
            <div className="hover-line"></div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;