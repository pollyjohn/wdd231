document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav__links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        hamburger.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    const currentYearSpan = document.getElementById('currentYear');
    currentYearSpan.textContent = new Date().getFullYear();
});