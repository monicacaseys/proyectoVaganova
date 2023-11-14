const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
  const elementos = document.querySelectorAll(".elemento");

  elementos.forEach(elemento => {
    elemento.addEventListener("click", function () {
      alert("Información sobre " + this.innerText);
    });
  });
});



