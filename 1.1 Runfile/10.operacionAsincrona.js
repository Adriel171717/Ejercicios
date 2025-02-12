function operacionAsincrona(callback) {
    setTimeout(() => {
        const resultado = 42; // Simulamos un resultado
        callback(resultado);
    }, 2000);
}

operacionAsincrona((resultado) => {
    console.log("El resultado es:", resultado);
});

//Ejecición: node 10.operacionAsincrona.js