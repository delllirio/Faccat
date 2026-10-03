// Apostila 2007 — exercício 33: comparar dois valores
// 33) Ler dois valores e imprimir uma das três mensagens a seguir:
//‘Números iguais’, caso os números sejam iguais
//‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
//‘Segundo maior’, caso o segundo seja maior que o primeiro. 

let a = Number(prompt("Digite o primeiro valor:"));
let b = Number(prompt("Digite o segundo valor:"));
if (a === b) {
    alert("Números iguais");
} else if (a > b) {
    alert("Primeiro é maior");
} else {
    alert("Segundo maior");
}
