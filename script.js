window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff9800';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '';
    });
});