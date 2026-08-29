// Highlight active navigation menu link on scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Project image preview popup (Designing card)
    const previewButtons = document.querySelectorAll('.preview-btn');
    previewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const gallery = document.getElementById(btn.getAttribute('data-gallery'));
            if (gallery) gallery.classList.add('open');
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        // Close on the X button
        overlay.querySelector('.modal-close').addEventListener('click', () => {
            overlay.classList.remove('open');
        });
        // Close when clicking the dark background (outside the images box)
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('open');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.open').forEach(o => o.classList.remove('open'));
        }
    });
});