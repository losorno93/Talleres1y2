//

let usuarios=[

    { nombre:"juan",edad:32, esPaisa:true},
    { nombre:"maria",edad:15, esPaisa:true},
    { nombre:"james",edad:30, esPaisa:false},
    { nombre:"diomadez",edad:60, esPaisa:false},
    { nombre:"jbalbin",edad:8, esPaisa:true},
    { nombre:"lina",edad:16, esPaisa:true},
    { nombre:"jose",edad:38, esPaisa:false},
    { nombre:"lucho",edad:22, esPaisa:false},
    { nombre:"falcao",edad:30, esPaisa:false},
    { nombre:"mariana",edad:35, esPaisa:true}
    
    ]

 //para cambiar en su totalidad un dato del arreglo lo igualo   
/*let datosMapeados=usuarios.map(function(usuario){
    
    return(usuario.nombre=usuario.nombre+"--cesde")
})
console.log(datosMapeados)
console.log(usuarios)*/

//para mostrar cambiando un dato, pero conservar la informacion que tengo
/*let datosMapeados=usuarios.map(function(usuario){
    
    return(usuario.nombre+"--cesde")
})
console.log(datosMapeados)
console.log(usuarios)*/

let suma=0
usuarios.forEach(function(usuario){
    suma=suma+usuario.edad

    console.log(suma)
})
