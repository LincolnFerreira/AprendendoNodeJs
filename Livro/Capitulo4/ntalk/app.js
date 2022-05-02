const express = require('express'),
      load = require('express-load'),
      app = express();

    // ... stack de configurações do servidor...
    load('models')
    .then('controllers')
    .then('routes')
    .into(app);
    
//set e uma estrutura de chave e valor mantida dento da variavel app 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'),
app.use(express.static(__dirname + '/public'));
/* sempre um roteamento GET, POST, PUT e DELETE associam o primeiro parâmetro a uma string de
 rota e segundo uma função callback que contem umva requisição e resposta */
app.get('/', routes.index);
app.get('/usuarios', routes.user.index);

app.listen(3000, () =>{
  console.log('Servidor do nTalk online na porta 3000');
})