'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/accounting', function(err, connection){
    if (err) {
        console.log('Error al intentar obtener la conexion: ');
        console.log(err);
    } else {
        var customers = connection.collection('customers');
        
        var doFind = function(callback) {
            customers.find().toArray(function(err, documents){
                console.dir(documents);
                callback();
            });
        };

        var doInsert = function(i){
            if(i<20) {
                var value = Math.floor(Math.random() * 10);
                customers.insert(
                    {'n': '#' + i, 'v': value},
                    function(err, count){
                        doInsert(i + 1);
                    });
            } else {
                console.log();
                console.log('Inserted', i, 'documents');

                doFind(function(){
                    doUpdate();
                });
            }
        };

        var doUpdate = function() {
            customers.update(
                {'v': {'$gt': 5}},
                {'$set': {'valuable': true}},
                {'multi': true},
                function(err, count){
                    console.log();
                    console.log('Updated ', count, 'documents: ');
                    doFind(function(){
                        customers.remove({}, function(){
                            connection.close();
                        });
                    });
                });
        };

        doInsert(0);
    }
});