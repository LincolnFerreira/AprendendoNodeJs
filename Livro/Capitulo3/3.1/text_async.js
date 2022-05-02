const http = require('http');
const fs = require('fs');

for(var i = 1; i<= 5; i++){
    var file = "async-txt" + i + ".txt";
    fs.writeFile(file, `Hello Node.js ${i}`, (err, saida) =>{
    console.log(saida);
        
    });
}