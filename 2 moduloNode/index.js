const fs = require("fs");

// usar el meotdo writeFile para escribir un archivo
// fs.writeFile(file, date [, options], callback)

/*fs.writeFile("archivo.txt", "texto-contenido del archivo", (err) => {
    if (err) throw err;
    console.log("El archivo se ha creado");
})*/

fs.readFile('./archivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});