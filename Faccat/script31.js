// Apostila 2007 — exercício 35: preço de combustível com desconto
//  Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// ÁLCOOL 
//   até 20 litros, desconto de 3% por litro Álcool
//   acima de 20 litros, desconto de 5% por litro
// GASOLINA 
//   até 20 litros, desconto de 4% por litro Gasolina
//   acima de 20 litros, desconto de 6% por litro
// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.

let litros = Number(prompt("Quantidade de litros vendidos:"));
let tipo = prompt("Tipo de combustível (A para álcool, G para gasolina):").toUpperCase();
let precoLitro;
let desconto;
if (tipo === "A") {
    precoLitro = 2.90;
    if (litros <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.05;
    }
} else if (tipo === "G") {
    precoLitro = 3.30;
    if (litros <= 20) {
        desconto = 0.04;
    } else {
        desconto = 0.06;
    }
} else {
    precoLitro = 0;
    desconto = 0;
}
if (precoLitro === 0) {
    alert("Tipo de combustível inválido.");
} else {
    let total = litros * precoLitro;
    let valorPagar = total - total * desconto;
    alert("Valor a pagar: R$ " + valorPagar);
}
