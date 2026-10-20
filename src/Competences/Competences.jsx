import Card from '../components/Card/Card';
import Menu from '../Menu/Menu';
import styles from './Competences.module.css';

const skills = [
  { title: 'Développement web', text: 'Création d’interfaces modernes avec HTML, CSS, JavaScript et React.' },
  { title: 'Cloud', text: 'Découverte et mise en œuvre de solutions cloud dans le cadre de mon master.' },
  { title: 'Responsive design', text: 'Des interfaces adaptées aux ordinateurs, tablettes et mobiles.' },
];

export default function Competences() {
  return (
    <div className={styles.page}>
      <header className={styles.header}><Menu /></header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Mes compétences</h2>
          <div className={styles.cards}>
            {skills.map((skill) => <Card key={skill.title} {...skill} />)}
          </div>
        </section>
      </main>
    </div>
  );
}
