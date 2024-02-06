var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var http = require('http');

var app = express();
var server = http.Server(app);
var port = 8080;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "dist/my-app/browser/")));
app.use(bodyParser.json());

// Routing
app.get("/", function (req, response) {
    response.sendFile(path.join(__dirname, "dist/my-app/browser/"));
});

// Inicializar Servidor
server.listen(port, function () {
    console.log("Servidor iniciado en http://localhost:" + port);
});