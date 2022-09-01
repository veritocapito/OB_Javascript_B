//- Una función sin parámetros que devuelva siempre "true"

function nueva (){
    return true
}

nueva()
console.log(nueva())



//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function asincrona() {
    console.log("Hola soy una promesa")
};

setTimeout(asincrona, 5000)


//- Una función generadora de índices pares automáticos

function* indicesPares(){
    
    for (let i = 0; i <= 10; i+=2){
        yield i 
    }
}

const generator = indicesPares()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())