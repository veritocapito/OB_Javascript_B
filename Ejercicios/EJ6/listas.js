// Ejercicio 6

const compra = [ 'papa', 'batata', 'lechuga', 'tomate', 'zanahoria']
console.log(compra)

compra.push('Aceite de Girasol')
console.log(compra)

compra.pop('Aceite de Girasol')
console.log(compra)

const peliculas = [ 
    { titulo:'Terminator', director: 'James Cameron', fecha: 1984},
    { titulo:'Matrix', director: 'Lana Wachowski', fecha: 1999},
    { titulo:'Divergente', director: 'Neil Burger', fecha: 2014}
]
console.log(peliculas)

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelisActuales = peliculas.filter( dato =>  dato.fecha > 2010 )
console.log(pelisActuales)

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map( dir => dir.director)
console.log(directores)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map( dir => dir.titulo)
console.log(titulos)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const nueva = directores.concat(titulos)
console.log(nueva)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const ultima = [ ...directores, ...titulos]
console.log(ultima)