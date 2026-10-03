// Apostila 2007 — exercício 18: idade para votar
// 18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

let anoAtual = Number(prompt("Ano atual:"));
let anoNascimento = Number(prompt("Ano de nascimento:"));
let idade = anoAtual - anoNascimento;
if (idade >= 16) {
    alert("Poderá votar este ano. Idade: " + idade);
} else {
    alert("Não poderá votar este ano. Idade: " + idade);
}
