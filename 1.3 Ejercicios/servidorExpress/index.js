import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Configurar para servir archivos estáticos desde 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

app.use('*', (req, res) => {
    res.status(404).send("<h1>404 Not Found<h1>");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto http://localhost:${port}`);
});