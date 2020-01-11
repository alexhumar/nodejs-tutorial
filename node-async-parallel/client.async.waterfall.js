/*Mediante async.waterfall obtenemos un resultado similar al de async.series, con la diferencia de
que cada funcion puede consumir el o los valores retornados como parametro por la funcion anterior.*/

'use strict';

var request = require('request');
var async = require('async');

var name, status;
var url = 'http://localhost:8888/';

var getSessionID = function(callback){
    request.get(url + 'getSessionID', function(err, res, body){
        var sessionID = JSON.parse(body).value;
        console.log('Session Id: ' + sessionID);
        callback(err, sessionID);
    });
};

var getUserID = function(sId, callback){
    request.get(url + 'getUserID?sessionId=' + sId, function(err, res, body){
        var userID = JSON.parse(body).value;
        console.log('User Id: ' + userID);
        callback(err, sId, userID);
    });
};

var getUserName = function(sId, uId, callback){
    request.get(url + 'getUserName?userId=' + uId, function(err, res, body){
        var userName = JSON.parse(body).value;
        console.log('Name: ' + userName);
        callback(err, userName, sId);
    });
}

async.waterfall([getSessionID, getUserID, getUserName], function(err, name, sId){
    /*NOTA: si no ocurrio ningun error, err es null*/
    console.log('Name: ' + name);
    console.log('SessionId: ' + sId);
});