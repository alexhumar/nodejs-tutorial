'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'alexhumar',
    database: 'node'
});

/*Params: err, es null si no hubo error, sino contiene el error.
          results: es un array de objects donde cada object representa una fila del resultado.
          fields: es un array de objects donde cada object contiene informacion sobre uno de los 
          fields que se devuelven en la consulta. */
connection.query('SELECT id, content from test', function(err, results, fields){
    if (err) {
        console.log(err);
    } else {
        console.log(results);
        
        /*BUCLE A*/
        for (var i=0; i < results.length; i++){
            console.log(results[i].content);
        }
        connection.end();
    }
});

/* BUCLE A: El codigo de arriba presenta una fuente potencial de bloqueo del proceso node en caso que el 
resultado de la consulta sea grande. Si la misma devuelve, por ej, un millon de registros, ese bucle
se va a ejecutar un millon de veces y como en node no hay dos piezas de codigo que se ejecuten al
mismo tiempo, se bloqueara el proceso node mientras este iterando, que puede ser varios segundos.
Por lo tanto, para subsanar el problema, hay que usar "mysql streaming api"...*/