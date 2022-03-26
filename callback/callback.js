function principal(nombre,callback){

    setTimeout(function(){
        //Esto va a tener un proceso(¿Que hace esta funcion?)
        console.log("hola "+nombre) 
        //llamamos al callback

        callback()

    },4000)

}

//Llamando la funcion principal

principal ("Juan jo",function(){
    console.log("como estas? soy el callback")
})