import { useState } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';

const navigationLinks = [
  { label: 'Accueil', to: '/', end: true },
  { label: 'Compétences', to: '/competences' },
  { label: 'Parcours', to: '/parcours' },
  { label: 'Projets', to: '/projets' },
  { label: 'Contact', to: '/contact' },
];

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  return (
    <div className={styles.div_menu}>
      <RouterNavLink className={styles.title} to="/" end onClick={closeMenu} aria-label="Teikinui Decian, accueil">TD.</RouterNavLink>
      <button
        className={styles.menuButton}
        type="button"
        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
        id="main-navigation"
        aria-label="Navigation principale"
      >
        {navigationLinks.map((link) => (
          <RouterNavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={closeMenu}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            aria-current={location.pathname === link.to ? 'page' : undefined}
          >
            {link.label}
          </RouterNavLink>
        ))}
      </nav>
    </div>
  );
}
