// Apostila 2007 — exercício 31: verificar se três lados formam triângulo
// 31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. 

let a = Number(prompt("Lado A:"));
let b = Number(prompt("Lado B:"));
let c = Number(prompt("Lado C:"));
if (a < b + c && b < a + c && c < a + b) {
    alert("Formam um triângulo");
} else {
    alert("Não formam um triângulo");
}
