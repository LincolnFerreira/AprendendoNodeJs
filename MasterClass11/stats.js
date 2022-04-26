    const os = require('os');

    //desestruturação
    const { freemem, totalmem } = os;

    const memoriaLivre = parseInt(freemem() / 1024 / 1024);
    const memoriaTotal = parseInt(totalmem() / 1024 / 1024);
    const percentualMemoria = parseInt((memoriaLivre / memoriaTotal) * 100);
    const cpu = os.cpus()[0];
    const status = {
        livre: `${memoriaLivre} MB`,
        total: `${memoriaTotal} MB`,
        percentual: `${percentualMemoria}%`,
    }


    // console.log(memoriaLivre, memoriaTotal, percentualMemoria, os.cpus()[0] );
    console.table(status);
    console.table(cpu);
