document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav__links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Optional: Animate hamburger to 'X'
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Set Current Year
    const currentYearSpan = document.getElementById('currentYear');
    currentYearSpan.textContent = new Date().getFullYear();
});