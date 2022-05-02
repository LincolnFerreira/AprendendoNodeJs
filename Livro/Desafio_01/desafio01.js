const http = require('http');
const fs = require('fs');

server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": 'text/html',
    });
    if (req.url == '/artigos' ||  req.url == '/artigos.html' || req.url == '/') {
        fs.readFile('artigos.html', (err, arquivo) => {
            res.end(arquivo);
        });

    } else if (req.url == '/contato' ||  req.url == '/artigos.html') {
        fs.readFile('contato.html', (err, arquivo) => {
            res.end(arquivo);
        });

    } else {
        fs.readFile('erro.html', (err, arquivo) => {
            res.end(arquivo);
        });


    }

}).listen(3202, console.log('SERVIDOR CONFIGURADO NA PORTA 3202'));