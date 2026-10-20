import Menu from '../Menu/Menu';
import styles from './Accueil.module.css';

export default function Accueil() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Menu />
            </header>

            <main className={styles.main}>
                <div className={styles.div_background}>
                    <div className={styles.div_milieu}>
                        <img src="/photo_profil.jpeg" alt="photo_profil" className={styles.photo_profil} />
                        <div className={styles.div_description}>
                            <p className={styles.introduction}>Bonjour, moi c’est Teikinui.</p>
                            <p>Étudiant en Master of Science Cloud, je suis passionné par le développement web et les nouvelles technologies.</p>
                            <p>Découvrez mon parcours, mes compétences et mes projets à travers ce portfolio.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
