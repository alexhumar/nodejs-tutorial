//En node todo es una referencia
var Alex = {
  favFood: "Fideos",
  favMovie: "Lord of the rings"
};

//Esto no haria una copia del objeto sino de la referencia
var person = Alex;
person.favFood = "Ensalada";
console.log(Alex.favFood);


//Diferencia entre == y ===
/*Da true, porque con == solo compara los valores, por mas que uno sea numero y
el otro string.*/
console.log(19 == '19');

/*Da false, porque con === compara valores y ademas los tipos.*/
console.log(19 === '19');
