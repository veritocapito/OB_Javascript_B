class Estudiante {
    
    constructor (nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = ['Javascript', 'HTML', 'CSS']
    }

    obtenDatos(datos){
        return datos = { nombre: this.nombre, asignaturas: this.asignaturas}
    }

}

const estudiante = new Estudiante("Vero")

const consulta = estudiante.obtenDatos()
console.log(consulta)