//requisição de módulos
const http = require('http');
const url = require('url');

// criação do servidor protocolo HTTP
var server = http.createServer((req,res) =>{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Dados da query string</h1>");
    var result = url.parse(req.url, true);
    for(var key in res.query){
        res.write("<h2>"+key+" : "+result.query[key]+"</h2>");
    }
    res.end();
});
server.listen(3201,console.log(`Servidor rodando na PORTA 3201`));