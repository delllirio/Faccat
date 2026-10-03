// Apostila 2007 — exercício 23: cálculo do peso ideal por sexo
// 23) Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas:  - para sexo masculino: peso ideal = (72.7 * altura) - 58 /// - para sexo feminino: peso ideal = (62.1 * altura) - 44.7 

let nome = prompt("Nome:");
let altura = Number(prompt("Altura em metros:"));
let sexo = prompt("Sexo (M/F):").toUpperCase();
let pesoIdeal;
if (sexo === "M") {
    pesoIdeal = 72.7 * altura - 58;
} else {
    pesoIdeal = 62.1 * altura - 44.7;
}
alert("Nome: " + nome + "\nPeso ideal: " + pesoIdeal);
