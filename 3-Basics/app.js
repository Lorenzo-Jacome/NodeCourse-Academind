const http = require('http');
const routes = require('./routes'); //Importado local: ./

//createServer -> Regresa un objeto server
//PRIMER PARAMETRO: Funcion a ejecturar al recibir request
const server = http.createServer(routes);

//Iniciar proceso que se queda esperando por requests
server.listen(3000);