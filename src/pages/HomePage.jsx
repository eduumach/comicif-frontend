import Hero from '../components/Hero';
import CountdownBar from '../components/CountdownBar';
import TicketsSection from '../components/TicketsSection';
import AttractionsSection from '../components/AttractionsSection';
import GallerySection from '../components/GallerySection';
import ProductsSection from '../components/ProductsSection';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CountdownBar />
      <TicketsSection />
      <AttractionsSection />
      <GallerySection />
      <ProductsSection />
      <Newsletter />
    </>
  );
};

export default HomePage;