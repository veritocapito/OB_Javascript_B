//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const persona = {
    nombre: 'Veronica',
    apellido: 'Capobianco',
    edad: 41,
    eresDesarrollador: true
}


//- Una variable que obtenga tu edad a partir del objeto anterior

const anyos = persona.edad
console.log(anyos)


//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const misAmigos =  [{
    nombre: 'Fernanda',
    apellido: 'Levien',
    edad: 40,
    eresDesarrollador: false
},
{
    nombre: 'Leila',
    apellido: 'Shahid',
    edad: 39,
    eresDesarrollador: false
}]

const datos = new Array(persona)

const amigos = [...datos, ...misAmigos]
console.log(amigos)


//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const ordenados = [ amigos.sort((a,b) => a.edad + b.edad)]
console.log(ordenados)
