// debugger

// Se Realiza una variable, donde se calcula la mayoría de edad.
function entrada(){

  let nombre = prompt("ingrese su nombre, por favor: ");
  let edadUsr = parseInt(prompt("Ingrese su edad, por favor: "));
  const edad = 21;
  
  if (edad <= edadUsr) {
    console.log("Bienvenido " + nombre + "!");
  } else {
    console.warn("No podes entrar " + nombre + "!");
  }
}
entrada();

//Se realiza un ciclo para elegir que tomar.
function Drink(){
  let bebida = prompt("Ingrese su bebida, puede ser por ejemplo FERNET o RON, para terminar ingrese: ESC");
  while (bebida !== "ESC") {
    switch (bebida) {
      case "FERNET":
      case "fernet":
        alert("Elegiste Fernet");
        console.log("Elegiste Fernet");
        break;
      case "CERVEZA":
      case "cerveza":
        alert("Elegiste Cerveza");
        console.log("Elegiste Cerveza");
        break;
      case "GIN":
      case "gin":
        alert("Elegiste Gin");
        console.log("Elegiste Gin");
        break;
      case "RON":
      case "ron":
        alert("Elegiste Ron");
        console.log("Elegiste Ron");
        break;
      default:
        alert("No nos quedó 🤷‍♂️");
        break;
    }
    bebida = prompt("Ingrese su bebida, para terminar ingrese: ESC")
  }
}
Drink();