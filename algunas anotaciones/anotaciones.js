/*Consideraciones importantes*/
/*Este codigo se va a ejecutar en EL SERVIDOR*/

/*Ejemplo simple*/
var person = {
  firstName: "Alex",
  lastname: "Humar",
  age: 28,
  homedata: {
    street: "Centenario",
    number: "5070"
  }
}
console.log(person);

/*Toda function que no tenga declarado explicitamente el return, devolvera
undefined*/
function worthless(){}

console.log(worthless());

/*Ejemplo de lo que se denomina como funcion anonima*/
anonima = function() {
  console.log('Esta es una funcion anonima');
}
anonima();

/*Uno de los motivos por las que usarlas es porque pueden pasarse como parametros
a otras funciones.*/
llamadora = function(llamada) {
  llamada();
}

llamadora(anonima);
