const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write("<html>"); 
        res.write("<head><title>Homework Page</title></head>");
        res.write('<body><h1>First Homework</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write("</html>");
        return res.end();
    }

    if(url === '/users'){
        res.write("<html>"); 
        res.write("<head><title>Homework Page</title></head>");
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write("</html>");
        return res.end();
    }

    if(url === '/create-user'){
        const messageRecieved = [];
        req.on('data', (chunk) => {
            messageRecieved.push(chunk);
        });

        return req.on('end', () => {
            const parseBody = Buffer.concat(messageRecieved).toString();
            const message = parseBody.split("=")[1];
            console.log(message);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
}

module.exports = requestHandler;