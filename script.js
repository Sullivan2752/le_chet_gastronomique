// Fonctionnalité pour rendre les éléments plus dynamiques au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

console.log("Site avec animations et effet parallaxe chargé !");
