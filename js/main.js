
const promedios = [];

function calcularPromedio() {
    let suma = 0;

    for (let i = 1; i <= 3; i++) {
    let nota = parseFloat(prompt("Ingrese su nota " + i + ":"));

    // Validar si la nota es un número válido
    while (isNaN(nota)) {
        nota = parseFloat(prompt("Ingrese una nota válida para la nota " + i + ":"));
    }

    suma += nota;
    }

    const promedio = suma / 3;
    return promedio;
}

// Para agregar un promedio
function agregarPromedio() {
    const resultado = calcularPromedio();
    promedios.push(resultado.toFixed(2));
}

// Para corregir promedio
function corregirPromedio() {
    const index = prompt("Ingrese el índice del promedio a corregir:");
    const nuevoPromedio = parseFloat(prompt("Ingrese el nuevo promedio:"));

  if (!isNaN(nuevoPromedio)) {
    promedios[index] = nuevoPromedio.toFixed(2);
    alert("El promedio ha sido corregido correctamente.");
    } else {
    alert("El promedio ingresado no es válido.");
    }
}

// Para mostrar los promedios
function mostrarPromedios() {
    if (promedios.length === 0) {
    alert("No se han ingresado promedios.");
    } else {
    alert("Promedios ingresados:\n" + promedios.join("\n"));
    }
}

// Menú principal
function menuPrincipal() {
    let opcion = "";

    while (opcion !== "4") {
    opcion = prompt(
        "Seleccione una opción:\n" +
        "1. Agregar nuevo promedio\n" +
        "2. Corregir promedio existente\n" +
        "3. Mostrar todos los promedios\n" +
        "4. Salir"
    );

    switch (opcion) {
      case "1":
        agregarPromedio();
        break;
      case "2":
        corregirPromedio();
        break;
      case "3":
        mostrarPromedios();
        break;
      case "4":
        alert("Gracias por ingresar su promedio, que tenga un buen dia!");
        break;
      default:
        alert("Opción inválida. Por favor, ingrese una correcta.");
        break;
    }
  }
}

// Iniciar el programa
menuPrincipal();



