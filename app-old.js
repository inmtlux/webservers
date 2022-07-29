const http = require('http');

http.createServer((req, res)=>{//todo la solicitud a mi webeser se encuentra en req y la res EXPRESS

    // res.writeHead(200,{'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')//hara un archivo q se descrgara y este es
    // res.writeHead(200,{'Content-Type': 'application/csv'});
    
    res.write('holamundo')
    res.end();
})
.listen(8090);

console.log('escuchando el puerto',8090);