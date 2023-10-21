document.querySelector('#menu-toggle').addEventListener('click', function () {
    var menuVertical = document.querySelector('.menu-vertical');
    menuVertical.classList.toggle('active');
});


// Código para cerrar el menú con la "X"
document.querySelector('#close-menu').addEventListener('click', function () {
    var menuToggle = document.querySelector('#menu-toggle');
    var menuHorizontal = document.querySelector('.menu-horizontal');
    var menuVertical = document.querySelector('.menu-vertical');
    var closeButton = document.querySelector('#close-menu');
    
    menuToggle.classList.remove('active');
    menuHorizontal.classList.remove('hidden');
    menuVertical.classList.add('hidden');
    closeButton.classList.add('hidden');
});

// Agrega una función para manejar la visibilidad del menú en pantallas pequeñas
function checkScreenSize() {
    var menuToggle = document.querySelector('#menu-toggle');
    var menu = document.querySelector('.menu');

    if (window.innerWidth < 1205) {
        menu.style.display = 'none'; // Oculta el menú principal
        menuToggle.style.display = 'block'; // Muestra el menú hamburguesa
    } else {
        menuToggle.style.display = 'none'; // Oculta el menú hamburguesa
        menu.style.display = 'block'; // Muestra el menú principal
    }
}

// Llama a la función en la carga de la página y cuando se redimensiona la ventana
checkScreenSize();
window.addEventListener('resize', checkScreenSize);
