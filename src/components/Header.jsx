import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    if (isHomePage) {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Se não estiver na home, navega para a home com o hash
      window.location.href = `/#${targetId.substring(1)}`;
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoText}>
            <span className={styles.comic}>COMIC</span>
            <span className={styles.if}>IF</span>
            <span className={styles.year}>25</span>
          </div>
        </Link>
        <nav>
          <ul className={styles.navMenu}>
            <li><a href="#sobre" onClick={(e) => handleSmoothScroll(e, '#sobre')}>Sobre o Evento</a></li>
            <li><a href="#ingressos" onClick={(e) => handleSmoothScroll(e, '#ingressos')}>Ingressos</a></li>
            <li><a href="#atracoes" onClick={(e) => handleSmoothScroll(e, '#atracoes')}>Atrações</a></li>
            <li><Link to="/super-heroi">Super-Herói</Link></li>
            <li><a href="#galeria" onClick={(e) => handleSmoothScroll(e, '#galeria')}>Galeria</a></li>
            <li><a href="#parceiros" onClick={(e) => handleSmoothScroll(e, '#parceiros')}>Parceiros</a></li>
          </ul>
        </nav>
        <button className={styles.ctaButton}>Entrada Gratuita</button>
      </div>
    </header>
  );
};

export default Header;