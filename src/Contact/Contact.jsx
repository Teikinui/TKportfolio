import Menu from '../Menu/Menu';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.page}>
      <header className={styles.header}><Menu /></header>
      <main className={styles.main}>
        <section className={styles.profile} aria-labelledby="contact-title">
          <p className={styles.eyebrow}>Échangeons</p>
          <h1 id="contact-title">Un projet, une opportunité ?</h1>
          <p>Je suis ouvert aux échanges autour du cloud, des infrastructures et des systèmes. Vous pouvez me joindre par e-mail ou retrouver mon parcours professionnel sur LinkedIn.</p>
          <div className={styles.links}>
            <a href="mailto:teikinui.decian@gmail.com">M’écrire un e-mail <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/teikinui-decian" target="_blank" rel="noreferrer">Mon profil LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
          <p className={styles.note}>À la recherche d’une alternance DevOps / Infrastructure Cloud à partir de janvier 2027.</p>
        </section>
      </main>
    </div>
  );
}
