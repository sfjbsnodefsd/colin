//console.log("hello world");

const http = require('http');

function greet(req,resp){
    resp.write("<h1>hello new world</h1>")
    resp.end();
}
http.createServer(greet).listen(5000);
