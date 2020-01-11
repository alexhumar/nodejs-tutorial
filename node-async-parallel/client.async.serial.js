/*Mediante async.series ejecutamos cada funcion asincronica en el orden especificado en el primer
parametro, en forma secuencial. En el caso que una de las funciones retorne un valor no nulo a su 
callbak, se interrumpe la ejecucion de la serie, y el callback final se invoca con los resultados
obtenidos hasta el momento, en donde el parametro err tendra el error que sucedio.*/

'use strict';

var request = require('request');
var async = require('async');

var name, status;
var url = 'http://localhost:8888/';

var getUserName = function(callback){
    request.get(url + 'getUserName?id=1234', function(err, res, body){
        var result = JSON.parse(body).value;
        console.log('Name: ' + result);
        callback(err, result);
    });
};

var getUserStatus = function(callback){
    request.get(url + 'getUserStatus?id=1234', function(err, res, body){
        var result = JSON.parse(body).value;
        console.log('Status: ' + result);
        callback(err, result);
    });
}

var getUserCountry = function(callback){
    request.get(url + 'getUserCountry?id=1234', function(err, res, body){
        var result = JSON.parse(body).value;
        console.log('Country: ' + result);
        callback(err, result);
    });
}

var getUserAge = function(callback){
    request.get(url + 'getUserAge?id=1234', function(err, res, body){
        var result = JSON.parse(body).value;
        console.log('Age: ' + result);
        callback(err, result);
    });
}

async.series([getUserName, getUserStatus, getUserCountry, getUserAge], function(err, results){
    /*NOTA: si no ocurrio ningun error, err es null*/
    /*Se procesan los resultados... */
    for(var i=0; i < results.length; i++) {
        console.log(results[i]);
    }
});