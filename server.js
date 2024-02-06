import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var express = require('express');
const bodyParser = require('body-parser');
var http = require('http');
import db from './db/db.js';

var app = express();
var server = http.Server(app);
var port = 8080;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "dist/")));
app.use(bodyParser.json());

// Routing
app.get("/", function (req, response) {
    response.sendFile(path.join(__dirname, "dist/"));
});




app.get('/api/v1/datos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Datos recuperados con éxito!',
        datos: db
    });
});

app.get('/api/v1/datos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const datos = db.find(d => d.id === id);

    if (datos) {
        res.status(200).send({
            success: 'true',
            message: 'Dato recuperado con éxito!',
            db: datos
        })
    } else {
        res.status(404).send({
            success: 'false',
            message: 'El dato no existe!',
        })
    }
})

app.post('/api/v1/datos', (req, res) => {
    if (!req.body.title || !req.body.description) {
        res.status(400).send({
            success: 'false',
            message: 'Datos: Título y descripción requeridos!'

        });
        return;
    }

    const id = db.length + 1;
    const datos = { id, ...req.body };
    db.push(datos);
    res.writeHead(201, { 'Cpntent-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(datos));

});

app.put("/api/v1/datos/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const datos = db.find(d => d.id === id);
    if (datos) {
        datos.title = req.body.title ? req.body.title : datos.title;
        datos.description = req.body.description ? req.body.description : datos.description;
        return res.status(200).send({
            success: "true",
            message: "Dato actializado con éxito!",
            db: datos
        });
    } else {
        return res.status(404).send({
            success: "false",
            message: "El dato no existe!"
        });
    }
});

app.delete('/api/v1/datos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const datos = db.find(d => d.id === id);
    if (datos) {
        db.splice(db.indexOf(datos), 1);
        return res.status(200).send({
            success: "true",
            message: "Dato eliminado con éxito!",
            db: datos
        });
    } else {
        return res.status(404).send({
            success: "false",
            message: "El dato no existe!"
        });
    }
})





// Inicializar Servidor
server.listen(port, function () {
    console.log("Servidor iniciado en http://localhost:" + port);
});