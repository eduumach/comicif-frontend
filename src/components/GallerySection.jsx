import { useState } from 'react';
import styles from './GallerySection.module.css';

const GallerySection = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    
    for (let file of files) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          setUploadedImages(prevImages => [e.target.result, ...prevImages]);
        };
        
        reader.readAsDataURL(file);
      }
    }
  };

  const handleUploadAreaClick = () => {
    document.getElementById('photoUpload').click();
  };

  return (
    <section id="galeria" className={styles.gallerySection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>GALERIA COMICIF</h2>
        <p className={styles.sectionDescription}>
          Compartilhe seus melhores momentos e faça parte da história do maior evento otaku do campus.
        </p>
      </div>

      <div className={styles.galleryUpload}>
        <div className={styles.uploadArea} onClick={handleUploadAreaClick}>
          <div className={styles.uploadIcon}>📸</div>
          <div className={styles.uploadText}>Adicionar suas fotos</div>
          <div className={styles.uploadSubtext}>Arraste ou clique para fazer upload</div>
        </div>
        <input 
          type="file" 
          id="photoUpload" 
          accept="image/*" 
          multiple 
          className={styles.photoUpload}
          onChange={handlePhotoUpload}
        />
      </div>

      <div className={styles.galleryGrid}>
        {uploadedImages.map((image, index) => (
          <div 
            key={index} 
            className={styles.galleryItem}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        ))}
        {Array.from({ length: Math.max(0, 6 - uploadedImages.length) }).map((_, index) => (
          <div key={`placeholder-${index}`} className={styles.galleryItem}>
            <div className={styles.galleryPlaceholder}>Em breve</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;