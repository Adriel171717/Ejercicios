try {
    let numero = Number("123abc");
    if (isNaN(numero)) {
        throw new Error("La cadena no puede ser convertida a número");
    }
    console.log("Número convertido:", numero);
} catch (error) {
    console.error("Error:", error.message);
}

//Ejecición: node 11.manejoErrores.js