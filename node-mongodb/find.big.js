/* Se debe ejecutar despues del insert.big.js*/
'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/accounting', function(err, connection){
    var customers = connection.collection('customers');

    customers.find(
        {'v': {'$gt': 3}},
        {
            'skip': 100000,
            'limit': 10,
            'sort': 'v'
        }
    ).toArray(function(err, documents){
        console.log(err);
        console.dir(documents);
        connection.close();
    });
});