const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Welcome to node.js");
});

server.listen(3000);

console.log("Server Running");