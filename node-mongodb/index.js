'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/accounting', function(err, connection){
    if (err) {
        console.log('Error al intentar obtener la conexion: ');
        console.log(err);
    } else {
        var customers = connection.collection('customers');
        
        customers.insert({'name': 'Jane Doe'}, function(err, count){
            if (err) {
                console.log('Error al intentar insertar el customer: ');
                console.log(err);
            } else {
                customers.find().toArray(function(err, documents){
                    if (err) {
                        console.log('Error al intentar recuperar los documentos de la coleccion customers: ');
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