// Apostila 2007 — exercício 37: custo de morangos e maçãs
// 37) Uma fruteira está vendendo frutas com a seguinte tabela de preços:

//              Até 5 Kg   /   Acima de 5 Kg
// Morango R$ 2,50 por Kg / R$ 2,20 por Kg
// Maçã R$ 1,80 por Kg   / R$ 1,50 por Kg

//Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 

let morangos = Number(prompt("Quantidade de morangos em kg:"));
let macas = Number(prompt("Quantidade de maçãs em kg:"));
let precoMorango;
let precoMaca;
if (morangos <= 5) {
    precoMorango = 2.50;
} else {
    precoMorango = 2.20;
}
if (macas <= 5) {
    precoMaca = 1.80;
} else {
    precoMaca = 1.50;
}
let total = morangos * precoMorango + macas * precoMaca;
if (morangos + macas > 8 || total > 25) {
    total = total * 0.90;
}
alert("Valor a pagar: R$ " + total);
