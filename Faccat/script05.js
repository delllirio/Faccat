// Apostila 2007 — exercício 9: reajuste salarial
// 9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 

let salario = Number(prompt("Salário atual:"));
let percentual = Number(prompt("Percentual de reajuste:"));
let novoSalario = salario + salario * percentual / 100;
alert("Novo salário: R$ " + novoSalario);
