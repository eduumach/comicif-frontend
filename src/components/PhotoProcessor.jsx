import { useState, useRef, useEffect } from 'react';
import styles from './PhotoProcessor.module.css';

const PhotoProcessor = () => {
  const [availableOptions, setAvailableOptions] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [processedImageUrl, setProcessedImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoadingOptions, setIsLoadingOptions] = useState(true);
  const [isDragOver, setIsDragOver] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  const [stream, setStream] = useState(null);
  
  const fileInputRef = useRef();
  const videoRef = useRef();
  const canvasRef = useRef();

  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

  useEffect(() => {
    fetchAvailableOptions();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  const fetchAvailableOptions = async () => {
    try {
      setIsLoadingOptions(true);
      const response = await fetch(`${baseUrl}/api/available-options/`);
      if (!response.ok) throw new Error('Erro ao carregar opções disponíveis');
      const data = await response.json();
      setAvailableOptions(data);
      setError('');
    } catch (err) {
      setError('Erro ao carregar opções. Verifique se a API está rodando.');
      console.error('Error fetching options:', err);
    } finally {
      setIsLoadingOptions(false);
    }
  };

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setProcessedImageUrl('');
      setError('');
    } else {
      setError('Por favor, selecione apenas arquivos de imagem.');
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const startCamera = async () => {
    try {
      setUseCamera(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'user',
          width: { ideal: 640 },
          height: { ideal: 480 }
        }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      setError('Erro ao acessar a câmera. Verifique as permissões.');
      setUseCamera(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setUseCamera(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      
      canvas.toBlob((blob) => {
        const file = new File([blob], 'camera-photo.jpg', { type: 'image/jpeg' });
        handleFileSelect(file);
        stopCamera();
      }, 'image/jpeg', 0.9);
    }
  };

  const processPhoto = async () => {
    if (!selectedFile || !selectedBackground) {
      setError('Por favor, selecione uma foto e um background.');
      return;
    }

    setIsLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('photo', selectedFile);
    formData.append('background', selectedBackground);

    try {
      const response = await fetch(`${baseUrl}/api/process-photo/`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao processar a foto');
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setProcessedImageUrl(imageUrl);
    } catch (err) {
      setError('Erro ao processar a foto. Tente novamente.');
      console.error('Error processing photo:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadProcessedImage = () => {
    if (processedImageUrl) {
      const link = document.createElement('a');
      link.href = processedImageUrl;
      link.download = 'super-hero-transformation.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const resetProcessor = () => {
    setSelectedFile(null);
    setPreviewUrl('');
    setProcessedImageUrl('');
    setSelectedBackground('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (isLoadingOptions) {
    return (
      <section className={styles.photoProcessor} id="photo-processor">
        <div className={styles.container}>
          <div className={styles.loading}>
            <div className={styles.loadingSpinner}></div>
            <p>CARREGANDO OPÇÕES DISPONÍVEIS</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.photoProcessor} id="photo-processor">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>PROCESSADOR DE FOTOS</div>
          <h2 className={styles.title}>TRANSFORMAÇÃO SUPER-HERÓI</h2>
          <p className={styles.subtitle}>
            Carregue sua foto e escolha um background épico para sua transformação digital
          </p>
        </div>

        {error && (
          <div className={styles.error}>
            <div className={styles.errorIcon}>!</div>
            <p>{error}</p>
            <button onClick={() => setError('')} className={styles.closeError}>×</button>
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.uploadSection}>
            <div className={styles.uploadCard}>
              <h3 className={styles.cardTitle}>CARREGAR IMAGEM</h3>
              
              {!useCamera ? (
                <div className={styles.uploadArea}>
                  <div 
                    className={`${styles.dropZone} ${isDragOver ? styles.dragOver : ''} ${selectedFile ? styles.hasFile : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {previewUrl ? (
                      <div className={styles.preview}>
                        <img src={previewUrl} alt="Preview" className={styles.previewImage} />
                        <div className={styles.previewOverlay}>
                          <p>CLIQUE PARA ALTERAR</p>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.dropContent}>
                        <div className={styles.uploadIcon}>+</div>
                        <p>ARRASTE UMA FOTO AQUI OU CLIQUE PARA SELECIONAR</p>
                        <small>Formatos suportados: JPG, PNG, WEBP</small>
                      </div>
                    )}
                  </div>
                  
                  <div className={styles.actionButtons}>
                    <button 
                      className={styles.cameraButton}
                      onClick={startCamera}
                    >
                      USAR CÂMERA
                    </button>
                    {selectedFile && (
                      <button 
                        className={styles.resetButton}
                        onClick={resetProcessor}
                      >
                        REINICIAR
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className={styles.cameraSection}>
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    className={styles.cameraPreview}
                  />
                  <div className={styles.cameraControls}>
                    <button 
                      className={styles.captureButton}
                      onClick={capturePhoto}
                    >
                      CAPTURAR FOTO
                    </button>
                    <button 
                      className={styles.cancelButton}
                      onClick={stopCamera}
                    >
                      CANCELAR
                    </button>
                  </div>
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className={styles.hiddenInput}
            />
          </div>

          {availableOptions?.backgrounds && (
            <div className={styles.backgroundSection}>
              <div className={styles.backgroundCard}>
                <h3 className={styles.cardTitle}>SELECIONAR BACKGROUND</h3>
                <div className={styles.backgroundGrid}>
                  {Object.entries(availableOptions.backgrounds).map(([key, description]) => (
                    <button
                      key={key}
                      className={`${styles.backgroundOption} ${selectedBackground === key ? styles.selected : ''}`}
                      onClick={() => setSelectedBackground(key)}
                    >
                      <div className={styles.backgroundPreview}>
                        <div className={styles.backgroundImage}>
                          <div className={`${styles.backgroundPlaceholder} ${styles[key]}`}></div>
                        </div>
                        <span className={styles.backgroundName}>{description}</span>
                      </div>
                      {selectedBackground === key && (
                        <div className={styles.selectedIndicator}>SELECIONADO</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedFile && selectedBackground && (
            <div className={styles.processSection}>
              <button
                className={styles.processButton}
                onClick={processPhoto}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className={styles.spinner}></div>
                    PROCESSANDO...
                  </>
                ) : (
                  'PROCESSAR TRANSFORMAÇÃO'
                )}
              </button>
            </div>
          )}

          {processedImageUrl && (
            <div className={styles.resultSection}>
              <div className={styles.resultCard}>
                <h3 className={styles.cardTitle}>RESULTADO DA TRANSFORMAÇÃO</h3>
                <div className={styles.result}>
                  <img 
                    src={processedImageUrl} 
                    alt="Foto processada" 
                    className={styles.processedImage}
                  />
                  <div className={styles.resultActions}>
                    <button 
                      className={styles.downloadButton}
                      onClick={downloadProcessedImage}
                    >
                      BAIXAR IMAGEM
                    </button>
                    <button 
                      className={styles.newPhotoButton}
                      onClick={resetProcessor}
                    >
                      NOVA TRANSFORMAÇÃO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </section>
  );
};

export default PhotoProcessor;