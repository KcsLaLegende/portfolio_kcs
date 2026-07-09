import useFadeIn from '../hooks/useFadeIn';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
export default function Contact() {
  const fadeRef = useFadeIn();

  return (
    <div className="contact-section fade-in" id="contact" ref={fadeRef}>
      <p className="section-eyebrow">Me joindre</p>
      <h2 className="section-title" style={{ marginBottom: 16 }}>Travaillons ensemble</h2>
      <p style={{ color: 'var(--gris-clair)', fontSize: 15, lineHeight: 1.8 }}>
        Disponible pour des projets freelance, des collaborations ou simplement
        pour parler de jeux vidéo et de développement.
      </p>

      <div className="contact-links">
        <a href="mailto:christiankamanan@gmail.com" className="contact-link">
          <span className="contact-link-icon"><Mail /></span>
          christiankamanan@gmail.com
        </a>
        <a href="tel:+2250143901785" className="contact-link">
          <span className="contact-link-icon"><Phone /></span>
          WhatsApp : +225 01 43 90 17 85
        </a>
        <a href="tel:+2250594201048" className="contact-link">
          <span className="contact-link-icon"><Phone /></span>
          +225 05 94 20 10 48
        </a>
      </div>
    </div>
  );
}
