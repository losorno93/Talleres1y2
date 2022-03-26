
/*PROBLEMA: Yoda el maestro jedí, necesita asignar a sus aprendices
Padawans 2 actividades dependiendo de la edad de ellos:

• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años

Inicialmente, se debe programar una función que asocie los datos de:
{nombre, planeta, edad y estatura} de 1 Padawan a un objeto (10
segundos) y una vez este objeto sea creado se debe llamar a una función
secundaria que clasifique y muestre en consola la actividad asignada al
Padawan*/



    function validarAprendices(nombre,planeta,edad, estatura, callback){
        setTimeout(function(){
            let aprendiz={
                nombreAprendiz:nombre,
                planetaAprendiz:planeta,
                edadAprendiz:edad,
                estaturaAprendiz:estatura

            }
            //llamando al callback
            callback(aprendiz)
        },10000)
    }

    //llamo a la funcion principal

    validarAprendices("liz","jupite",15,161,function(aprendiz){
    if(aprendiz.edadAprendiz>=15){
        console.log("Manejo del sable de luz")
    }else{
        console.log("Manejo de la fuerza")
    }
})