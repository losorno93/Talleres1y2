/*10 naves que pueden destruir el planeta, dos amigos tienen una 
mision que tienen que ir a buscar los planos (10) de las naves 


1. recibir 10 datos
2.recorrer el plano y solo se mira si estan entre 1 a 10
3. despues llamr el callback si ve que son bien o no */

function recibirplanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,callback){
    //proceso de la funcion principal
    setTimeout(function(){
        let planos=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
        let planosFiltrados=planos.filter(function(plano){
            return(plano>=1 && plano<=10)
        })
        //llamando al callback
        callback(planosFiltrados)
    },5000)
}

recibirplanos(10,5,100,150,200,250,300,400,500,1000,function(planosFiltrados){
    if (planosFiltrados.length>0){
        console.log("Puedes irte, hay " + planosFiltrados.length + "planos")
    }
    else{
        console.log("devuelve")
    }
})
