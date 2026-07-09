import useFadeIn from '../hooks/useFadeIn';

const SKILL_GROUPS = [
  {
    title: 'Jeu vidéo',
    items: ['Unity (C#)', 'Game Design', 'NavMesh & IA ennemie', 'URP / Shaders', 'Animation 3D', 'Build Android / iOS'],
  },
  {
    title: 'Web & Mobile',
    items: ['React / Vite', 'Node.js / Express', 'PostgreSQL / Prisma', 'Socket.io', 'REST API'],
  },
  {
    title: 'Outils & Divers',
    items: ['Git / GitHub', 'Supabase', 'Figma'],
  },
];

export default function Skills() {
  const fadeRef = useFadeIn();

  return (
    <section id="competences" className="fade-in" ref={fadeRef}>
      <p className="section-eyebrow">Maîtrise technique</p>
      <h2 className="section-title">Compétences</h2>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-group" key={group.title}>
            <p className="skill-group-title">{group.title}</p>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
