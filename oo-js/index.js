/*Functionamiento y uso de prototype.*/

var Car = function(name){
    this.name = name;
};

Car.prototype.drive = function(){
    console.log("Car drive! " + this.name);
}

Car.prototype.stop = function(){
    console.log("Car stop! " + this.name);
}

/*Tanto myCar como yourCar apuntan al mismo drive y stop.
Funcionamiento del interprete: cuando se invoca drive o stop, primero
lo busca en el objeto Car. Si no lo encuentra, va a buscarlo al objeto prototype.*/
var myCar = new Car("Alex");
var yourCar = new Car("Ro");

myCar.drive();
myCar.stop();

yourCar.drive();
yourCar.stop();

/*Los objetos pueden cambiar dinamicamente el comportamiento de sus metodos,
modificando el metodo en cuestion en el prototype asociado.*/
Car.prototype.drive = function(){
    console.log("Car new drive!!");
}

myCar.drive();
yourCar.drive();

/*Implementacion de herencia */
var RacingCar = function(){};

RacingCar.prototype = new Car("Alex Racing");

RacingCar.prototype.driveFast = function(){
    console.log("Racing Car Drive Fast!! " + this.name);
}

var myRacingCar = new RacingCar();

myRacingCar.driveFast();
myRacingCar.drive();
myRacingCar.stop();