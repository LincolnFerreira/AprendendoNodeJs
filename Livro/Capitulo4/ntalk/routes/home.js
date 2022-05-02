module.exports = (app) =>{
  //É aqui que a controller está sendo parametrizada como um objeto para o app
  var home = app.controllers.home;
  app.get('/', home.index);
  app.post('/entrar', home.login);
  app.get('/sair', home.logout);
};
