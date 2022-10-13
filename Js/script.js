// debugger

// Se Realiza una variable, donde se calcula la mayoría de edad.
function entrada() {
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
function Drink() {
  let bebida = prompt(
    "Ingrese su bebida, puede ser por ejemplo FERNET o RON, para terminar ingrese: ESC"
  );
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
    bebida = prompt("Ingrese su bebida, para terminar ingrese: ESC");
  }
}
Drink();

//SE AGREGA UN OBJETO
class Trago {
  constructor(nombre, compuesto, acompaniado, garnish, precio) {
    this.nombre = nombre.toUpperCase();
    this.compuesto = compuesto;
    this.acompañado = acompaniado;
    this.garnish = garnish;
    this.precio = parseFloat(precio);
  }
  precioHappyHour() {
    this.precio = this.precio / 1.5;
  }
}

const trago1 = new Trago(
  "Old fashioned",
  "Bourbon",
  "Angostura",
  "Rodaja de naranja",
  1100
);
const trago2 = new Trago(
  "Fernet con Coca",
  "Fernet Branca",
  "Coca-Cola",
  "Espuma y Hielo",
  800
);

// SE AGREGA UN ARRAY
const carta = [trago1, trago2];
carta.push(
  new Trago("Garibaldi", "Campari", "Jugo de Naranja", "Rodaja de Naranja", 850)
);

for (const producto of carta) producto.precioHappyHour();

const drinks = [
  { id: 1, tragoNew: "Negroni Sbagliato", price: 400 },
  { id: 2, tragoNew: "Old Fashioned", price: 900 },
  { id: 3, tragoNew: "Sol Y Sombra", price: 1000 },
  { id: 4, tragoNew: "Sex On The Beach", price: 350 },
];

function buscarProducto() {
  let buscar = prompt("Ingresa el producto a buscar. \nLas opciones son: Negroni Sbagliato, Old Fashioned, Sol Y Sombra, Sex On The Beach");

  let resultadoTrago = drinks.find(drinks => drinks.tragoNew === (buscar));
      if (resultadoTrago === undefined) {
          console.warn("No se encontró el producto")
      } else {
          console.log(resultadoTrago)
      }
}
buscarProducto();