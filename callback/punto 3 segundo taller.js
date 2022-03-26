//pilas modificar este punto para obtener el punto 3

//Datos semilla
let nombres=['juanjo jr', 'tyron','maxy','joan']
let cursos=['avanzada', 'nuevas','moviles III']

//Numeros aleatorios donde su limite esta dado por la longitud del arreglo
let numero=Math.floor(Math.random()*nombres.length)
let numero2=Math.floor(Math.random()*cursos.length)

//imprimiendo un elemento de las semillas de forma aleatoria
console.log(nombres[numero])
console.log(cursos[numero2])

let estudiantes=[]

for(let i=0; i<1000; i++){
//si voy a llenar un arreglo de objetos el objeto vacio se crea dentro del for
    let estudiante={}
    //llenando 1 objeto estudiante

    estudiante.nombre=nombres[Math.floor(Math.random()*nombres.length)]
    estudiante.curso=cursos[Math.floor(Math.random()*cursos.length)]

    //agregando el objeto estudiante al arreglo estudiante
    estudiantes.push(estudiante)


}
console.log(estudiantes)