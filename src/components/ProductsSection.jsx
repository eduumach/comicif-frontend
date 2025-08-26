import styles from './ProductsSection.module.css';

const ProductsSection = () => {
  const products = [
    {
      image: 'THUNDER PASS',
      title: 'Thunder Pass Senpai',
      description: 'Acesso ilimitado ao Palco Thunder com lugar garantido. Conheça os convidados especiais e participe de todas as atividades exclusivas.',
      price: 'R$ 0,00'
    },
    {
      image: 'CAMAROTE VIP',
      title: 'Camarote Hokage',
      description: 'Vista privilegiada do palco principal com serviço de comes e bebes. Água, refrigerante e o famoso pastel de feira inclusos.',
      price: 'R$ 0,00'
    },
    {
      image: 'PIN EXCLUSIVO',
      title: 'Pin Colecionável ComicIF',
      description: 'Pin metálico exclusivo do evento. Design único que muda de cor com a temperatura. Edição limitada de 10.000 unidades.',
      price: 'R$ 0,00'
    }
  ];

  return (
    <section className={styles.productsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>NOVOS ITENS PARA SUA AVENTURA</h2>
        <p className={styles.sectionDescription}>
          Descubra os produtos exclusivos que vão deixar sua experiência ComicIF25 ainda mais lendária.
        </p>
      </div>

      <div className={styles.productsCarousel}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.productImage}>{product.image}</div>
            <div className={styles.productContent}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.productPrice}>{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;