//- La fecha de hoy
const fecha = new Date()
console.log(fecha)


//- La fecha de tu nacimiento
const nacimiento = new Date(1980,10,22,12,59)
console.log(nacimiento)


//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const consulta = fecha.getTime() > nacimiento.getTime() 
console.log(consulta)


//- Una variable que contenga el día de tu nacimiento
const diaNacimiento = nacimiento.getDate()
console.log(diaNacimiento)


//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = nacimiento.getMonth() + 1
console.log(mesNacimiento)


//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNacimiento = nacimiento.getFullYear()
console.log(anyoNacimiento)

