
let nombres=['paloma', 'liz','corazon','polo']
let sexos=['0', '1']
let senadores=[]

for(let i=0; i<20; i++){
//si voy a llenar un arreglo de objetos el objeto vacio se crea dentro del for
    let senador={}
    //llenando 1 objeto estudiante

    senador.nombre=nombres[Math.floor(Math.random()*nombres.length)]
    senador.sexo=sexos[Math.floor(Math.random()*sexos.length)]
    senador.voto=Math.floor(Math.random()*1000)

    //agregando el objeto estudiante al arreglo estudiante
    senadores.push(senador)

}
console.log(senadores)

//declaranodo la funcion principal
function filtrarMujeres(senadores,callback){

    setTimeout(function(){

        let senadoras=senadores.filter(function(senador){
            return(senador.sexo=='0'&& senador.voto>250)

        })
        callback(senadoras)

    },10000)
}

//llamando a la funcion principal

filtrarMujeres(senadores,function(senadoras){
  let sumaVotos=0
  senadoras.forEach(function(senadora){
      sumaVotos = sumaVotos + senadora.voto
  })
  console.log(senadoras)
  console.log(`El total de votos del pacto democratico es:${sumaVotos}`)
  

})
