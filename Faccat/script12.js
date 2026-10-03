// Apostila 2007 — exercício 16: custo das maçãs
// 16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra. 

let quantidade = Number(prompt("Quantas maçãs foram compradas?"));
let preco;
if (quantidade < 12) {
    preco = 1.30;
} else {
    preco = 1.00;
}
alert("Custo total: R$ " + (quantidade * preco));
