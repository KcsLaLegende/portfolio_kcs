import useFadeIn from '../hooks/useFadeIn';

const PROJECTS = [
  {
    icon: '',
    name: 'MenuProQr',
    desc: "Plateforme SaaS de gestion de restaurant pour la Côte d'Ivoire et l'Afrique de l'Ouest. Menu digital via QR Code, commandes en temps réel, gestion multi-établissements.",
    tech: ['Node.js', 'React', 'PostgreSQL'],
  },
  {
    icon: '',
    name: 'HORECI',
    desc: 'Pas de description pour le moment',
    tech: ['React', 'Supabase'],
  },
];

export default function Projects() {
  const fadeRef = useFadeIn();

  return (
    <section id="projets" className="fade-in" ref={fadeRef}>
      <p className="section-eyebrow">Autres projets</p>
      

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div className="project-card" key={project.name}>
            <span className="soon-badge">Bientôt</span>
            {/* <div className="card-icon">{project.icon}</div> */}
            <h3 className="card-name">{project.name}</h3>
            <p className="card-desc">{project.desc}</p>
            <div className="tech-pills" style={{ marginTop: 16 }}>
              {project.tech.map((t) => (
                <span className="tech-pill" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
