const http = require('http');

//createServer -> Regresa un objeto server
//PRIMER PARAMETRO: Funcion a ejecturar al recibir request
const server = http.createServer((req, res) => {
    console.log(req);
});

//Iniciar proceso que se queda esperando por requests
server.listen(3000);