//Inicio

function calcularPromedio() {
    let suma = 0;

    for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt("Ingrese su nota " + i + ":"));

      // Validar si la nota es un número válido
    while (isNaN(nota)) {
        nota = parseFloat(prompt("Ingrese una nota válida para la nota " + i + ":"));
    }

    suma += nota;
    }

    const promedio = suma / 5;
    return promedio;
}

const resultado = calcularPromedio();
alert("El promedio de las notas ingresadas es: " + resultado.toFixed(2));


if (resultado <= 5) {
    alert ("Tenes que esforzarte mas");
}
else if (resultado <= 8) {
    alert ("Vas por buen camino");
}
else if (resultado <= 10) {
    alert ("Estas dando lo mejor de vos");
}



