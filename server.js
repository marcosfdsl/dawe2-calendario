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
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "dist/"));
});

app.get('/profesor', (req, res) => {
    const id = req.query.id;
    if (id) {
        res.redirect(`/profesor/?id=${id}`);
    } else {
        res.status(400).send('Error: Falta el parámetro "id" en la URL');
    }
});

app.get('/mensaje', (req, res) => {
    const id = req.query.id;
    if (id) {
        res.redirect(`/profesor/?id=${id}`);
    } else {
        res.status(400).send('Error: Falta el parámetro "id" en la URL');
    }
});

app.get('/api/v1/profesores', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Datos recuperados con éxito!',
        profesores: db
    });
});

app.get('/api/v1/profesores/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const profesores = db.find(d => d.id === id);

    if (profesores) {
        res.status(200).send({
            success: 'true',
            message: 'Dato recuperado con éxito!',
            db: profesores
        })
    } else {
        res.status(404).send({
            success: 'false',
            message: 'El dato no existe!',
        })
    }
})

app.post('/api/v1/acceder', (req, res) => {
    let usuarioValido = false;
    let idUsuario = null;
    for (let i = 0; i < db.length; i++) {
        if (req.body.usuario === db[i].usuario && req.body.contrasena === db[i].contrasena) {
            usuarioValido = true;
            idUsuario = db[i].id;
            break;
        }
    }

    if (usuarioValido) {
        res.json({ idUsuario });
    } else {
        res.status(401).send('Credenciales inválidas.');
    }
});

app.post('/api/v1/profesores', (req, res) => {
    if (!req.body.nombre || !req.body.correo) {
        res.status(400).send({
            success: 'false',
            message: 'Datos: Título y descripción requeridos!'

        });
        return;
    }

    const id = db.length + 1;
    const profesores = { id, ...req.body };
    db.push(profesores);
    res.writeHead(201, { 'Cpntent-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(profesores));

});

app.put("/api/v1/profesores/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const profesores = db.find(d => d.id === id);
    if (profesores) {
        profesores.nombre = req.body.nombre ? req.body.nombre : profesores.nombre;
        profesores.correo = req.body.correo ? req.body.correo : profesores.correo;
        return res.status(200).send({
            success: "true",
            message: "Dato actializado con éxito!",
            db: profesores
        });
    } else {
        return res.status(404).send({
            success: "false",
            message: "El dato no existe!"
        });
    }
});

app.delete('/api/v1/profesores/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const profesores = db.find(d => d.id === id);
    if (profesores) {
        db.splice(db.indexOf(profesores), 1);
        return res.status(200).send({
            success: "true",
            message: "Dato eliminado con éxito!",
            db: profesores
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