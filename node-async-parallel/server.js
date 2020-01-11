/*Server que va a simular la llamada a servicios web, implementando una tarea sencilla ante un
request pero demorandolo para simular el timpo de respuesta de un servicio real.*/

'use strict';

var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;

    var id = querystring.parse(query)[id];

    var result = {
        'pathname': pathname,
        'id': id,
        'value': Math.floor(Math.random() * 100)
    };

    /*setTimeout(function() {*/ /*Le quito la tardanza para probar client.async.serial.js*/
       response.writeHead(200, { "Content-Type": "application/json"});
       response.end(JSON.stringify(result));
    /*}, 2000 + Math.floor(Math.random() * 1000));*/
}).listen(
    8888,
    function(){
        console.log('Echo Server listening on port 8888');
    }
);