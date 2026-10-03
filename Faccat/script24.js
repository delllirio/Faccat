// Apostila 2007 — exercício 28: maior de três valores
// 28) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let a = Number(prompt("Digite A:"));
let b = Number(prompt("Digite B:"));
let c = Number(prompt("Digite C:"));
let maior = a;
if (b > maior) {
    maior = b;
}
if (c > maior) {
    maior = c;
}
alert("Maior valor: " + maior);
