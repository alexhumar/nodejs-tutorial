'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'alexhumar',
    database: 'node'
});

/* connection.query nos devuelve un objeto Query. Dicho objeto emite varios eventos que suceden
durante el tiempo de vida de la consulta: error, field, row y end */
var query = connection.query('SELECT id, content from test');

query.on('error', function(err){
    console.log('Ocurrio un error en la BD: ');
    console.log(err);
});

query.on('fields', function(fields){
    console.log('Informacion de fields recibida: ');
    console.log(fields);
});

/*Se dispara por cada row que recupera la consulta.*/
query.on('result', function(result){
    console.log('Fila recibida: ');
    console.log(result);
});

query.on('end', function(){
    console.log('Finalizo la ejecucion de la consulta...');
    connection.end();
});