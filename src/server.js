const http = require('http');
const fs = require('fs');
const path = require('path');

let mimeTypes = {
    js: 'application/javascript',
    html: 'text/html',
    css: 'text/css',
    jpg: 'image/jpeg',
    png: 'image/png'
}

let sendFile = (fileName, res) => {
    let filePath = path.join(__dirname, "../dist/" + fileName);
    let stat = fs.statSync(filePath);

    let extension = path.extname('index.html').substr(1);

    console.log("stat", stat, filePath);

    res.writeHead(200, {
        'Content-Type': mimeTypes[extension],
        'Content-Length': stat.size
    });
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
}

let handleRequest = (req, res) => {
    if(req.url == "/"){
        sendFile("index.html", res);
    }else if(req.url.endsWith(".js")){
        sendFile(req.url.substr(1), res);
    }else{
        res.writeHead(404, {
        });
        res.end();
    }
}

const server = http.createServer((req, res) => {
    console.log("req", req.url);
    handleRequest(req, res);
});

server.listen(1234, 'localhost', () => {
    console.log("server is listending at http://localhost:1234. Have a nice day.");
});