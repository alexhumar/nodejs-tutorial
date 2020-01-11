'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/accounting', function(err, connection){
    var customers = connection.collection('customers');
    console.log(err);

    var doInsert = function(i){
        if(i<200000) {
            var value = Math.floor(Math.random() * 10);

            customers.insert({'n': '#' + i, 'v': value}, function(err, count){
                doInsert(i+1);
            });
        } else {
            connection.close();
        }
    };

    customers.remove({}, function(err){
        doInsert(0);
    });
});