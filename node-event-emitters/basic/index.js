/*Los event emitters nos brindan una forma elegante de crear listeners para varios
eventos, asociando a cada uno de ellos uno o varios callbacks.*/

'use strict';

var fs = require('fs');

var stream = fs.createReadStream('./testfile');

var content = '';

/*Si no se tiene un listener para error y sucede justamente un error, Node
arroja una excepcion.*/
stream.on('error', function(err){
    console.log('Sad panda: '  + err);
});

/*Este evento puede ejecutarse varias veces, dependiendo del tamaño del archivo.
Trae el contenido de a partes para bloquear lo menos posible el proceso Node.*/
var data_callback = function(data) {
    content = content + data;
};

stream.on('data', data_callback);

/*Se invoca cuando todo el contenido del archivo fue recuperado.*/
stream.on('end', function(){
    console.log('File content has been retrieved: ' + content);
});

/*Tambien se pueden quitar listeners. Pero para eso los callbacks no deben ser
funciones anonimas... */
//stream.removeListener('data', data_callback);

/*Tambien se pueden quitar todos los listeners para un evento...*/
//stream.removeAllListeners('data');