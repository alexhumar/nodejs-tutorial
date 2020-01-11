var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request para " + pathname + " recibido.");

        var requestData = "";
        request.setEncoding("utf-8");


        /*Para no bloquear el proceso NODE, el request se recibe de a pedazitos,
        porque si es algo por post puede que sea grande para procesar y bloquee
        al proceso NODE.*/
        request.addListener("data", function(dataChunk){
            requestData += dataChunk;

            console.log("Pedazo de dato recibido " + requestData);

        });

        /*Ya fue recibido todo el request http*/
        request.addListener("end", function(){
            console.log("Requerimiento totalmente recibido " + pathname);

            route(pathname, handle, response, requestData);
        });
    }

    http.createServer(onRequest).listen('8888');
    console.log("Servidor inicializado...");
}

exports.start = start;