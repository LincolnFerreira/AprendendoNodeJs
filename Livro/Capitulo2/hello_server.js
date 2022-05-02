const http = require('http');
    //callback 
    http.createServer((req,res) =>{
        res.writeHead(200, {"Content-Type" : "text/html"});
        if(req.url === '/'){    
        res.write("<h1>Ola Mundo!</h1>");
        }else if (req.url === '/login'){
            res.write("<h1> Pagina de Login!</h1>");
        }else if (req.url === '/cadastro'){
            res.write("<h1>Pagina de cadastro!</h1>");

        }else {
            req.write("<h1>Página não encontrada :(</h1>");
        }
        /*finaliza o single-thread OBS: levando em consideração que toda tarefa
        executada pelo node é executada, ela tambem precisa ser
        finalizada para que outra comece a rodar*/
        res.end();
    }).listen(3200,console.log('RODANDO NA PORTA 3200'));