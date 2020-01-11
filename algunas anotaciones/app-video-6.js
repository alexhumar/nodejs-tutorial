//Keyword this - hace referencia a lo que llamo al bloque de codigo donde se
//esta invocando el this.
var Alex = {
  printFirstName: function(){
    console.log("Alex");
    console.log(this === Alex); //Da true
    console.log(this); //Da informacion sobre Alex
  }
}

Alex.printFirstName();

//El contexto de invocacion por defecto es global
function doSomethingWorthless(){
  console.log("Soy inservible");
  console.log(this === global);
  console.log(this); //Da informacion sobre el contexto de ejecucion.
}

doSomethingWorthless();
