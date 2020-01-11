'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'alexhumar'
});

/*Params: err, es null si no hubo error, sino contiene el error.
          results: es un array de objects donde cada object representa una fila del resultado.
          fields: es un array de objects donde cada object contiene informacion sobre uno de los 
          fields que se devuelven en la consulta. */
connection.query('SELECT "foo" as first_field, "bar" as second_field', function(err, results, fields){
    if (err) {
        console.log(err);
    } else {
        console.log(results);
        console.log(results[0].first_field);
        connection.end();
    }
});