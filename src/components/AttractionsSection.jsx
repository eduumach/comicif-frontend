import styles from './AttractionsSection.module.css';

const AttractionsSection = () => {
  const attractions = [
    {
      icon: '🎤',
      title: 'Palco Thunder Anime',
      description: 'Painéis com dubladores, mangakás convidados e debates sobre os animes da temporada. Apresentações de K-pop e J-rock ao vivo.'
    },
    {
      icon: '🎮',
      title: 'Arena Gaming Pro',
      description: 'Campeonatos de fighting games, speedruns de Dark Souls e a épica final do torneio de Naruto Storm com narração profissional.'
    },
    {
      icon: '🎨',
      title: 'Artists\' Valley',
      description: 'Mais de 100 artistas independentes vendendo prints, commissions e produtos autorais. Workshops de mangá e ilustração digital.'
    },
    {
      icon: '👘',
      title: 'Cosplay Competition',
      description: 'Desfile e competição com premiação total de R$ 0,00 (mas a honra é impagável). Categorias: Melhor Caracterização, Melhor Performance e Mais Criativo.'
    },
    {
      icon: '🍜',
      title: 'Food Park Otaku',
      description: 'Gastronomia temática com pratos inspirados em animes famosos. Do autêntico lámen ao clássico pastel de feira rebatizado como "Gyoza Brasileiro".'
    },
    {
      icon: '📚',
      title: 'Manga Lounge',
      description: 'Biblioteca com mais de 5000 volumes para leitura. Lançamentos, clássicos e aquele volume de Berserk que você nunca achou para comprar.'
    }
  ];

  return (
    <section id="atracoes" className={styles.attractionsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>EXPERIÊNCIAS</h2>
        <p className={styles.sectionDescription}>
          Da emoção dos palcos ao multiverso de ativações, veja o que espera por você.
        </p>
      </div>

      <div className={styles.attractionsGrid}>
        {attractions.map((attraction, index) => (
          <div key={index} className={styles.attractionCard}>
            <div className={styles.attractionIcon}>{attraction.icon}</div>
            <h3 className={styles.attractionTitle}>{attraction.title}</h3>
            <p className={styles.attractionDescription}>{attraction.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AttractionsSection;