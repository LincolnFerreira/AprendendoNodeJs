const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{
        'Content-Type' : 'text/plain'
    });
    res.write('CURSO');
    res.end();
}).listen(3000, console.log('servidor rodando com a PORTA 3000'));