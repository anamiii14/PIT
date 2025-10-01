// Guardar el código de aula en localStorage desde la página anterior
function enviarCodigo() {
  const codigo = document.getElementById("codigoAula").value;
  if (codigo.trim() === "") {
    alert("Por favor, introduce un código.");
  } else {
    // Guardamos el código en localStorage para usarlo en la siguiente página
    localStorage.setItem("codigoAula", codigo);

    // Redirigimos a la página siguiente
    window.location.href = "alumno_aula_existe.html";
  }
}

// Mostrar el código del aula en la página alumno_aula_existe
document.addEventListener("DOMContentLoaded", () => {
  const nombreAula = localStorage.getItem("codigoAula");
  if (nombreAula && document.getElementById("nombreAula")) {
    document.getElementById("nombreAula").textContent = "Aula: " + nombreAula;
  }
});

// Función para capturar nombre y puesto del alumno
function entrarAlumno() {
  const nombre = document.getElementById("nombreAlumno").value;
  const puesto = document.getElementById("puestoAlumno").value;

  if (nombre.trim() === "" || puesto.trim() === "") {
    alert("Por favor, introduce tu nombre y tu puesto.");
  } else {
    // Guardamos los datos en localStorage
    localStorage.setItem("nombreAlumno", nombre);
    localStorage.setItem("puestoAlumno", puesto);

    // Redirigimos a la siguiente página
    window.location.href = "alumno_aula_identificado.html";
  }
}

// =============================
//   GESTIÓN DEL HEADER + SIDEBAR
// =============================

// Mostrar el nombre del alumno en el botón cuenta
document.addEventListener("DOMContentLoaded", () => {
  const nombre = localStorage.getItem("nombreAlumno");
  const btnCuenta = document.getElementById("btnCuenta");
  if (nombre && btnCuenta) btnCuenta.textContent = nombre;
});

// Referencias
const btnCuenta = document.getElementById("btnCuenta");
const menuCuenta = document.getElementById("menuCuenta");

// Toggle con el botón del nombre (abre/cierra sidebar)
btnCuenta?.addEventListener("click", (e) => {
  e.stopPropagation(); 
  menuCuenta?.classList.toggle("open");
});

// Evitar que clics dentro del menú cierren la sidebar
menuCuenta?.addEventListener("click", (e) => e.stopPropagation());

// Cerrar al hacer clic fuera
document.addEventListener("click", () => {
  if (menuCuenta?.classList.contains("open")) {
    menuCuenta.classList.remove("open");
  }
});

// =============================
//   SIGN OUT
// =============================
function signOut() {
  const confirmacion = confirm("¿Seguro que quieres salir?");
  if (confirmacion) {
    localStorage.clear();
    window.location.href = "index.html";
  }
}
