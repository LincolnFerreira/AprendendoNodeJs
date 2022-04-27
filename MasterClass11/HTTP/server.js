//requisição de modulos
const http = require('http');
const fs = require('fs');
const path = require('path');

//criando servidor
http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url;
    const filePath = path.join(__dirname, 'public', file);
    const extname = path.extname(filePath)

    const allowedFileTypes = ['html', '.css', '.js']
    const allowed = allowedFileTypes.find((item) == extname)

    if(!allowed) return
    fs.readFile(
        //aqui vvvvvv ele está forçando a chamar o html index.html
        //path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
            if(err) throw err

            res.end(content)
            }
        )
    
    //criando funcao para ouvir o servidor na porta 5000
}).listen(5000, () => console.log('Server is running'))