// src/Game.js
import React, { useState, useEffect } from 'react';
import './componetes/Game.css';

const Section = ({ index }) => {
  return (
    <section>
      <h2>Seção {index}</h2>
      <p>Esta é a seção {index}.</p>
    </section>
  );
}

const Game = () => {
  const [sections, setSections] = useState([1]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
        sections.length < 5
      ) {
        setSections(prevSections => [...prevSections, prevSections.length + 1]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <div className="Game">
      <header className="Game-header">
        <h1>Meu Jogo React</h1>
      </header>
      <main>
        {sections.map((sectionIndex) => (
          <Section key={sectionIndex} index={sectionIndex} />
        ))}
      </main>
    </div>
  );
}

export default Game;
