// Apostila 2007 — exercício 7: idade expressa em dias
// 7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 

let anos = Number(prompt("Idade em anos:"));
let meses = Number(prompt("Meses além dos anos completos:"));
let dias = Number(prompt("Dias além dos meses completos:"));
let totalDias = anos * 365 + meses * 30 + dias;
alert("Idade em dias: " + totalDias);
