var http = require("http");
var url = require("url");
var qs = require("querystring");
var router = require("./router");

//Asi como esta, funciona bien para una URL del tipo
//http://localhost:8888/locura?name=Alex&surname=Humar
function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var query = url.parse(request.url).query;
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hola mundo de Alex!");
        response.write(pathname);
        response.write(query);
        response.write(qs.parse(query)["surname"]); //Tiene que exisir y llamarse asi, sino tira excep..
        response.end();

        router.route(pathname);
    }

    http.createServer(onRequest).listen('8888');
    console.log("Servidor inicializado...");
}

exports.start = start;