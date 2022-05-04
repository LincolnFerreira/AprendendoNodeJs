const express = require('express');
const rotas = express.Router();

let cursosInfo = [
    {'curso':'node','info':'Curso de Node'},
    {'curso':'node express','info':'Curso Node Express'},
    {'curso':'banco de dados','info':'Curso Banco de dados'},
    {'curso':'mysql2','info':'Curso Mysql2'},
    {'curso':'html css js','info':'Curso Html Css Js'},
]
//informando a raiz
rotas.get('/',(req,res)=>{
    res.json({ola:"Seja Bem vindo"})
})

rotas.get('/:cursoid',(req,res)=>{
    //ele está armazenando o que foi escrito no /:cursoid
    const curso = req.params.cursoid;
    //encontrando pelo método find se tem alguém com o nome de um dos cursos citado acima
    const cursoI = cursosInfo.find(i => i.curso == curso);
    if(!cursoI){
        res.status(404).json(
            {erro:'Curso não encontrado', cursoPesquisado:curso}
        );
    }else{
        res.status(200).json(cursoI)
    }
})
module.exports = rotas;