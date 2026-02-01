document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }));

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');

    // Only proceed if lightbox element exists
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const captionText = document.getElementById('caption');
        const closeBtn = document.querySelector('.close-lightbox');

        // Select all tintable images
        // supporting .trace-img, .side-img, figure img, and .proof-item img
        const images = document.querySelectorAll('.trace-img, .side-img, figure img, .proof-item img');

        images.forEach(img => {
            img.addEventListener('click', function () {
                lightbox.style.display = 'block';
                lightboxImg.src = this.src;
                // Use alt attribute as caption if available
                captionText.innerHTML = this.alt;
            });
        });

        // Close on cross click
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
        }

        // Close on click outside image
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.style.display = 'none';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.style.display === 'block') {
                lightbox.style.display = 'none';
            }
        });
    }
});
