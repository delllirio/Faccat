// Apostila 2007 — exercício 20: dois valores em ordem crescente
// 20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

let a = Number(prompt("Digite o primeiro valor:"));
let b = Number(prompt("Digite o segundo valor:"));
if (a < b) {
    alert(a + ", " + b);
} else {
    alert(b + ", " + a);
}
