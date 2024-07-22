document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de interatividade: Mostrar/ocultar exemplos
    const exemploItems = document.querySelectorAll('.exemplo-item');

    exemploItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('exemplo-item--active');
        });
    });
});
