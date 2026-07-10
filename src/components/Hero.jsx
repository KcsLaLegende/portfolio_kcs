export default function Hero() {
  return (
    <section className="hero">
      {/* Pentagramme décoratif */}
      <svg className="hero-penta" viewBox="0 0 300 300" fill="none">
        <polygon
          points="150,20 178,108 270,108 198,162 224,250 150,196 76,250 102,162 30,108 122,108"
          stroke="#c04820"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="150" cy="150" r="130" stroke="#c04820" strokeWidth="0.5" fill="none" />
        <circle cx="150" cy="150" r="110" stroke="#c04820" strokeWidth="0.3" fill="none" />
      </svg>

     

      <h1 className="hero-name">
        KAMANAN
        <span>CHRISTIAN S.</span>
      </h1>

      <p className="hero-title">Game Developer &amp; Full-Stack Developer</p>

      <div className="hero-divider">
        <div className="hero-divider-line"></div>
        <span className="hero-divider-rune">✦</span>
        <div className="hero-divider-line"></div>
      </div>

      <p className="hero-bio">
        Étudiant titulaire d'un BTS en Informatique de Développement et d'Application,
        je conçois des sites, des applications et des jeux vidéo.
        Le développement de jeux c'est ma passion — la raison pour laquelle j'ai choisi l'informatique.
      </p>

      <div className="hero-cta">
        <a href="#jeu" className="btn-primary">Voir mon jeu</a>
        <a href="#contact" className="btn-secondary">Me contacter</a>
      </div>

      <div className="scroll-indicator">Défiler</div>
    </section>
  );
}
