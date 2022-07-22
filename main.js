console.log("Running");

const http = require('http');

const listner = function (req,res) {
    res.write("Hey There NodeJS");
    res.end();
}

const server = http.createServer(listner);

server.listen(9000,function() {
    console.log("Server Running");
}) 