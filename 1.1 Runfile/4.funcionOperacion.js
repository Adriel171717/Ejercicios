function operacion(a, b, operacion) {
    switch (operacion) {
        case "suma":
            return a + b;
        case "resta":
            return a - b;
        case "multiplicacion":
            return a * b;
        case "division":
            return a / b;
        default:
            return "Operación no válida";
    }
}

console.log(operacion(5, 3, "suma")); // 8
console.log(operacion(5, 3, "resta")); // 2

//Ejecición: node 4.funcionOperacion.js