// ? Obtener los elementos del DOM
var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// ? Abrir el modal cuando el usuario haga clic en el botón
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// ? Cerrar el modal cuando el usuario haga clic en el botón de cerrar (X)
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// ? Cerrar el modal si el usuario hace clic fuera del contenido modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
