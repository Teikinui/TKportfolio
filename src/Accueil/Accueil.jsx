import Menu from '../Menu/Menu';
import NavLink from '../components/NavLink/NavLink';
import styles from './Accueil.module.css';

export default function Accueil() {
    return (
    <div className={styles.page}>
      <header className={styles.header}><Menu /></header>
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="home-title">
          <div className={styles.copy}>
            <p className={styles.eyebrow}><span /> Master of Science Cloud · EPITECH Paris</p>
            <h1 id="home-title">Construire des infrastructures <span>fiables et utiles.</span></h1>
            <p className={styles.description}>Bonjour, moi c’est Teikinui. Je m’intéresse au cloud, aux systèmes et à la sécurité — avec l’envie de comprendre comment les choses fonctionnent, puis de les améliorer.</p>
            <div className={styles.actions}>
              <NavLink to="/projets">Découvrir mes projets <span aria-hidden="true">↗</span></NavLink>
              <NavLink to="/contact">Me contacter</NavLink>
              <a className={styles.downloadLink} href="/CV/Teikinui_DECIAN_CLOUD_CV.pdf" download="Teikinui_Decian_CV.pdf">
                Télécharger mon CV <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className={styles.note}>Actuellement en recherche d’une alternance DevOps / Infrastructure Cloud — janvier 2027.</p>
          </div>
          <figure className={styles.portrait}>
            <img src="/photo_profil.jpeg" alt="Portrait de Teikinui Decian" />
            <figcaption><span>Teikinui Decian</span><span>Étudiant Cloud · EPITECH</span></figcaption>
          </figure>
        </section>
        <section className={styles.highlights} aria-label="Domaines d’intérêt">
          <span>01 / Cloud & infrastructure</span><span>02 / Systèmes & réseaux</span><span>03 / Sécurité</span>
        </section>
      </main>
    </div>
    );
}
