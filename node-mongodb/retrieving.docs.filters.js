'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/accounting', function(err, connection){
    if (err) {
        console.log('Error al intentar obtener la conexion: ');
        console.log(err);
    } else {
        var customers = connection.collection('customers');
        
        /*customers.find({'v': 5}).toArray(function(err, documents){*/ /*Devuelve todos cuyo atributo v sea 5*/
        /*customers.find(
            {
                'v': {'$lt': 8},
                'valuable': true
            }
        ).toArray(function(err, documents){*/ /* Devuelve aquellos donde v es menor a 8 y valuable es true. Funciona como AND */
        /*customers.find(
            {
                '$or': [
                    {'v': 5},
                    {'v': 6}
                ]
            }
        ).toArray(function(err, documents){*/ /* Devuelve aquellos donde v es 5 o es 6 */
        /*customers.find(
            {
                'v': {'$gt': 3},
                '$or': [
                    {'n': '#6'},
                    {'n': '#1'}
                ]
            }
        ).toArray(function(err, documents){*/ /*Devuelve aquellos donde v es mayor a 3 AND (n es #6 OR n #1)*/
        /*customers.find(
            {
                'n': /^#1/
            }
        ).toArray(function(err, documents){*/ /* Para consultar sobre strings se usan expresiones regulares.
            Ej, aquellos en donde n comienza con #1 */
        /*customers.find(
            {
                'n': /^#1/
            },
            {
                'limit': 5,
                'skip': 2,
                'sort': 'v'
            }
        ).toArray(function(err, documents){*/ /* Devuelve aquellos donde n comienza con #1 y ademas recibe un parametro de opciones,
            relativas a la consulta. En este caso, que se limite a 5 registros, que saltee los primeros dos y que ordene por el campo v. */
        
        /* Este ultimo es similar al anterior, solo que define mas de un criterio de ordenamiento. */
        customers.find(
            {
                'n': /^#1/
            },
            {
                'limit': 5,
                'skip': 2,
                'sort': [['v', 'asc'], ['n', 'desc']]
            }
        ).toArray(function(err, documents){
            if(err){
                console.log('Se produjo un error: ');
                console.log(err);
            } else {
                console.dir(documents);
                connection.close();
            }
        });
    }
});