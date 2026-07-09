import { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn';

// Mets tes captures d'écran dans public/screenshots/ et adapte les noms ici.
// Tant qu'un fichier n'existe pas, un placeholder s'affiche automatiquement.
const SCREENSHOTS = [
  '/screenshots/Menu.png',
  '/screenshots/Choix.png',
  '/screenshots/Magasin.png',
  '/screenshots/Level.png',
];

// Remplace par le vrai lien de téléchargement (APK) quand il sera prêt.
const DOWNLOAD_URL = 'https://kcs2412.itch.io/profaned-tiles';

function ScreenshotSlot({ src, index }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="screenshot-slot">
      {!failed ? (
        <img src={src} alt={`Capture d'écran ${index + 1}`} onError={() => setFailed(true)} />
      ) : (
        <div className="screenshot-placeholder">
          Screenshot {index + 1}
          <br />
          à venir
        </div>
      )}
    </div>
  );
}

export default function ProjectFeatured() {
  const fadeRef = useFadeIn();

  const handleDownloadClick = (e) => {
    if (DOWNLOAD_URL === '#') {
      e.preventDefault();
      alert('Le lien de téléchargement sera disponible très bientôt !');
    }
  };

  return (
    <section id="jeu" className="fade-in" ref={fadeRef}>
      <p className="section-eyebrow">Projet principal</p>
      <h2 className="section-title">Un jeu fait avec passion</h2>

      <div className="project-featured">
        {/* Screenshots */}
        <div className="project-screenshots">
          <div className="screenshots-grid">
            {SCREENSHOTS.map((src, index) => (
              <ScreenshotSlot key={src} src={src} index={index} />
            ))}
          </div>
        </div>

        {/* Infos */}
        <div className="project-info">
          <div>
            <p className="project-tag">RPG Stratégie · Mobile · Android</p>
            <h3 className="project-name">
              Profaned
              <br />
              <span>Tiles</span>
            </h3>
            <p className="project-desc">
              Un RPG de stratégie au tour par tour.
              Affrontez des ennemis sur une grille maudite, collectez des reliques,
              maîtrisez trois capacités spéciales et progressez à travers les mondes.
            </p>

            <div className="project-stats">
              <div className="stat">
                <span className="stat-value">35+</span>
                <span className="stat-label">Niveaux</span>
              </div>
              <div className="stat">
                <span className="stat-value">3+</span>
                <span className="stat-label">Mondes</span>
              </div>
              <div className="stat">
                <span className="stat-value">60+</span>
                <span className="stat-label">Scripts C#</span>
              </div>
            </div>

            <div className="tech-pills">
              <span className="tech-pill">Unity</span>
              <span className="tech-pill">C#</span>
              <span className="tech-pill">URP</span>
              <span className="tech-pill">NavMesh</span>
              <span className="tech-pill">Android</span>
            </div>
          </div>

          <div className="project-actions">
            <a href={DOWNLOAD_URL} className="btn-primary" onClick={handleDownloadClick}>
              ⬇ Télécharger la Beta
            </a>
            <a href="#contact" className="btn-secondary">Donner un avis</a>
          </div>
        </div>
      </div>
    </section>
  );
}
