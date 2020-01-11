var exec = require("child_process").exec;
var view = require("./view");
var querystring = require("querystring");
var formidable = require("formidable");
var fs = require('fs');

function start(response, request){
    console.log("Manejando requerimiento para /start");

    /*var content = "empty";
    
    exec("find /",
        { timeout: 10000, maxBuffer: 20000*1024}, 
        function(error, stdout, stderr){
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write(stdout);
            response.end();
    });*/

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(view.start_view());
    response.end();
}

function upload(response, request){
    console.log("Manejando requerimiento para /upload");

    //response.write("Escribiste: " + querystring.parse(requestData).text);
    var form = new formidable.IncomingForm();
    console.log("Comenzando a parsear...");
    form.parse(request, function(error, fields, files){
        console.log("Parseo terminado...");

        /*Esto es para corregir un posible error en Windows cuando se trata de 
        renombrar un archivo existente.*/
        fs.rename(files.upload.path, "/tmp/test.png", function(error){
            if (error) {
                fs.unlink("/tmp/test.png");
                fs.rename(files.upload.path, "/tmp/test.png");
            }
        });
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("Imagen recibida: <br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response, request) {
    console.log("Manejando requerimiento para /show");

    response.writeHead(200, { "Content-Type": "image/png"});
    fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;