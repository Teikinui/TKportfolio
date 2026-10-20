import Menu from '../Menu/Menu';
import styles from './Parcours.module.css';

const experiences = [
  {
    period: 'Nov. 2024 — Août 2026',
    role: 'Technicien en sécurité opérationnelle',
    organization: 'Gouvernement de la Polynésie française',
    details: [
      'Déploiement d’une architecture Cloudflare Zero Trust pour sécuriser les accès distants.',
      'Maintien en condition opérationnelle et analyse des alertes EDR et SOC.',
      'Sensibilisation des utilisateurs à la sécurité via des campagnes de phishing.',
    ],
  },
  {
    period: 'Janv. — Fév. 2024',
    role: 'Technicien support N1 / N2',
    organization: 'Chang Sang Consulting',
    details: [
      'Résolution d’incidents utilisateurs et interventions de dépannage sur site.',
      'Préparation d’un serveur VMware avec NAS Synology et switch Cisco.',
    ],
  },
  {
    period: 'Mai — Juin 2023',
    role: 'Technicien administrateur réseau',
    organization: 'Électricité de Tahiti',
    details: [
      'Mise en place d’un serveur Rundeck sous Red Hat.',
      'Amélioration de scripts PowerShell pour leur intégration à Rundeck.',
    ],
  },
];

export default function Parcours() {
  return (
    <div className={styles.page}>
      <header><Menu /></header>
      <main className={styles.main}>
        <section aria-labelledby="parcours-title">
          <p className={styles.eyebrow}>Expériences & formation</p>
          <h1 id="parcours-title">Mon parcours</h1>
          <div className={styles.timeline}>
            {experiences.map((experience) => (
              <article className={styles.item} key={experience.role}>
                <p className={styles.period}>{experience.period}</p>
                <div>
                  <h2>{experience.role}</h2>
                  <p className={styles.organization}>{experience.organization}</p>
                  <ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <section className={styles.education} aria-labelledby="education-title">
            <p className={styles.eyebrow}>Formation</p>
            <h2 id="education-title">Apprendre et progresser</h2>
            <p><strong>EPITECH Paris</strong> · Master of Science Cloud · 2026 — en cours</p>
            <p><strong>BTS SIO, option SISR</strong> · Collège Lycée La Mennais, Tahiti · 2022 — 2024</p>
          </section>
        </section>
      </main>
    </div>
  );
}
