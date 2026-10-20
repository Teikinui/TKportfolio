import { NavLink as RouterNavLink } from 'react-router-dom';
import styles from './NavLink.module.css';

export default function NavLink({ to, children }) {
  return (
    <RouterNavLink
      className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
      to={to}
    >
      {children}
    </RouterNavLink>
  );
}
