// Apostila 2007 — exercício 19: maior de dois valores
// 19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 

let a = Number(prompt("Digite o primeiro valor:"));
let b = Number(prompt("Digite o segundo valor:"));
if (a > b) {
    alert("Maior valor: " + a);
} else {
    alert("Maior valor: " + b);
}
