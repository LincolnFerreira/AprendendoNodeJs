const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": 'text/html',
    });
    if (req.url === '/') {
        fs.readFile('public/index.html', (err, arquivo) => {
            res.write(arquivo);
            res.end();
        });

    } 
    

}).listen(3204, console.log('SERVIDOR CONFIGURADO NA PORTA 3204'));