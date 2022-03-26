/*: Watto paga a su personal de ventas un salario de
3500000 mensuales, más una comisión de 1500000 por cada
nave vendida, menos el 5% de deducciones aplicada solo a las
comisiones. Codifica un programa que calcule e imprima el
salario mensual de un vendedor dado;*/


let salario=3500000
let comisionPorNave=(1500000*0.05)
let calcularSalario=(numeroNaves)=>salario+(numeroNaves*comisionPorNave);


console.log("El Salario Mensual es:" + calcularSalario(1))