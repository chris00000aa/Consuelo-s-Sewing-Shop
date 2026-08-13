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