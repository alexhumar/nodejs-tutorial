function placeAnOrder(orderNumber){
  console.log("Customer order: ", orderNumber);

  cookAndDeliverFood(function(){
    console.log("Delivered food, order", orderNumber);
  });
}

//Simula una operacion de 5 segundos
function cookAndDeliverFood(callback){
  //Planifica la ejecucion de callback para dentro de 2 seg.
  setTimeout(callback,2000);
}


/*Ejemplo que muestra como sería atender ordenes simultaneamente, para dar
todas las respuestas en 2 seg aprox, en vez de tardar 10 seg por atenderlas
secuencialmente.*/
//Simulate orders
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
