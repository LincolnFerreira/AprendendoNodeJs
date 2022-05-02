const http = require('http');
const fs = require('fs');
const { listenerCount } = require('process');
//assíncrono não executa operações hierarquicamente
var server = http.createServer((req,res) =>{
    fs.readFile(__dirname + '/index.html', (err, html) =>{
    res.writeHeader(200, {'Content-Type' : 'text/html'});
    res.write(html);
    res.end();
    });
}).listen(3202, console.log('SERVIDOR RODANDO NA PORTA 3202'))