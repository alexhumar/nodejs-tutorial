var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request para " + pathname + " recibido.");

        route(pathname, handle, response, request);
    }

    http.createServer(onRequest).listen('8888');
    console.log("Servidor inicializado...");
}

exports.start = start;