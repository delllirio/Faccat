// Apostila 2007 — exercício 29: soma dos dois maiores de três valores
// 29) Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. 

let a = Number(prompt("Digite A:"));
let b = Number(prompt("Digite B:"));
let c = Number(prompt("Digite C:"));
let soma;
if (a < b && a < c) {
    soma = b + c;
} else if (b < a && b < c) {
    soma = a + c;
} else {
    soma = a + b;
}
alert("Soma dos dois maiores: " + soma);
