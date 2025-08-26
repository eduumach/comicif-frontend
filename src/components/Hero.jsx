import { useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  useEffect(() => {
    const generateStars = () => {
      const starsPattern = document.getElementById('starsPattern');
      if (!starsPattern) return;
      
      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = styles.star;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsPattern.appendChild(star);
      }
    };

    generateStars();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.starsPattern} id="starsPattern"></div>
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>O Maior Evento Otaku do Triângulo Mineiro</div>
        <h1 className={styles.heroTitle}>COMIC IF</h1>
        <p className={styles.heroSubtitle}>
          O multiverso otaku se encontra em um único dia de evento.<br />
          Prepare-se para a maior <em>aventura da sua vida.</em>
        </p>
        <div className={styles.ctaSection}>
          <button className={styles.ctaPrimary}>Garanta sua Entrada</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;