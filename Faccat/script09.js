// Apostila 2007 — exercício 13: média ponderada de três notas
// 13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: mediafinal = (n1 * 2 + n2 * 2 + n3 * 5) / 10

let n1 = Number(prompt("Nota 1:"));
let n2 = Number(prompt("Nota 2:"));
let n3 = Number(prompt("Nota 3:"));
let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
alert("Média final: " + media);
