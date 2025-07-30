import React from 'react';
import './App.css';
import css from './assets/tools/css.png';
import html from './assets/tools/html.png';
import js from './assets/tools/js.png';
import geovanna from './assets/team/geovanna.jpg';
import joyce from './assets/team/joyce.jpg';
import pedro from './assets/team/pedro.jpg';
import rafaela from './assets/team/rafaela.jpg';
import bflash from './assets/bflash_logo.svg';

function App() {
  const team = [
    { name: 'Geovanna', role: 'UX/UI Designer', img: geovanna },
    { name: 'Joyce', role: 'Desenvolvedora Front-end', img: joyce },
    { name: 'Pedro', role: 'Desenvolvedor Back-end', img: pedro },
    { name: 'Rafaela', role: 'Desenvolvedora Front-end', img: rafaela },
  ];

  const tools = [
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: js },
    { name: 'Django', img: '/assets/tools/django.png' },
  ];

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <img src={bflash} alt="BFlash Logo" className="logo" />
          <h1>Plataforma para transcrever reuniões</h1>
          <p className="hero-subtitle">Transforme suas reuniões em conteúdo acionável com nossa solução de transcrição inteligente</p>
        </div>
      </header>

      <section className="section team-section">
        <div className="section-content">
          <h2 className="section-title">Nosso Time</h2>
          <p className="section-subtitle">Conheça os talentos profissionais por trás do BFlash</p>
          <div className="grid">
            {team.map((person) => (
              <div className="card" key={person.name}>
                <div className="avatar-wrapper">
                  <img src={person.img} alt={person.name} className="avatar" />
                </div>
                <h3 className="person-name">{person.name}</h3>
                <p className="role">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tools-section">
        <div className="section-content">
          <h2 className="section-title">Tecnologias Utilizadas</h2>
          <p className="section-subtitle">Ferramentas modernas para soluções inovadoras</p>
          <div className="grid">
            {tools.map((tool) => (
              <div className="card tool-card" key={tool.name}>
                <div className="tool-wrapper">
                  <img src={tool.img} alt={tool.name} className="tool-logo" />
                </div>
                <h3 className="tool-name">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mascot">
        <div className="section-content">
          <h2 className="section-content">Mascote</h2>
          <p className="section-subtitle">Conheça o mascote do BFlash</p>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-content">
          <h2>Pronto para começar?</h2>
          <p>Entenda como nosso projeto foi feito</p>
          <div className="cta-buttons">
            <a href="/docs/intro" className="button primary">Ver Documentação</a>
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