// Apostila 2007 — exercício 11: salário de vendedor
// 11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. 

let carros = Number(prompt("Quantidade de carros vendidos:"));
let totalVendas = Number(prompt("Valor total das vendas:"));
let salarioFixo = Number(prompt("Salário fixo:"));
let valorPorCarro = Number(prompt("Comissão fixa por carro:"));
let salarioFinal = salarioFixo + carros * valorPorCarro + totalVendas * 5 / 100;
alert("Salário final: R$ " + salarioFinal);
