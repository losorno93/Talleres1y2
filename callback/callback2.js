//crear un objeto para almacenar inputs
//llamar calback, preguntar si la edad es mayor a 18

//Declaro la funcion principal
function crearUsuario(nombre,edad,callback){
    setTimeout(function(){
        let usuario={
            nombreUsuario:nombre,
            edadUsuario:edad
        }
        //llamando al callback
        callback(usuario)
    },8000)
}

//llamo a la funcion principal

crearUsuario("James",30,function(usuario){
    if(usuario.edadUsuario>=18){
        console.log("Bienvenido")
    }else{
        console.log("Ups no puedes entrar")
    }
})