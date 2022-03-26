/*QUI-GON JINN está encargado de revisar un arreglo
de 20 sables de luz y contabilizar la cantidad de sables que
tienen energías menores a 20 Joules.*/

let cables=[

    { color:"verde",energia:50, portador:"Obi Wan"},
    { color:"amarillo",energia:129, portador:"Obi"},
    { color:"azul",energia:30, portador:"liz"},
    { color:"rojo",energia:60, portador:"Wan"},
    { color:"negro",energia:70, portador:"OWan"},
    { color:"purpura",energia:80, portador:"CobiWan"},
    { color:"beish",energia:90, portador:"liWan"},
    { color:"cafe",energia:40, portador:"DeWan"},
    { color:"gris",energia:30, portador:"MiWan"},
    { color:"azul_cielo",energia:20, portador:"Wanyu"},
    { color:"cristal",energia:10, portador:"Ander"},
    { color:"naranjado",energia:30, portador:"Lucia"},
    { color:"blanco",energia:40, portador:"Lau"},
    { color:"piel",energia:50, portador:"Pet"},
    { color:"violeta",energia:60, portador:"Dan"},
    { color:"morado",energia:80, portador:"Gesh"},
    { color:"fucsia",energia:530, portador:"Wany"},
    { color:"verde_menta",energia:10, portador:"Obilan"},
    { color:"rosa",energia:570, portador:"Obwen"},
    { color:"menta",energia:50, portador:"Andrea"}

]

//opcion 1:

let datosfiltrados=cables.filter(function(cable){

    return(cable.energia<20)
       
       }) 
       console.log(datosfiltrados) 

let sumatoria=0
datosfiltrados.forEach(function(dato){

    sumatoria=sumatoria+1
    


})

console.log(sumatoria)






//Opcion 2:



