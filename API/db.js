//conexão com banco de dados usando async
const conectar = async () =>{
    //verificação... se não estiver conectado, ele vai mandar conectar
    if(global.conexao && global.conexao.state !='disconected')
        return global.conexao;
    const mysql = require('mysql2/promise');
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "admin123@",
        database: 'projetoindividual'
    });
    console.log('Conectou ao banco com sucesso!!!');
    global.conexao=con;
    return con;


}
const todosClientes = async() =>{
    const con = await conectar();
    const [linhas] = await con.query('Select * from usuario');
    return await linhas
}
module.exports = {todosClientes}