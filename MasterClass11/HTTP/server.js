//requisição de modulos
const http = require('http');
const fs = require('fs');
const path = require('path');

//criando servidor
http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url

    console.log(file)

    res.end("cheguei")


/*    if(req.url === '/'){
    fs.readFile(
        path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
            if(err) throw err

            res.end(content)
            }
        )
    }*/
    //criando funcao para ouvir o servidor na porta 5000
}).listen(5000, () => console.log('Server is running'))