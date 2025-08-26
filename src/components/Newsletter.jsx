import { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContent}>
        <h2 className={styles.newsletterTitle}>CADÊ OS ANÚNCIOS, SENPAI?</h2>
        <p>Inscreva-se na newsletter para receber todas as novidades do ComicIF25 em primeira mão, sem filtro de spoilers.</p>
        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
          <input 
            type="email" 
            className={styles.newsletterInput} 
            placeholder="seuemail@iftm.edu.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.newsletterButton}>Eu Quero</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;