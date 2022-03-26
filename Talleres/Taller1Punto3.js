/*La luna de Endor pierde temperatura día a día, para ello
hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día */

let obtenerTemperatura =(temperatura1,temperatura2) => ((temperatura1+temperatura2)/2)

console.log ("La temperatura media es:" + obtenerTemperatura(2,6))