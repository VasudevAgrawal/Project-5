// app.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from Vasudev CI/CD 🚀");
});

server.listen(3000);