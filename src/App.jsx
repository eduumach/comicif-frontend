import Header from './components/Header';
import Hero from './components/Hero';
import CountdownBar from './components/CountdownBar';
import TicketsSection from './components/TicketsSection';
import AttractionsSection from './components/AttractionsSection';
import GallerySection from './components/GallerySection';
import ProductsSection from './components/ProductsSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CountdownBar />
      <TicketsSection />
      <AttractionsSection />
      <GallerySection />
      <ProductsSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;