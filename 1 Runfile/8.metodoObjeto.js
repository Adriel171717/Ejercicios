let coche = {
    marca: "Toyota",
    modelo: "Leon",
    año: 2020,
    color: "rojo",
    encendido: false,
};

//console.log(coche);

coche.descripcion = function () {
    return `Este es un ${this.marca} ${this.modelo} del año ${this.año} de color ${this.color}.`;
};

console.log(coche.descripcion());

//Ejecición: node 8.metodoObjeto.js