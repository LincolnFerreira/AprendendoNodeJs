    const os = require('os');
    const log = require('./logger');
    
    // está fazendo o código rodar novamente a cada 1s
    setInterval(() => {
    //desestruturação
    const { freemem, totalmem } = os;

    const memoriaLivre = parseInt(freemem() / 1024 / 1024);
    const memoriaTotal = parseInt(totalmem() / 1024 / 1024);
    const percentualMemoria = parseInt((memoriaLivre / memoriaTotal) * 100);
    const cpu = os.cpus()[0];
    const status = {
        Memoria_livre: `${memoriaLivre} MB`,
        Memoria_total: `${memoriaTotal} MB`,
        percentual_de_memoria: `${percentualMemoria}%`,
    }



    // console.log(memoriaLivre, memoriaTotal, percentualMemoria, os.cpus()[0] );
    console.clear();
    console.table(status);
    // console.table(cpu);

    log(`${JSON.stringify(status)}\n`)
    }, 2000)