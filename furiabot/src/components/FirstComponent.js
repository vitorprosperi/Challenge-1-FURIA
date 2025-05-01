import panther from '../panther.png';
import './FirstComponent.css';

function App() {
  return (
    <div
      className="App"
    >
      <header
        style={{
          
        }}
      >
        {/* Logo no canto superior esquerdo */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '20px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={panther}
            alt="Pantera"
            style={{
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Links centralizados */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <a
            href="#quem-somos"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              position: 'relative',
            }}
            className="nav-link"
          >
            Quem Somos Nós
            <div
              className="hover-line"
              style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                width: '0%',
                height: '2px',
                backgroundColor: 'white',
                transition: 'width 0.3s ease',
              }}
            ></div>
          </a>
          <a
            href="#produtos"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              position: 'relative',
            }}
            className="nav-link"
          >
            Produtos
            <div
              className="hover-line"
              style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                width: '0%',
                height: '2px',
                backgroundColor: 'white',
                transition: 'width 0.3s ease',
              }}
            ></div>
          </a>
          <a
            href="#contato"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              position: 'relative',
            }}
            className="nav-link"
          >
            Contato
            <div
              className="hover-line"
              style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                width: '0%',
                height: '2px',
                backgroundColor: 'white',
                transition: 'width 0.3s ease',
              }}
            ></div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;