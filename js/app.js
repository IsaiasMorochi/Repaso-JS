/**
 * Variables
 */
var var1 = 1;
var1 = "Hola mundo";

console.log("====================================");
console.log(var1);
console.log("====================================");

const var2 = "Hola";
// var2 = true;

console.log("genera un error por que la constante no puede cambiar");
console.log(var2);
console.log("====================================");

let var3 = 1;
var3 = "Hola mundo";

console.log("====================================");
console.log(var3);
console.log("====================================");

// scope es saber en parte esta disponible o no disponible
var var4 = "Rock";
if (var4) {
  var var4 = "Romantica";
  console.log("====================================");
  console.log("Dentro del if: " + var4);
  console.log("====================================");
}
console.log("====================================");
console.log("Fuera del if: " + var4);
console.log("====================================");

//En let y const el valor de una variables es local.
const var5 = "Rock";
if (var5) {
  //al estar dentro la detecta como diferente.
  const var5 = "Romantica";
  console.log("====================================");
  console.log("Dentro del if: " + var5);
  console.log("====================================");
}
console.log("====================================");
console.log("Fuera del if: " + var5);
console.log("====================================");

let var6 = "Rock";
if (var6) {
  // el valor de la variable es local y no global
  let var6 = "Romantica";
  console.log("========+===========================");
  console.log("Dentro del if: " + var6);
  console.log("====================================");
}
console.log("====================================");
console.log("Fuera del if: " + var6);
console.log("====================================");

/**
 * template string
 */
const nombre = "Isaias";
const trabajo = "Desarrollador Web";

console.log("====================================");
console.log("Nombre: " + nombre + ", Trabajo: " + trabajo);
console.log("====================================");

// todo dentro de ` ` es tratado como template string
console.log("====================================");
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);
console.log("====================================");

const contenedorApp = document.querySelector("#app");
let ok =
  "<ul>" +
  "<li> Nombre: " +
  nombre +
  "</li>" +
  "<li> Trabajo: " +
  trabajo +
  "</li>" +
  "<ul>";

let html = `
            <ul>
                <li> Nombre: ${nombre} </li>
                <li> Trabajo: ${trabajo} </li>
            </ul>
        `;
contenedorApp.innerHTML = html;

/**
 * Funciones y tipos de funciones
 */

/**
 * Function Declaration
 * Nota: JS lee todas las funciones y luego las ejecuta,
 * por esto no importa si la llamamos a ejecutar antes o despues
 */

//saludar("Isaias");
function saludar(name) {
  console.log("====================================");
  console.log("Binvenido: " + name);
  console.log("====================================");
}
saludar("Isaias");

/**
 * Function Expression
 * Si o si la funcion debe ser llamada o ejecutada,
 * despues de crearla al contrario que las function declaration.
 */
const cliente = function(nombreCliente) {
  console.log("Mostrando datos del cliente: " + nombreCliente);
};
cliente("Isaias");

/**
 * Funciones con parametros por default
 */

function actividad(person = "Maria", activity = "Ensenar") {
  console.log(`La persona ${person}, esta realizando la actividad ${activity}`);
}
actividad("Isaias");

/**
 * Arrow functions
 */
/*
let viajando = function(destino) {
  return `Viajando a la ciudad de: ${destino}`;
};

// se remplaza la function por => y va a la derececha del parametro
let viajando = destino => {
  return `Viajando a la ciudad de: ${destino}`;
};

// al recibir mas parametros, necesario los parentesis
let viajando = (destino, duracion) => {
  return `Viajando a la ciudad de: ${destino} por ${duracion} Hrs.`;
};
*/

// simplica a una sola linea, ya que la arros function simpre retornan algo.
let viajando = (destino, duracion) =>
  `Viajando a la ciudad de: ${destino} por ${duracion} Hrs.`;

let viaje = viajando("Paris", "12:00");
console.log("====================================");
console.log(viaje);
console.log("====================================");

/**
 * Object Literal, pacceder al valor
 */
const persona = {
  nombre: "Isaias",
  profesion: "Desarrollador Full Stack",
  edad: 23
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
console.log(persona["edad"]);

/**
 * Object Construtor
 */
function Tarea(nick, urgencia) {
  this.nick = nick;
  this.urgencia = urgencia;
}

// crear una nueva tarea
const tarea1 = new Tarea("Aprender Js", "Urgente");

console.log("====================================");
console.log(tarea1);
console.log(tarea1.nick);
console.log("====================================");

/**
 * Prototype
 * permite
 */

/**
 * Agregando un prototype de tipo tarea, de esta manera
 * podemos atar ciertos funciones a ciertos tipos de objeto.
 * para que no se puedan modificar desde otro objeto diferente.
 */
Tarea.prototype.mostrarInformacionTarea = function() {
  return `La Tarea ${this.nick} tiene una prioridad de ${this.urgencia}`;
};

const tarea2 = new Tarea("Aprender React", "Urgente");
console.log("====================================");
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());
console.log("====================================");

/**
 * Object Destructuring
 */
