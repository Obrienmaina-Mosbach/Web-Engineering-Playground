const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const serveHtml = (res, fileName) => {
    const filePath = path.join(__dirname, fileName);
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
};

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
        case '/index.html':
            serveHtml(res, 'index.html');
            break;
        case '/about':
        case '/about.html':
            serveHtml(res, 'about.html');
            break;
        case '/contact-me':
        case '/contact-me.html':
            serveHtml(res, 'contact-me.html');
            break;
        case '/404':
        case '/404.html':
            serveHtml(res, '404.html');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
