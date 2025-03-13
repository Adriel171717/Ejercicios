import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname (fileURLToPath(import.meta.url));

console.log(__dirname)


const aplicacion = express();
const port = 3000;

aplicacion.use(bodyParser.urlencoded({ extended: true }))

aplicacion.post("/submit", (req, res) => {
    console.log(req.body)
    res.send("Datos recicibidos")
});

aplicacion.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

aplicacion.listen(port, () => {
    console.log(`Servidor corriendo en el puerto, ${port}`);
});