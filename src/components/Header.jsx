import styles from './Header.module.css';

const Header = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <div className={styles.logoText}>
            <span className={styles.comic}>COMIC</span>
            <span className={styles.if}>IF</span>
            <span className={styles.year}>25</span>
          </div>
        </div>
        <nav>
          <ul className={styles.navMenu}>
            <li><a href="#sobre" onClick={(e) => handleSmoothScroll(e, '#sobre')}>Sobre o Evento</a></li>
            <li><a href="#ingressos" onClick={(e) => handleSmoothScroll(e, '#ingressos')}>Ingressos</a></li>
            <li><a href="#atracoes" onClick={(e) => handleSmoothScroll(e, '#atracoes')}>Atrações</a></li>
            <li><a href="#palcos" onClick={(e) => handleSmoothScroll(e, '#palcos')}>Palcos</a></li>
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