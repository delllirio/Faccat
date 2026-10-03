// Apostila 2007 — exercício 8: percentuais de votos
// 8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

let eleitores = Number(prompt("Total de eleitores:"));
let brancos = Number(prompt("Votos brancos:"));
let nulos = Number(prompt("Votos nulos:"));
let validos = Number(prompt("Votos válidos:"));
if (eleitores > 0) {
    alert("Brancos: " + (brancos / eleitores * 100) + "%\nNulos: " + (nulos / eleitores * 100) + "%\nVálidos: " + (validos / eleitores * 100) + "%");
} else {
    alert("O total de eleitores deve ser maior que zero.");
}
