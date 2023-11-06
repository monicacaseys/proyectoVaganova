const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});




/* // Selecciona los elementos del DOM que necesitas
const menuToggle = document.getElementById('menu-toggle');
const menuHorizontal = document.querySelector('.menu');
const menuVertical = document.querySelector('.menu-vertical');

// Agrega un evento para detectar cambios en el estado de la casilla de verificación
menuToggle.addEventListener('change', function  () {
  if (menuToggle.checked) {
    // Si la casilla de verificación está marcada, muestra el menú vertical
    menuHorizontal.style.display = 'none';
    menuVertical.style.display = 'block';
  } else {
    // Si la casilla de verificación no está marcada, muestra el menú horizontal
    menuHorizontal.style.display = 'block';
    menuVertical.style.display = 'none';
  }
});

// Función para verificar el estado de la casilla de verificación cuando se redimensiona la ventana
function checkMenuVisibility() {
  if (window.innerWidth < 1160) {
    menuToggle.checked = false; // Asegúrate de que la casilla de verificación esté desmarcada en pantallas más pequeñas
    menuHorizontal.style.display = 'none';
    menuVertical.style.display = 'block';
  } else {
    menuToggle.checked = false; // Asegúrate de que la casilla de verificación esté desmarcada en pantallas más grandes
    menuHorizontal.style.display = 'block';
    menuVertical.style.display = 'none';
  }
}

// Llama a la función al cargar la página y cuando se redimensiona la ventana
checkMenuVisibility();
window.addEventListener('resize', checkMenuVisibility);
 */

