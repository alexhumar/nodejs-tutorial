/* Se debe ejecutar despues del insert.big.js*/
'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/accounting', function(err, connection){
    var customers = connection.collection('customers');

    /*.each es mas eficiente que .toArray para conjuntos de datos grandes ya que no aloca memoria para todo el conjunto de resultados,
    sino que va alocando por cada documento retornado, ya que el callback de each se llama por cada uno. Y ademas no bloqueamos el proceso
    node si tenemos que trabajar con ese conjunto de datos. Si nos llega un array de una, recorrerlo bloquearia bastante.
    Si document === null quiere decir que se llego al final del conjunto de resultados.*/
    var stream = customers.find(
        {'v': {'$gt': 3}},
        {
            'skip': 100000,
            'limit': 10,
            'sort': 'v'
        }
    ).stream();

    stream.on('data', function(document){
        console.dir(document);
    });

    stream.on('end', function(){
        console.log('Cerrando...');
        connection.close();
    });
});