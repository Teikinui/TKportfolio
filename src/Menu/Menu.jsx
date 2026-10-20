import NavLink from '../components/NavLink/NavLink';
import styles from './Menu.module.css';

const navigationLinks = [
  { label: 'Accueil', to: '/accueil' },
  { label: 'Compétences', to: '/competences' },
  { label: 'Contact', to: '/contact' },
];

export default function Menu() {
  return (
    <div className={styles.div_menu}>
      <h1 className={styles.title}>TK Portfolio</h1>
      <nav className={styles.nav} aria-label="Navigation principale">
        {navigationLinks.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
