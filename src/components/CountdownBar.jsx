import { useState, useEffect } from 'react';
import styles from './CountdownBar.module.css';

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = new Date('2025-10-25T08:00:00');
      const now = new Date();
      const diff = eventDate - now;
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdownBar}>
      FALTAM <span>{timeLeft.days}</span> DIAS <span>{timeLeft.hours}</span> HORAS <span>{timeLeft.minutes}</span> MINUTOS <span>{timeLeft.seconds}</span> SEGUNDOS PARA O COMICIF25
    </div>
  );
};

export default CountdownBar;