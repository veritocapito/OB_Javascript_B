//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let nombre = "Veronica";
let apellido = "Capobianco";
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let letras = estudiante.length;
let primeraLetra = nombre[0];
let ultimaLetra = apellido[apellido.length-1];
let sinEspacios = `${nombre}${apellido}`;
let consultaNombre = estudiante.includes(nombre);



console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(letras)
console.log(primeraLetra)
console.log(ultimaLetra)
console.log(sinEspacios)
console.log(consultaNombre)

