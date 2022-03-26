//declarando la funcion principal

function principal (usuario, password){

//un objeto de tipo promise

let promesa=new Promise(function(resolve,reject){

    //proceso fx principal

    setTimeout (function(){

    if (usuario=="james123"&&password=="admin123"){
        resolve("Bienvenido")
    }else{
        reject("revisar por favor")
    }
},5000)

})
 
return (promesa)

}
//llamar a la funcion principal
principal('james123','admin123')
.then(function(respuestadelResolve){
    console.log(respuestadelResolve)
})
.catch(function(respuestadelCath){
    console.log(respuestadelCath)
})