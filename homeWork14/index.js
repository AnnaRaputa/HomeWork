//const fs = require('fs');

//fs.appendFileSync('text.txt', '\n А этот тут ниже');

const http = require('http');
const fs = require('fs');
const indexHtml = fs.readFileSync('./index.html');

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write('Hello Word');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200);
        console.log(req.method);
        console.log(req.headers);
        console.log(req.url);
        res.write('About us');
        res.end();
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end(indexHtml);
    }
    
}).listen(3000, function () {
    console.log('Server at http://localhost:3000');
    

});
