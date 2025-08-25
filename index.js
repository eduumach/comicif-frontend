// Generate stars pattern
function generateStars() {
    const starsPattern = document.getElementById('starsPattern');
    if (!starsPattern) return;
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsPattern.appendChild(star);
    }
}

// Photo upload functionality
document.getElementById('photoUpload').addEventListener('change', function(e) {
    const files = e.target.files;
    const galleryGrid = document.getElementById('galleryGrid');
    
    for (let file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.style.backgroundImage = `url(${e.target.result})`;
                galleryItem.style.backgroundSize = 'cover';
                galleryItem.style.backgroundPosition = 'center';
                
                // Add at the beginning
                galleryGrid.insertBefore(galleryItem, galleryGrid.firstChild);
                
                // Remove placeholders if too many items
                const placeholders = galleryGrid.querySelectorAll('.gallery-placeholder');
                if (placeholders.length > 0 && galleryGrid.children.length > 12) {
                    placeholders[placeholders.length - 1].parentElement.remove();
                }
            };
            
            reader.readAsDataURL(file);
        }
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Countdown timer
function updateCountdown() {
    const eventDate = new Date('2025-12-04T10:00:00');
    const now = new Date();
    const diff = eventDate - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const countdownBar = document.querySelector('.countdown-bar');
        if (countdownBar) {
            countdownBar.innerHTML = `FALTAM <span>${days}</span> DIAS <span>${hours}</span> HORAS <span>${minutes}</span> MINUTOS <span>${seconds}</span> SEGUNDOS PARA O COMICIF25`;
        }
    }
}

// Initialize
generateStars();
updateCountdown();
setInterval(updateCountdown, 1000);
