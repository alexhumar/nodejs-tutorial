/* Se debe ejecutar despues del insert.big.js*/
'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/accounting', function(err, connection){
    var customers = connection.collection('customers');

    customers.createIndex('v', function(err, indexName){
        connection.close();
    });
});