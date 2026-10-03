// Apostila 2007 — exercício 12: Fahrenheit para Celsius
// 12) Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo): C / 5 = F - 32 / 9. Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F.

let fahrenheit = Number(prompt("Temperatura em Fahrenheit:"));
let celsius = (fahrenheit - 32) * 5 / 9;
alert("Temperatura em Celsius: " + celsius);
