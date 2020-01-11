'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alexhumar'
});

connection.query('CREATE DATABASE node', function(err){
    if(err) {
        console.log('No pudo crearte la BD: ' + err);
    }
});

connection.query("USE node", function(err){
    if(err) {
        console.log('No se pudo switchear a la BD: ' + err);
    }
});

connection.query('CREATE TABLE test (id INT(11) AUTO_INCREMENT, ' +
                ' content varchar(255), PRIMARY KEY(id))', function(err){
                    if(err) {
                        console.log('No pudo crearse la tabla test: ' + err);
                    } 
                });

connection.query('INSERT INTO test (content) VALUES ("Hello")');
connection.query('INSERT INTO test (content) VALUES ("World")');

connection.end();