// funcion tradicional para calcular
// la distancia entre 2 puntos

let calcularDistancia=(x1,y1,x2,y2)=>Math.sqrt(Math.pow ((x1-x2),2)+Math.pow ((y1-y2),2))
//llamado de funcion 
let distancia=calcularDistancia(0,0,-10,-10).toFixed(2);
console.log(`La distancia calculada es ${distancia}`)