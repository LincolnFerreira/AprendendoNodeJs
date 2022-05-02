const http = require('http');
const fs = require('fs');

for(var i = 1; i<= 5; i++){
    var file = "sync-txt" + i + ".txt";
    var saida = fs.writeFile(file, `Hello Node.js ${i}`);
    console.log(saida);
}