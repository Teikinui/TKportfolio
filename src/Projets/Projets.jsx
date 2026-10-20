import Menu from '../Menu/Menu';
import styles from './Projets.module.css';

const projects = [
  {
    number: '01',
    title: 'Infrastructure personnelle conteneurisée',
    type: 'Cloud privé · Docker · Cloudflare Zero Trust',
    description: 'Déploiement de services auto-hébergés dans des conteneurs Docker, avec accès distant protégé par Zero Trust, authentification centralisée et supervision.',
  },
  {
    number: '02',
    title: 'NAS maison & accès distant',
    type: 'Auto-hébergement · Docker · WireGuard',
    description: 'Construction d’un NAS personnel et mise en place d’un VPN WireGuard conteneurisé pour accéder aux services à distance.',
  },
];

export default function Projets() {
  return (
    <div className={styles.page}>
      <header className={styles.header}><Menu /></header>
      <main className={styles.main}>
        <section aria-labelledby="projects-title">
          <p className={styles.eyebrow}>Expérimenter & construire</p>
          <h1 id="projects-title">Projets personnels</h1>
          <p className={styles.intro}>Quelques projets autour de l’infrastructure, de l’auto-hébergement et de l’accès sécurisé.</p>
          <div className={styles.projects}>
            {projects.map((project) => (
              <article className={styles.project} key={project.number}>
                <span className={styles.number}>{project.number}</span>
                <div>
                  <p className={styles.type}>{project.type}</p>
                  <h2>{project.title}</h2>
                  <p className={styles.description}>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
