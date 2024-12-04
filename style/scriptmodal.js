// ? Obtener los elementos
var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// ? Cerrar el modal si el usuario hace clic fuera del contenido modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
