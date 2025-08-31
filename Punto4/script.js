     const boton = document.getElementById("mostrarBtn");
const libretaInput = document.getElementById("libreta");

// Validar que solo se ingresen números en libreta
libretaInput.addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, '');
});

// Agregar evento al botón
boton.addEventListener("click", function() {
  // Obtenemos valores de los inputs
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const libreta = libretaInput.value;

  // Mostramos en un alert
  alert("Los datos ingresados son:\n" +
        "Nombre: " + nombre + "\n" +
        "Apellido: " + apellido + "\n" +
        "Libreta Universitaria: " + libreta);
});