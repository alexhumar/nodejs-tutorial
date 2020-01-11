'use strict';

/*Estrategia de consumo de servicio "anidada". Es simple, pero como realiza los llamados en forma
secuencial (es decir, que el segundo request lo ejecuta una vez que el primero se completo), es lenta. 
Se puede probar en la consola ejecutando time node client.js*/
var request = require('request');
request.get('http://localhost:8888/getUserName?id=1234', function(err, res, body){
    var result = JSON.parse(body);
    var name = result.value;

    request.get('http://localhost:8888/getUserStatus?id=1234', function(err, res, body){
        var result = JSON.parse(body);
        var status = result.value;

        console.log('The status of the user ', name, ' is ', status);
    });
});