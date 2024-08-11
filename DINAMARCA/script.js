document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de "Ver más"
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        // Añadir un event listener a cada botón
        button.addEventListener('click', function() {
            // Seleccionar el contenedor de ingredientes hermano
            const ingredientes = this.nextElementSibling;

            // Alternar la visibilidad del contenedor de ingredientes
            if (ingredientes.style.display === 'none' || ingredientes.style.display === '') {
                ingredientes.style.display = 'block';
                this.textContent = 'Ver menos'; // Cambiar texto del botón
            } else {
                ingredientes.style.display = 'none';
                this.textContent = 'Ver más'; // Restaurar texto del botón
            }
        });
    });
});
