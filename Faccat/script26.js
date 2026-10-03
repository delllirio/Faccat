// Apostila 2007 — exercício 30: três valores em ordem crescente
// 30) Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente.

let a = Number(prompt("Digite A:"));
let b = Number(prompt("Digite B:"));
let c = Number(prompt("Digite C:"));
let auxiliar;
if (a > b) {
    auxiliar = a;
    a = b;
    b = auxiliar;
}
if (a > c) {
    auxiliar = a;
    a = c;
    c = auxiliar;
}
if (b > c) {
    auxiliar = b;
    b = c;
    c = auxiliar;
}
alert(a + ", " + b + ", " + c);
