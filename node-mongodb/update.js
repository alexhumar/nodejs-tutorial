'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/accounting', function(err, connection){
    if (err) {
        console.log('Error al intentar obtener la conexion: ');
        console.log(err);
    } else {
        var customers = connection.collection('customers');
        
        /* Por defecto MongoDB realiza el update sobre el primer documento que matchea. con multi: true, se le indica que actualice todos.*/
        customers.update(
            {},
            {'$set': {'age': 24}}
            , {'multi': true}
            , function(err, count){
            if(err) {
                console.log('Error al intentar hacer update: ');
                console.log(err);
            } else {
                customers.find().toArray(function(err, documents){
                    if(err) {
                        console.log('Error al recuperar documentos actualizados: ');
                        console.log(err);
                    } else {
                        console.dir(documents);
                        connection.close();
                    }
                });
            }
        });
    }
});