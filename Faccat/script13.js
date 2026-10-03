// Apostila 2007 — exercício 17: média e aprovação
// 17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. 

let nota1 = Number(prompt("Nota da primeira avaliação:"));
let nota2 = Number(prompt("Nota da segunda avaliação:"));
let media = (nota1 + nota2) / 2;
if (media >= 6) {
    alert("Aprovado. Média: " + media);
} else {
    alert("Não aprovado. Média: " + media);
}
