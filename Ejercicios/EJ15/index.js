const nombre = 'Veronica'
const apellido = 'Capobianco'
const persona = { 'nombre': nombre, 'apellido': apellido}

localStorage.setItem("persona", persona)
console.log(persona)
console.log(localStorage.getItem("persona"))

sessionStorage.setItem("nombre-sesion", nombre)

document.cookie = "nombreCookie=VeritoCookie"
document.cookie = "Caducidad=caducidad;expires=" + new Date(2022,8,5, 18, 14).toUTCString()

console.log(document.cookie)

