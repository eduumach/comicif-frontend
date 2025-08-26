import styles from './TicketsSection.module.css';

const TicketsSection = () => {
  return (
    <section id="ingressos" className={styles.ticketsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>INGRESSOS</h2>
        <p className={styles.sectionDescription}>
          O evento é em um único dia, mas as experiências são infinitas.
          Confira os ingressos disponíveis e se prepare para o dia mais épico do ano.
        </p>
      </div>

      <div className={styles.ticketsGrid}>
        <div className={styles.ticketCard}>
          <div className={styles.ticketHeader}>
            <div className={styles.ticketAnimeArt} style={{background: 'linear-gradient(135deg, #FF4500, #FF6347)'}}></div>
            <div className={styles.ticketBadge}>Evento Principal</div>
            <div className={styles.ticketDay}>SÁBADO</div>
          </div>
          <div className={styles.ticketContent}>
            <h3 className={styles.ticketTitle}>Sábado Plus Ultra</h3>
            <p className={styles.ticketDescription}>
              O sábado no ComicIF é conhecido em todas as dimensões do multiverso anime como o dia 
              mais épico, é tipo o arco do torneio em que tudo acontece ao mesmo tempo.
            </p>
            <div className={styles.ticketPrice}>
              <span className={styles.priceOriginal}>R$ 260,00</span>
              <span className={styles.priceCurrent}>GRÁTIS</span>
            </div>
            <button className={styles.ticketButton}>Reservar Ingresso</button>
          </div>
        </div>

        <div className={styles.ticketCard}>
          <div className={styles.ticketHeader}>
            <div className={styles.ticketAnimeArt} style={{background: 'linear-gradient(135deg, #FFD700, #FFA500)'}}></div>
            <div className={styles.ticketBadge}>VIP Experience</div>
            <div className={styles.ticketDay}>EPIC</div>
          </div>
          <div className={styles.ticketContent}>
            <h3 className={styles.ticketTitle}>Epic Pass Hokage</h3>
            <p className={styles.ticketDescription}>
              Com o Epic Pass, sua jornada no ComicIF transcende a realidade. 
              Entrada VIP, meet & greet com os melhores cosplayers e acesso ao Camarote do Hokage.
            </p>
            <div className={styles.ticketPrice}>
              <span className={styles.priceOriginal}>R$ 2.400,00</span>
              <span className={styles.priceCurrent}>GRÁTIS</span>
            </div>
            <button className={styles.ticketButton}>Reservar Ingresso</button>
          </div>
        </div>

        <div className={styles.ticketCard}>
          <div className={styles.ticketHeader}>
            <div className={styles.ticketAnimeArt} style={{background: 'linear-gradient(135deg, #8A2BE2, #4B0082)'}}></div>
            <div className={styles.ticketBadge}>Yare Yare Daze</div>
            <div className={styles.ticketDay}>LISTA</div>
          </div>
          <div className={styles.ticketContent}>
            <h3 className={styles.ticketTitle}>Lista VIP do Jotaro</h3>
            <p className={styles.ticketDescription}>
              Esse ingresso é tão exclusivo que só pode ser visto por usuários de Stand. 
              Se você não está vendo o botão de reservar, bom... Yare yare daze.
            </p>
            <div className={styles.ticketPrice}>
              <span className={styles.priceOriginal}></span>
              <span className={styles.priceCurrent}></span>
            </div>
            <button className={styles.ticketButton} style={{visibility: 'hidden'}}>Reservar Ingresso</button>
          </div>
        </div>

        <div className={styles.ticketCard}>
          <div className={styles.ticketHeader}>
            <div className={styles.ticketAnimeArt} style={{background: 'linear-gradient(135deg, #000000, #FFFFFF)'}}></div>
            <div className={styles.ticketBadge}>Bug na Matrix</div>
            <div className={styles.ticketDay}>???</div>
          </div>
          <div className={styles.ticketContent}>
            <h3 className={styles.ticketTitle}>Ingresso do Multiverso</h3>
            <p className={styles.ticketDescription}>
              Este ingresso te dá acesso a todas as variantes do ComicIF em todas as linhas temporais. 
              Cuidado para não encontrar seu outro eu.
            </p>
            <div className={styles.ticketPrice}>
              <span className={styles.priceOriginal}>Sua Alma</span>
              <span className={styles.priceCurrent}>GRÁTIS</span>
            </div>
            <button className={styles.ticketButton}>Reservar Ingresso</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;