import Menu from '../Menu/Menu';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.page}>
      <header className={styles.header}><Menu /></header>
      <main className={styles.main}>
        <section className={styles.profile}>
          <h2>Contact</h2>
          <p>Vous pouvez me contacter pour échanger sur un projet.</p>
        </section>
      </main>
    </div>
  );
}
