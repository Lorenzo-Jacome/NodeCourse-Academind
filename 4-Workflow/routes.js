//MODULO PARA MANEJAR REQUESTS

const fs = require('fs');

const requestHandler = (req, res) => {
    //Manage request:
    const url = req.url;
    const method = req.method;

    if(url === "/"){
        res.write("<html>"); 
        res.write("<head><title>My First Page</title></head>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    
    if(url === "/message" && method === "POST"){
        //Los mensajes se reciben en partes, los guardamos en un array
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
    
        //Marcar que termino de leer:
        return req.on("end", () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("=")[1];
    
            //Write a file in an async way (the right way)
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302; //302 = Redirection status code
                res.setHeader('Location', '/');
                return res.end();
            });
    
            
        });    
    }
    
    //Manage response: 3 pasos
    res.setHeader("Content-Type", "text/html"); //1 - Set headers
    res.write("<html>"); //2 - Escribir respuesta
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my server</h1></body>");
    res.write("</html>");
    res.end(); //3 - cerrar
};

//Exportar un modulo
module.exports = requestHandler;