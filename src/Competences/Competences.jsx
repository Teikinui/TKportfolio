import Card from '../components/Card/Card';
import Menu from '../Menu/Menu';
import styles from './Competences.module.css';

const skills = [
  { title: 'Cloud & sécurité', text: 'Cloudflare Zero Trust, Microsoft Entra ID, Intune, Fortinet, OPNsense.' },
  { title: 'Systèmes & virtualisation', text: 'Administration systèmes et réseaux, Hyper-V, VMware, Proxmox.' },
  { title: 'Automatisation', text: 'PowerShell, Bash, Python, Rundeck et n8n.' },
  { title: 'Conteneurisation', text: 'Docker, services auto-hébergés et accès distant sécurisé.' },
  { title: 'Développement web', text: 'HTML, CSS, JavaScript et React — notamment pour ce portfolio.' },
  { title: 'Support & exploitation', text: 'Support N1/N2, suivi des alertes, analyse de logs et maintien en condition opérationnelle.' },
];

export default function Competences() {
  return (
    <div className={styles.page}>
      <header><Menu /></header>
      <main className={styles.main}>
        <section className={styles.section}>
          <p className={styles.eyebrow}>Savoir-faire</p>
          <h1>Mes compétences</h1>
          <p className={styles.intro}>Des bases techniques acquises en formation et sur le terrain, que je continue à approfondir.</p>
          <div className={styles.cards}>
            {skills.map((skill) => <Card key={skill.title} {...skill} />)}
          </div>
        </section>
      </main>
    </div>
  );
}
