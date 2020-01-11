/*Se utiliza async para ejecutar tareas asincronicas en paralelo, delegando el control de flujo a
async. TENER EN CUENTA: el callback de parallel se ejecutara una vez que el servicio mas lento
finalice su ejecucion o apenas uno de los servicios retorne error. En este ultimo caso, todos los
results que no fueron seteados para ese momento permanecen sin setear.*/

'use strict';

var request = require('request');
var async = require('async');

var name, status;

var getUserName = function(callback){
    request.get('http://localhost:8888/getUserName?id=1234', function(err, res, body){
        var result = JSON.parse(body);

        callback(err, result.value);
    });
};

var getUserStatus = function(callback){
    request.get('http://localhost:8888/getUserStatus?id=1234', function(err, res, body){
        var result = JSON.parse(body);

        callback(err, result.value);
    });
}

async.parallel([getUserName, getUserStatus], function(err, results){
    /*NOTA: si no ocurrio ningun error, err es null*/
    console.log('The status of user ', results[0], 'is' , results[1]);
});