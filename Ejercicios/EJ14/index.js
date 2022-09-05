const f = document.getElementById("formulario")

console.log(f)

f.addEventListener("click", (evento) =>{
    console.log(evento)
    evento.preventDefault()
    alert("Hacer click en el boton!")

})

$(() =>{
    
    $("#btn").click(console.log("Hola, estoy utilizando jQuery"))
})
