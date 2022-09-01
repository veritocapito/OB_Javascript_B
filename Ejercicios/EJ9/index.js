const logger = require('./logger');

logger.info("Hola, esto es un mensaje informativo")
logger.debug("Esto es un mensaje de debug")
logger.warn("Mensaje de advertencia")
logger.error("Esto es un error")

const num1 = 8;
const num2 = 2;

function restar(num1, num2){
    if (num1 > num2){
        return num1 - num2;
    }
    throw new Error("Hoy no queremos numeros negativos")
}

try {
    const resultado = restar(num1, num2)
    console.log(resultado)
    console.log("El resultado es positivo")
} catch (error) {
    console.error(`${error}`)
}