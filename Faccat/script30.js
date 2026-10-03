// Apostila 2007 — exercício 34: calcular Z e a resposta A/B/C
// Veja o seguinte algoritmo:
//início
//ler x
//ler y
//z = (x*y) + 5
//se z <= 0 então
//resposta = ‘A’
//senão
//se z <= 100 então
//resposta = ‘B’
//senão
//resposta = ‘C’
// fim_se
// fim_se
//escrever z, resposta
//fim 


let x = Number(prompt("Digite X:"));
let y = Number(prompt("Digite Y:"));
let z = x * y + 5;
let resposta;
if (z <= 0) {
    resposta = "A";
} else if (z <= 100) {
    resposta = "B";
} else {
    resposta = "C";
}
alert("Z = " + z + "\nResposta = " + resposta);
