import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>O Evento</h3>
          <ul>
            <li><a href="#">Sobre o ComicIF</a></li>
            <li><a href="#">Programação</a></li>
            <li><a href="#">Como Chegar</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Participe</h3>
          <ul>
            <li><a href="#">Seja Expositor</a></li>
            <li><a href="#">Competição Cosplay</a></li>
            <li><a href="#">Voluntários</a></li>
            <li><a href="#">Parceiros</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>IFTM Campus Ituiutaba</h3>
          <ul>
            <li>Rua Belarmino Vilela Junqueira, S/N</li>
            <li>Novo Tempo 2</li>
            <li>Ituiutaba - MG</li>
            <li>CEP: 38305-200</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contato</h3>
          <ul>
            <li><a href="#">comicif@iftm.edu.br</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerLogo}>COMICIF25</div>
        <p>© 2025 ComicIF - Instituto Federal do Triângulo Mineiro. Todos os direitos reservados.</p>
        <p style={{marginTop: '10px', fontSize: '12px'}}>Desenvolvido com dedicação pelo Centro Acadêmico de Tecnologia da Informação</p>
      </div>
    </footer>
  );
};

export default Footer;