import React from 'react';
import './App.css';

// tools
import css from '../public/tools/css.png';
import html from '../public/tools/html.png';
import js from '../public/tools/js.png';
import django from '../public/tools/django.png';

// team
import geovanna from '../public/team/geovanna.jpg';
import joyce from '../public/team/joyce.jpg';
import gabriel from '../public/team/gabriel.jpeg';
import pedro from '../public/team/pedro.jpg';
import raphaela from '../public/team/raphaela.jpg';

// elements
import bflash from '../public/bflash_logo.svg';
import pitch from '../public/videos/pitch.mp4';
import mascote from '../public/mascot/mascot.png'; 

function App() {
  const team = [
    { name: 'Geovanna', role: 'UX/UI Designer', img: geovanna },
    { name: 'Joyce', role: 'Desenvolvedora Front-end', img: joyce },
    { name: 'Gabriel', role: 'Desenvolvedor Back-end', img: gabriel },
    { name: 'Pedro', role: 'Desenvolvedor Back-end', img: pedro },
    { name: 'Raphaela', role: 'Desenvolvedora Front-end', img: raphaela },
  ];

  const tools = [
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: js },
    { name: 'Django', img: django },
  ];

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <img src={bflash} alt="BFlash Logo" className="logo" />
          <h1>Plataforma para transcrever reuniões</h1>
          <p className="hero-subtitle">Chega de informações perdidas. Com a nossa plataforma de transcrição automática, você converte reuniões em textos organizados — tudo em poucos minutos.</p>
        </div>
      </header>

      <section className="video-pitch-section">
        <div className="section-content">
          <div>
            <h2 className="section-title">Conheça o BFlash</h2>
            <p className="section-subtitle">Assista ao nosso vídeo pitch e descubra como podemos transformar suas reuniões</p>
          </div>
         
          <div className="video-container">
            <video controls className="pitch-video">
              <source src={pitch} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </section>

      <section className="section team-section">
          <div className='content-team'>
            <h2 className="section-title team-title">Nosso Time</h2>
            <p className="section-subtitle">Conheça os talentos por trás do BFlash</p>
          </div>
         
          <div className="container-team">
            {team.map((person) => (
              <div className="team-card" key={person.name}>
                <div className="avatar-wrapper">
                  <img src={person.img} alt={person.name} className="avatar" />
                </div>
                
                <div className='info-avatar'>
                  <h3 className="person-name">{person.name}</h3>
                  <p className="role">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
      
      </section>

      <section className="section tools-section">
          <div className='content-tools'>
            <h2 className="section-title">Tecnologias Utilizadas</h2>
            <p className="section-subtitle">Ferramentas modernas que construímos nossa aplicação</p>
          </div>
          <div className="container-tool">
            {tools.map((tool) => (
              <div className="tool-card" key={tool.name}>
                <div className="tool-wrapper">
                  <img src={tool.img} alt={tool.name} className="tool-logo" />
                </div>
                <h3 className="tool-name">{tool.name}</h3>
              </div>
            ))}
          </div>
      </section>

      <section className="section mascote-section">

          <div className='content-tools'>
            <h2 className="section-title">Nosso mascote</h2>
            <p className="section-subtitle">Conheça o rostinho simpático que representa nosso projeto</p>
          </div>

          <div className="mascote-container">
            <img src={mascote} alt="Mascote BFlash" className="mascote-image" />
            <div className="mascote-description">
              <h3>Ray</h3>
              <p>Nosso mascote representa a velocidade e eficiência com que nossa plataforma de transcrição.</p>
            </div>
          </div>
      </section>

      <section className="section cta-section">
        <div className="cta-content">
          <h2>Entenda como nosso projeto foi feito</h2>
          <div className="cta-buttons">
            <a
              href="/documentation/Bflash.pdf"
              className="button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Documentação
            </a>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="footer-content">
          <img src={bflash} alt="BFlash Logo" className="footer-logo" />
          <p className="copyright">© 2025 BFlash. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;