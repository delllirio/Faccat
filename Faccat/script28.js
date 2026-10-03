// Apostila 2007 — exercício 32: resultado de partida entre dois times
// 32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 

let time1 = prompt("Nome do primeiro time:");
let gols1 = Number(prompt("Gols do primeiro time:"));
let time2 = prompt("Nome do segundo time:");
let gols2 = Number(prompt("Gols do segundo time:"));
if (gols1 > gols2) {
    alert("Vencedor: " + time1);
} else if (gols2 > gols1) {
    alert("Vencedor: " + time2);
} else {
    alert("EMPATE");
}
