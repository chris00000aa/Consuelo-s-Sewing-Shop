// ========================================
// MENÚ HAMBURGUESA (móvil)
// ========================================

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    // Alterna la clase "active" en el menú
    nav.classList.toggle('active');

    // Actualiza el estado de accesibilidad del botón
    const isOpen = nav.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
});
// ========================================
// SCROLL REVEAL (animación al hacer scroll)
// ========================================

// Le avisamos al CSS que JS sí está activo (mejora progresiva)
document.body.classList.add('js-ready');

const revealElements = document.querySelectorAll(
    '.servicio-card, .galeria-item, .cta, .acerca-de, .contacto-info, .politica-item'
);

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // ya se reveló, dejamos de vigilarlo
        }
    });
}, {
    threshold: 0.15 // se activa cuando el 15% del elemento ya es visible
});

revealElements.forEach(el => revealObserver.observe(el));