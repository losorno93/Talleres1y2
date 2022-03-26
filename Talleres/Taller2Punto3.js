/*PROBLEMA: Grogu ha iniciado su entrenamiento Jedi y debe
activar un software que permita clasificar su dieta:
alimento = {
 nombre,
 tipo (Puede ser vegetal, animal, insecto),
 nivel de energía (números entre 100-500)

}
Cree un programa que permita recibir 50 alimentos diferentes y
mediante una función primaria después de 5 segundos se
pueda obtener solo los alimentos de tipo vegetal que entreguen
mas de 200 unidades de energía. Finalmente, una función
callback debe permitir entregar la sumatoria de niveles de
energía entregados por los alimentos vegetales consumidos en
la dieta de Grogu.*/

//Datos semilla
let nombres=['carne', 'arroz','atun','platano']
let tipos=['vegetal', 'animal','insecto']
let niveles=[100,200,135,152,580,230]

//Numeros aleatorios donde su limite esta dado por la longitud del arreglo
let numero=Math.floor(Math.random()*nombres.length)
let numero2=Math.floor(Math.random()*tipos.length)
let numero3=Math.floor(Math.random()*niveles.length)

//imprimiendo un elemento de las semillas de forma aleatoria
console.log(nombres[numero])
console.log(tipos[numero2])
console.log(niveles[numero3])

let alimentos=[]

for(let i=0; i<50; i++){
//si voy a llenar un arreglo de objetos el objeto vacio se crea dentro del for
    let alimento={}
    //llenando 1 objeto estudiante

    alimento.nombre=nombres[Math.floor(Math.random()*nombres.length)]
    alimento.tipo=tipos[Math.floor(Math.random()*tipos.length)]
    alimento.nivel=niveles[Math.floor(Math.random()*niveles.length)]

    //agregando el objeto estudiante al arreglo estudiante
    alimentos.push(alimento)
}


function filtrarAlimentos (alimentos,callback){

    setTimeout(function(){

    let alimentosfiltrados=alimentos.filter(function(alimento){
        return(alimento.tipo=="vegetal"&&alimento.nivel>200)

    })
    console.log(alimentosfiltrados)

    callback(alimentosfiltrados)
},5000)

}

filtrarAlimentos(alimentos,function(alimentos){
    let sumaNivel=0
    alimentos.forEach(function(alimento){
        sumaNivel = sumaNivel + alimento.nivel
    })
    console.log(alimentos)
    console.log(`la sumatoria de niveles de
    energía entregados por los alimentos vegetales consumidos en
    la dieta de Grogu:${sumaNivel}`)
    
  
  })

