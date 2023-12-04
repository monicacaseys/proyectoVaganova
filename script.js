"use strict";
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function mostrarModal(texto) {
  var modal = document.getElementById("modal");
  var modalTexto = document.getElementById("modal-texto");

  modalTexto.innerHTML = texto;
  modal.style.display = "block";
}

function cerrarModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}


