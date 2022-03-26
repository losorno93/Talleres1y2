//declarando la funcion principal
function principal(callback){
    setTimeout(function(){
        //definiendo el proceso de la funcion principal
        console.log("soy el proceso principal")
        //llamado al callback
        callback()
    },2000)
}

//llamando la funcion principal
principal(function(){
    //proceso del callback
    console.log("soy el proceso callback")
})