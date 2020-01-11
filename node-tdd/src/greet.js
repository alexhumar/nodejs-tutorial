/*Esto es para indicar que el codigo debe ejecutarse en modo estricto*/
'use strict';

var greet = function(name){
    if (name === undefined) {
        name = 'mundo';
    }
    return "Hola " + name + "!";
};

module.exports = greet;