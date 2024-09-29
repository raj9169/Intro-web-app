// Smooth scrolling for navigation links and Explore button, with offset for the fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const headerOffset = 70; // Adjust according to your header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Fade-in sections on scroll
const fadeInSection = document.querySelectorAll('.fade-in-section');
const observerOptions = {
    root: null,
    threshold: 0.2,
    rootMargin: '0px'
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInSection.forEach(section => {
    fadeInObserver.observe(section);
});
